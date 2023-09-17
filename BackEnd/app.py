
from flask import Flask,make_response, json, request, session, jsonify
from google.cloud.sql.connector import Connector, IPTypes
from sqlalchemy import create_engine, text

import os
import pg8000
import pymysql
import sqlalchemy


app = Flask(__name__)

@app.route("/index")
def main():
    return "Welcome!"


def connect_with_connector() -> create_engine:
    instance_connection_name = "strategic-lens-399220:us-central1:build-pulse"
    db_user = "postgres"
    db_pass = "buildpulse"
    db_name = "BuildPulse"
    ip_type = IPTypes.PUBLIC

    # Initialize Cloud SQL Python Connector object
    connector = Connector()

    def getconn():
        conn = connector.connect(
            instance_connection_name,
            "pg8000",
            user=db_user,
            password=db_pass,
            db=db_name,
            ip_type=ip_type,
        )
        return conn

    # Create a SQLAlchemy engine using the 'creator' argument
    engine = create_engine(
        "postgresql+pg8000://",
        creator=getconn,
    )
    return engine



@app.route("/repairs", methods=['GET'])
def repairs():
    try:
        engine = connect_with_connector()
        conn = engine.connect()
        asset_type = request.args.get('asset_type')
        manufacturer = request.args.get('manufacturer')
        start_date = request.args.get('start_date')
        end_date = request.args.get('end_date')
        if (asset_type == "All"):
            sql = text("select sum(s.repairs),b.zip_code from manufacturer as m,service s,asset as a,building as b,resource as r where a.asset_id=r.asset_id and r.resource_id=s.resource_id and s.manufacturer_id=m.manufacturer_id and r.building_id=b.building_id and m.name= '{}' and last_service_date between '{}' and '{}' group by b.zip_code;".format(
                manufacturer, start_date, end_date))
        elif (manufacturer == "All"):
            sql = text("select sum(s.repairs),b.zip_code from manufacturer as m,service s,asset as a,building as b,resource as r where a.asset_id=r.asset_id and r.resource_id=s.resource_id and s.manufacturer_id=m.manufacturer_id and r.building_id=b.building_id and a.asset_type = '{}' and last_service_date between '{}' and '{}' group by b.zip_code;".format(
                asset_type, start_date, end_date))
        elif (manufacturer == "All" and asset_type == "All"):
            sql = text("select sum(s.repairs),b.zip_code from manufacturer as m,service s,asset as a,building as b,resource as r where a.asset_id=r.asset_id and r.resource_id=s.resource_id and s.manufacturer_id=m.manufacturer_id and r.building_id=b.building_id and last_service_date between '{}' and '{}' group by b.zip_code;".format(
                start_date, end_date))
        else:
            sql = text("select sum(s.repairs),b.zip_code from manufacturer as m,service s,asset as a,building as b,resource as r where a.asset_id=r.asset_id and r.resource_id=s.resource_id and s.manufacturer_id=m.manufacturer_id and r.building_id=b.building_id and m.name= '{}' and a.asset_type = '{}' and last_service_date between '{}' and '{}' group by b.zip_code;".format(
                manufacturer, asset_type, start_date, end_date))

        result = conn.execute(sql).fetchall()
        for i in range(len(result)):
            result[i] = list(result[i])
        return result

    except Exception as err:
        print(err)

@app.route("/assets",methods=['GET'])
def select_rows():
    try:
        engine = connect_with_connector()
        query = text("SELECT * FROM asset;")
        conn = engine.connect()
        result = conn.execute(query).fetchall()
        for i in range(len(result)):
            result[i] = list(result[i])
        return result
    except Exception as err:
        print(err)

@app.route("/count", methods=['GET'])
def count():
    try:
        sql = text("select count(s.repairs) as number_of_repairs, a.asset_type from asset as a, service as s, resource as r where a.asset_id=r.asset_id and s.resource_id= r.resource_id  and s.repairs>0 group by a.asset_type")
        engine = connect_with_connector()
        conn = engine.connect()
        result = conn.execute(sql).fetchall()
        for i in range(len(result)):
            result[i] = list(result[i])
        print(result)
        return result
    except Exception as err:
        print(err)


@app.route("/avg_cost", methods=['GET'])
def avg_cost():
    try:
        sql = text("select sum(s.avg_cost), a.asset_type from asset as a, service as s, resource as r where a.asset_id=r.asset_id and s.resource_id= r.resource_id group by a.asset_type;")
        engine = connect_with_connector()
        conn = engine.connect()
        result = conn.execute(sql).fetchall()
        for i in range(len(result)):
            result[i] = list(result[i])
        return result

    except Exception as err:
        print(err)

if __name__ == "__main__":
    # conn= getconn()
    app.run(host="127.0.0.1", port=8002)
