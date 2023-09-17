#!/usr/bin/env python
# coding: utf-8

# In[4]:


import random
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import tensorflow as tf
from tensorflow.keras import Sequential
from keras.models import load_model
from tensorflow.keras.layers import Dense, Conv2D, MaxPooling2D, Dropout, Flatten
from tensorflow.keras.datasets import cifar10
from tensorflow.keras.utils import to_categorical
from matplotlib.ticker import (MultipleLocator, FormatStrFormatter)
from dataclasses import dataclass
import time
from sklearn.model_selection import GridSearchCV
from keras.wrappers.scikit_learn import KerasClassifier
from keras.optimizers import Adam


# In[117]:


data = pd.read_csv("C:/Users/14692/Desktop/hackothon/mlh v cbre dataset/dataset_use.csv")


# In[118]:


data.head(n=6)
print(len(data))


# In[119]:


cor = data.corr()
cor


# In[120]:


data.groupby("Asset Type").count()


# In[121]:


#data.hist()
data.hist(column="Asset Type", by="Floor")


# In[122]:


data.hist(column="Asset Type", by="Work Orders")


# In[123]:


data.hist(column="Asset Type", by="Repairs")


# In[124]:


data.hist(column="Asset Type", by="Manufacturer")


# In[125]:


import seaborn as sns
sns.boxplot(data['Floor'])


# In[126]:


data.dtypes


# In[127]:


data.hist(column="Floor", by="Repairs")


# In[128]:


data['Operational Time (hrs)'].describe()


# In[129]:


data['Work Orders'].describe()


# In[130]:


data['Repairs'].describe()


# In[131]:


data['Days'].describe()


# In[132]:


from matplotlib import pyplot
pyplot.scatter(data['Asset Type'],data['Work Orders'])
pyplot.show()


# In[133]:


sns.heatmap(data.corr());


# In[564]:


import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Set the number of rows in the dataset
num_rows = 1000

# Seed for reproducibility
np.random.seed(0)

# Generate random data for each attribute
asset_ids = [i for i in range(1, num_rows + 1)]
asset_types = np.random.choice(['Electrical Panel', 'Elevator', 'Fire Alarm', 'HVAC', 'Plumbing'], size=num_rows)
floors = np.random.randint(1, 11, size=num_rows)
rooms = np.random.randint(101, 110, size=num_rows)
installation_dates = [datetime(2020, 1, 1) + timedelta(days=np.random.randint(0, 730)) for _ in range(num_rows)]
manufacturers = np.random.randint(1, 5, size=num_rows)
operational_time = np.random.randint(0, 5000, size=num_rows)
work_orders1 = np.random.randint(10, size=num_rows)
repairs = np.random.randint(0, 5, size=num_rows)
last_serviced_dates = [installation_dates[i] + timedelta(days=np.random.randint(0, 365)) for i in range(num_rows)]
days_since_last_service = [(datetime.now() - last_serviced_dates[i]).days for i in range(num_rows)]
#work_remaining = (work_orders1[i] - repairs[i] for i in range(num_rows))

# Create a DataFrame
df1 = pd.DataFrame({
    'Asset ID': asset_ids,
    'Asset Type': asset_types,
    'Floor': floors,
    'Room': rooms,
    'Installation Date': installation_dates,
    'Manufacturer': manufacturers,
    'Operational Time (hrs)': operational_time,
    'Work Orders': work_orders1,
    'Repairs': repairs,
    'Last Serviced Date': last_serviced_dates,
    'Days': days_since_last_service,
})

# Add some correlations between attributes (for demonstration purposes)
df1['Floor'] = np.round(df1['Floor'] + df1['Repairs'] * 0.9)
df1['Room'] = np.round(df1['Room'] + df1['Repairs'] * 0.9)
df1['Manufacturer'] = np.round(df1['Manufacturer'] + df1['Repairs'] * 0.2)
df1['Repairs'] = np.round(df1['Repairs'] + df1['Manufacturer'] * 0.9)
#df1['Work Remaining'] = np.round(df1['Work Remaining'] + df1['Manufacturer'] * 0.1)
#df1['Repairs'] = np.round(df1['Repairs'] + df1['Work Remaining'] * 0.9)

# Print the first few rows of the generated dataset
print(df1.head())


# In[565]:


sns.heatmap(df1.corr());


# In[566]:


df1


# In[551]:


csv_file_path = "C:/Users/14692/Desktop/hackothon/mlh v cbre dataset/dataset_use_gen5.csv"

df1.to_csv(csv_file_path, index=False)


# In[5]:


data1 = pd.read_csv("C:/Users/14692/Desktop/hackothon/mlh v cbre dataset/dataset_use_gen4.csv")


# In[622]:


#data1['Floor'] = np.round(data1['Floor'] + data1['Work Remaining'] * 0.9)
#data1['Manufacturer'] = np.round(data1['Manufacturer'] + data1['Work Remaining'] * 0.9)


# In[6]:


data1.head(n=6)
print(len(data1))


# In[7]:


sns.heatmap(data1.corr());


# In[8]:


from matplotlib import pyplot
pyplot.scatter(data1['Operational Time (hrs)'],data1['Repairs'])
pyplot.show()


# In[9]:


from matplotlib import pyplot
pyplot.scatter(data1['Work Orders'],data1['Repairs'])
pyplot.show()


# In[10]:


data1.hist(column="Floor", by="Repairs")
data1.hist(column="Operational Time (hrs)", by="Repairs")


# In[11]:


import seaborn as sns
sns.boxplot(data1['Floor'])


# In[12]:


import seaborn as sns
sns.boxplot(data1['Repairs'])


# In[13]:


import seaborn as sns
sns.boxplot(data1['Work Orders'])


# In[14]:


data1['Room'].describe()


# In[15]:


data1['Asset Type'].describe()


# In[16]:


import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler, LabelEncoder
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Embedding, Flatten, concatenate
import matplotlib.pyplot as plt
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.neighbors import KNeighborsClassifier


# In[17]:


le = LabelEncoder()
data1['Asset_Type_Encoded'] = le.fit_transform(data1['Asset Type'])

selected_features = ['Room', 'Floor', 'Asset_Type_Encoded', 'Manufacturer', 'Repairs']
selected_data= data1[selected_features]


# In[18]:


selected_data


# In[19]:


X = selected_data.values[:,:-1]
Y = data1['Repairs'].values
X, y = np.array(X), np.array(Y)


# In[20]:


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.15,random_state=41)


# In[21]:


from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
model = LogisticRegression(random_state=9,solver='liblinear')

# Train the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model's performance
accuracy = accuracy_score(y_test, y_pred)
confusion = confusion_matrix(y_test, y_pred)
classification_report_str = classification_report(y_test, y_pred)

# Print the results
print(f"Accuracy: {accuracy}")
print("Confusion Matrix:")
print(confusion)
print("Classification Report:")
print(classification_report_str)


# In[680]:


model = RandomForestClassifier(n_estimators=100)  # Example for classification

# Train the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model's performance (classification or regression metrics)
# For classification:
accuracy = accuracy_score(y_test, y_pred)
# For regression:
# mse = mean_squared_error(y_test, y_pred)
# r2 = r2_score(y_test, y_pred)

# Print the results
print(f"Accuracy: {accuracy}")
confusion = confusion_matrix(y_test, y_pred)
print(confusion)
import joblib
# Load the saved model
joblib.dump(model, 'model.pkl')


# In[666]:


model = SVC(kernel='linear', random_state=42)  # You can choose different kernels (e.g., 'linear', 'rbf', 'poly')

# Train the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model's performance (classification metrics)
accuracy = accuracy_score(y_test, y_pred)
confusion = confusion_matrix(y_test, y_pred)
classification_report_str = classification_report(y_test, y_pred)

# Print the results
print(f"Accuracy: {accuracy}")
print("Confusion Matrix:")
print(confusion)
print("Classification Report:")
print(classification_report_str)


# In[667]:


model = KNeighborsClassifier(n_neighbors=5)  # You can adjust the number of neighbors (n_neighbors) as needed

# Train the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model's performance (classification metrics)
accuracy = accuracy_score(y_test, y_pred)
confusion = confusion_matrix(y_test, y_pred)
classification_report_str = classification_report(y_test, y_pred)

# Print the results
print(f"Accuracy: {accuracy}")
print("Confusion Matrix:")
print(confusion)
print("Classification Report:")
print(classification_report_str)


# In[1]:


import joblib

# Load the saved model
loaded_model = joblib.load('model.pkl')


# In[22]:


y_pred = loaded_model.predict(X_test)

# Evaluate the model's performance (classification or regression metrics)
# For classification:
accuracy = accuracy_score(y_test, y_pred)
# For regression:
# mse = mean_squared_error(y_test, y_pred)
# r2 = r2_score(y_test, y_pred)

# Print the results
print(f"Accuracy: {accuracy}")
confusion = confusion_matrix(y_test, y_pred)
print(confusion)


# In[ ]:


new_data = [[feature1, feature2, feature3, ...]]  # Ensure the features are in the correct order

# Make predictions for the real-time test case
predictions = loaded_model.predict(new_data)

