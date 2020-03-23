#ifndef P2_HEADER_INCLUDED
#define P2_HEADER_INCLUDED

////////////////////////////////////////////////////////////////////////////////
//
//  File          : p2-support.h
//  Description   : This is a set of struct definitions and general-purpose utility functions we use
//                  for the 257 assignment #2.
//

struct Employee
{
    char ID[6];
    char firstName[11];
    char lastName[11];
    char email[21];
    double salary;
};

struct DataBase
{
    struct Employee** emp;
    int total;
};

// Function Declarations

void displayMenu(struct DataBase* );
    // Displays the user with options to choose from for their Database

void sortEmployeesByID(struct DataBase*);
    // Sorts the employees in the given database by their ID Number. 

void displayEmployees(struct DataBase*);
    // Displays all the employees in the database. 

void searchEmployeeByID(struct DataBase *, char *);

void searchEmployeeByLastName(struct DataBase *, char *);

void deleteEmployeeByLastName(struct DataBase *, char *);

void deleteEmployeeByID(struct DataBase *, char *);

void createRecord(char*, char*, char*, char*, double, struct DataBase*);
    // Adds a new employee to the Database
#endif // P2_HEADER_INCLUDED