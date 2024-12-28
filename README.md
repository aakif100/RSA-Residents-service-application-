# RSA-Residents-service-application- (1.1 update done)

RSA UPDATE 1.1 DEMO :


https://github.com/user-attachments/assets/5c8f6f83-b627-4e67-bf7c-90ed0f493a01

# RSA - Residents Service Application

RSA (Residents Service Application) is a secure web application designed to streamline service requests for residents. Users can view a list of residents and make service requests, but only after successfully validating their identity with a password. The project focuses on security, ease of use, and efficient data management.

## Features

- **Dynamic Resident List**: The home page dynamically displays a list of residents using EJS templates.
- **Secure Service Requests**: Residents must validate their identity by entering the correct password before submitting a service request.
- **SQL Database Integration**: Resident details such as names, email IDs, and passwords are stored and managed efficiently using an SQL database.
- **Data Generation with Faker**: The Faker package is used to generate fake resident data for testing purposes.

## Technologies Used

- **Backend**: [Express.js](https://expressjs.com/)
- **Templating Engine**: [EJS](https://ejs.co/)
- **Database**: SQL (connected via [sql2](https://www.npmjs.com/package/sql2))
- **Testing Data**: [Faker.js](https://fakerjs.dev/)

## NOTE :
DB_HOST=your-database-host
<br>
DB_USER=your-database-username
<br>

DB_PASSWORD=your-database-password
<br>

DB_NAME=your-database-name

## Installation and Setup

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/rsa-residents-service-app.git
   cd rsa-residents-service-app


