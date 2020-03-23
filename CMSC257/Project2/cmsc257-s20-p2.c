/* Author : Cody Woodson
*  CMSC 257 Project 2
*  Last Edit: 3/14/2020
*/

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "p2-support.h"

#define dbSIZE 100
#define idSIZE 6
#define nameSIZE 11
#define emailSIZE 21

void initialize (struct DataBase *db)
{
    db->emp = malloc(sizeof(struct Employee)*dbSIZE);
    db->total = 0;

    createRecord ("00306", "Wei", "Martin", "wm@aol.com", 98999.99, db);
    createRecord ("00307", "Mitch", "Martinez", "mitch@aol.com", 78999.88, db);
    createRecord ("00408", "David", "Boyle", "db@aol.com", 100000.01, db);
    createRecord ("00204", "Christine", "Bluer", "cb@aol.com", 40009.99, db);
    createRecord ("00305", "Stephen", "Black", "sb@aol.com", 8500.01, db);
    createRecord ("00409", "Chris", "Boyle", "cb@aol.com", 200000.01, db);
    createRecord ("00101", "Paula", "Brown", "pb@aol.com", 1000.37, db);
    createRecord ("00102", "Paul", "Green", "pg@aol.com", 2700.45, db);
    createRecord ("00203", "Chris", "Reddy", "cr@aol.com", 2304.67, db);

}

/*
* 1 - sort
* 2 - display
* 3 - ID search
* 4 - last name search
* 5 - ID delete
* 6 - last name delete
* 7 - exit
*/
int main ()
{
    int option;
    int i;
    char id[6];
    char last[11];
    struct DataBase* db;
    db = malloc(sizeof(struct DataBase));
    initialize(db);
    displayMenu(db);
    scanf("%d", &option);
    printf("\n");

    while(1){
        switch (option)
        {
        case 1:
            sortEmployeesByID(db);
            printf("\nDatabase sorted by ID\n");
            break;
        
        case 2:
            displayEmployees(db);
            break;

        case 3:
            printf("Enter the ID to search for: ");
            scanf("%s", id);
            searchEmployeeByID(db, id);
            break;

        case 4:
            printf("Enter the last name to search for: ");
            scanf("%s", last);
            searchEmployeeByLastName(db, last);
            break;

        case 5:
            printf("Enter the ID to delete: ");
            scanf("%s", id);
            deleteEmployeeByID(db, id);
            break;

        case 6:
            printf("Enter the last name to delete: ");
            scanf("%s", last);
            deleteEmployeeByLastName(db, last);
            break;

        case 7:
            for(i = 0; i < db->total; i++){
                free(db->emp[i]);
                db->emp[i] = NULL;
            }
            free(db->emp);
            db->emp = NULL;
            free(db);
            db = NULL;
            return 0;
            break;
        
        default:
            printf("Please enter a number 1-7\n");
        }
        displayMenu(db);
        scanf("%d", &option);
        printf("\n");
    }
    

}