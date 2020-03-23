#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "p2-support.h"

// Displays a Menu of Options for the user to choose from
void displayMenu(struct DataBase* db){
    printf("\n**************************************************************\n");
    printf("***** Woodsonca Employee Database - Total Employees: %3d *****\n", db->total);
    printf("**************************************************************\n");
    printf("1. Sort by ID\n");
    printf("2. Display all employees\n");
    printf("3. Search employee by ID\n");
    printf("4. Search employee by Last Name\n");
    printf("5. Delete employee by ID\n");
    printf("6. Delete employee by last Name\n");
    printf("7. Exit\n");
    printf("\nEnter an option 1-7: ");
}

void displayEmployees(struct DataBase* db){
    int i;
    printf("\n  No. EmpID Employee Name         Email                Salary     \n");
    printf("  --- ----- --------------------- -------------------- ---------- \n");
    for(i = 0; i < db->total; i++){
        char fullName[22] = {'\0'};
        strncat(fullName, db->emp[i]->firstName, 10);
        strcat(fullName," ");
        strncat(fullName, db->emp[i]->lastName, 11);
        printf("[ %03d ", i + 1);
        printf("%s ", db->emp[i]->ID);
        printf("%-21s ", fullName);
        printf("%-20s ", db->emp[i]->email);
        printf("$%9.2f ]", db->emp[i]->salary);
        printf("\n");
    }
    printf("\n");
}

void createRecord(char* ID, char* firstName, char* lastName, char* email, double salary, struct DataBase* db){
    struct Employee* newEmp = (struct Employee*) malloc(sizeof(struct Employee));
    strncat(newEmp->ID, ID, 5);
    strncat(newEmp->firstName, firstName, 10);
    strncat(newEmp->lastName, lastName, 10);
    strncat(newEmp->email, email, 20);
    newEmp->salary = salary;

    db->emp[db->total] = newEmp;
    db->total++;
}

void sortEmployeesByID(struct DataBase* db){
    int i, j, min;
    struct Employee* temp;

    for (i = 0; i < db->total; i++){
        min = i;
        for (j = i; j < db->total; j++){
            if(strcmp(db->emp[min]->ID, db->emp[j]->ID) > 0){
                min = j;
            }
        }
        
        temp = db->emp[min];
        db->emp[min] = db->emp[i];
        db->emp[i] = temp;
    }
}

void searchEmployeeByID(struct DataBase *db, char *id){
    int hits = 0; 
    int i;

    for(i = 0; i < db->total; i++){
        if (strcmp(id, db->emp[i]->ID) == 0){
            if(hits == 0) {
                printf("\nFound employee(s): \n\n");
                printf("  No. EmpID Employee Name         Email                Salary     \n");
                printf("  --- ----- --------------------- -------------------- ---------- \n");
            }
            char fullName[22] = {'\0'};
            strncat(fullName, db->emp[i]->firstName, 10);
            strcat(fullName," ");
            strncat(fullName, db->emp[i]->lastName, 11);
            printf("[ %03d ", i + 1);
            printf("%s ", db->emp[i]->ID);
            printf("%-21s ", fullName);
            printf("%-20s ", db->emp[i]->email);
            printf("$%9.2f ]", db->emp[i]->salary);
            printf("\n");
            hits++;
        }
        
        
    }

    printf("\n");
    if(hits == 0) {
        printf("No matches found for \"%s\"\n", id);
    } 
}

void searchEmployeeByLastName(struct DataBase *db, char *last){
    int hits = 0; 
    int i;

    for(i = 0; i < db->total; i++){
        if (strcmp(last, db->emp[i]->lastName) == 0){
            if(hits == 0) {
                printf("\nFound employee(s): \n\n");
                printf("  No. EmpID Employee Name         Email                Salary     \n");
                printf("  --- ----- --------------------- -------------------- ---------- \n");
            }
            char fullName[22] = {'\0'};
            strncat(fullName, db->emp[i]->firstName, 10);
            strcat(fullName," ");
            strncat(fullName, db->emp[i]->lastName, 11);
            printf("[ %03d ", i + 1);
            printf("%s ", db->emp[i]->ID);
            printf("%-21s ", fullName);
            printf("%-20s ", db->emp[i]->email);
            printf("$%9.2f ]", db->emp[i]->salary);
            printf("\n");
            hits++;
        }
        
        
    }

    printf("\n");
    if(hits == 0) {
        printf("No matches found for \"%s\"\n", last);
    } 
}

void deleteEmployeeByLastName(struct DataBase* db, char* last){
    int i, j;
    for(i = 0; i < db->total; i++){
        if (strcmp(last, db->emp[i]->lastName) == 0){
            printf("\nDeleted employee: \n\n");
            printf("  No. EmpID Employee Name         Email                Salary     \n");
            printf("  --- ----- --------------------- -------------------- ---------- \n");
            char fullName[22] = {'\0'};
            strncat(fullName, db->emp[i]->firstName, 10);
            strcat(fullName," ");
            strncat(fullName, db->emp[i]->lastName, 11);
            printf("[ %03d ", i + 1);
            printf("%s ", db->emp[i]->ID);
            printf("%-21s ", fullName);
            printf("%-20s ", db->emp[i]->email);
            printf("$%9.2f ]", db->emp[i]->salary);
            printf("\n\n");
            free(db->emp[i]);
            db->emp[i] = NULL;
            for (j = i; j < db->total - 1; j++) {
                db->emp[j] = db->emp[j + 1];
            }
            //free(db->emp[db->total]);
            db->emp[db->total] = NULL;
            db->total--;
            return;
        }
    }
    printf("\nNo employee found with last name: \"%s\"\n", last);
}

void deleteEmployeeByID(struct DataBase* db, char* id){
    int i, j;
    for(i = 0; i < db->total; i++){
        if (strcmp(id, db->emp[i]->ID) == 0){
            printf("\nDeleted employee: \n\n");
            printf("  No. EmpID Employee Name         Email                Salary     \n");
            printf("  --- ----- --------------------- -------------------- ---------- \n");
            char fullName[22] = {'\0'};
            strncat(fullName, db->emp[i]->firstName, 10);
            strcat(fullName," ");
            strncat(fullName, db->emp[i]->lastName, 11);
            printf("[ %03d ", i + 1);
            printf("%s ", db->emp[i]->ID);
            printf("%-21s ", fullName);
            printf("%-20s ", db->emp[i]->email);
            printf("$%9.2f ]", db->emp[i]->salary);
            printf("\n\n");
            free(db->emp[i]);
            db->emp[i] = NULL;
            for (j = i; j < db->total - 1; j++) {
                db->emp[j] = db->emp[j + 1];
            }
            //free(db->emp[db->total]);
            db->emp[db->total] = NULL;
            db->total--;
            return;
        }
    }
    printf("\nNo employee found with ID: \"%s\"\n", id);
}