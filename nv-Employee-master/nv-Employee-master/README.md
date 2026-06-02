# Project: nv-Employee

This project is a variation of the nv-webblog68 project, extended with a new model: **Employee**.

## New Model: Employee

### Schema
- **firstName**: STRING\n- **lastName**: STRING\n- **email**: STRING\n- **position**: STRING\n- **salary**: FLOAT

## New Controller
A dedicated controller `EmployeeController` has been added to handle CRUD operations for `Employee`.

## New Routes
The following routes have been added to `server/src/routes.js`:

- **GET** `/employees` - Get all employees
- **POST** `/employee` - Create a new employee
- **GET** `/employee/:employeeId` - Get a employee by ID
- **PUT** `/employee/:employeeId` - Update a employee
- **DELETE** `/employee/:employeeId` - Delete a employee

## Usage
Follow standard setup instructions for Client and Server.
