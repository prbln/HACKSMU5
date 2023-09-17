import joblib
from flask import Flask,make_response, json, request, session, jsonify
from google.cloud.sql.connector import Connector, IPTypes
from sqlalchemy import create_engine, text

import os
import pg8000
import pymysql
import sqlalchemy
app = Flask(__name__)
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

@app.route("/predict", methods=['GET'])
def predict():
    try:
        loaded_model=joblib.load("PredictiveAnalysis/model.pkl")
        prediction_list=[]
        data=[[105, 3,0,3]]
        for i in range(0,5):
            data[0][2]=i
            print(data)
            prediction= loaded_model.predict(data)
            print(prediction)
            prediction_list.append(prediction)

        return list(list(map(int,prediction_list)))
    
    except Exception as err:
        print(err)


if __name__ == "__main__":
    # conn= getconn()
    app.run(host="127.0.0.1", port=8002)




