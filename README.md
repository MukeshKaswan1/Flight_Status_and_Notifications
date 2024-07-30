# Flight Status and Notifications System

## Overview

This project provides a real-time flight status and notifications system. It leverages Django for the backend, RabbitMQ and Kafka for message queuing, Firebase Cloud Messaging for notifications, and MongoDB for data storage. The system is designed to handle flight status updates and send notifications to passengers.

## Features

- **Real-time Updates**: Display current flight status.
- **Push Notifications**: Send notifications via SMS, email, or app notifications.

## Technologies

- **Frontend**: HTML, CSS, React.js
- **Backend**: Python, Django
- **Database**: MongoDB (MongoDB Atlas)
- **Message Queuing**: RabbitMQ, Kafka
- **Notifications**: Firebase Cloud Messaging

## Installation

### Prerequisites

- Python 3.8+
- Django 4.1+
- MongoDB Atlas account
- RabbitMQ instance
- Kafka instance
- Firebase project with Cloud Messaging

### Clone the Repository

git clone https://github.com/MukeshKaswan1/Flight_Status_and_Notifications.git

cd flight-status-notifications

## Set Up the Backend

### Create a virtual environment and activate it:

python3 -m venv venv

source venv/bin/activate

## Install required packages:

pip install -r requirements.txt

Run Django migrations:

python manage.py migrate

## Start the Django development server:

python manage.py runserver

## Set Up MongoDB

Create a MongoDB Atlas cluster and configure the connection URI in Django settings.

Set Up RabbitMQ and Kafka

## Install and configure RabbitMQ and Kafka instances.

Ensure the backend is configured to communicate with these instances.

  Set Up Firebase Cloud Messaging

  Create a Firebase project and configure Cloud Messaging.

  Add FCM credentials to the Django settings.

## Set Up the Frontend

### Navigate to the frontend directory:

  cd frontend

  Install npm packages:

  npm install

  Start the React development server:

  npm start

## Conclusion
The Flight Status and Notifications system offers a comprehensive solution for providing real-time flight updates and notifications to passengers. By utilizing a robust tech stack, including React.js for the frontend, Django for the backend, MongoDB for data storage, RabbitMQ and Kafka for messaging, and Firebase Cloud Messaging for notifications, the system ensures reliable and timely delivery of critical flight information. This project demonstrates the potential for enhancing the passenger experience through advanced technology integration.



