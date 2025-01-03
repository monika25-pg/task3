from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import LabelEncoder
import matplotlib.pyplot as plt
import seaborn as sns

# Simulated dataset
np.random.seed(42)
data = {
    "Age": np.random.randint(18, 70, 500),
    "Job": np.random.choice(["Admin", "Technician", "Entrepreneur", "Blue-Collar", "Management"], 500),
    "Marital_Status": np.random.choice(["Married", "Single", "Divorced"], 500),
    "Education": np.random.choice(["Primary", "Secondary", "Tertiary"], 500),
    "Previous_Contact": np.random.choice(["Yes", "No"], 500, p=[0.3, 0.7]),
    "Balance": np.random.randint(-2000, 5000, 500),
    "Outcome": np.random.choice(["Purchase", "No Purchase"], 500, p=[0.4, 0.6]),
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Encode categorical variables
encoder = LabelEncoder()
for col in ["Job", "Marital_Status", "Education", "Previous_Contact", "Outcome"]:
    df[col] = encoder.fit_transform(df[col])

# Split data into features and target
X = df.drop("Outcome", axis=1)
y = df["Outcome"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train the Decision Tree Classifier
clf = DecisionTreeClassifier(random_state=42)
clf.fit(X_train, y_train)

# Predictions
y_pred = clf.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)
cm = confusion_matrix(y_test, y_pred)

# Visualization of Decision Tree
plt.figure(figsize=(15, 10))
plot_tree(clf, feature_names=X.columns, class_names=["No Purchase", "Purchase"], filled=True, fontsize=10)
plt.title("Decision Tree for Predicting Purchase", fontsize=16)
plt.show()

# Output results
accuracy, report, cm
import pandas as pd
import seaborn as sns

# Create a synthetic traffic accident dataset
np.random.seed(42)
data = {
    "Accident_ID": range(1, 501),
    "Road_Condition": np.random.choice(["Dry", "Wet", "Icy", "Snowy"], size=500, p=[0.5, 0.3, 0.1, 0.1]),
    "Weather": np.random.choice(["Clear", "Rainy", "Foggy", "Snowy"], size=500, p=[0.6, 0.2, 0.1, 0.1]),
    "Time_of_Day": np.random.choice(["Morning", "Afternoon", "Evening", "Night"], size=500, p=[0.25, 0.35, 0.25, 0.15]),
    "Latitude": np.random.uniform(40.0, 41.0, size=500),  # Simulated latitudes
    "Longitude": np.random.uniform(-80.0, -79.0, size=500),  # Simulated longitudes
}

accident_data = pd.DataFrame(data)

# Display first few rows of the dataset
accident_data.head()
