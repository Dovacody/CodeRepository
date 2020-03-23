////////////////////////////////////////////////////////////////////////////////
//
//  File           : cmsc257-f19-p1.c
//  Description    : This is the main source code for for the first assignment
//                   of CMSC257.  See the related assignment page for details.
//
//   Author        : ????
//   Last Modified : ????
//

// Include Files
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <string.h>

// Project Includes
#include <p1-support.h>

//
// Functions

////////////////////////////////////////////////////////////////////////////////
//
// Function     : main
// Description  : The main function for the CMSC257 project #1
// 
// Inputs       : argc - the number of command line parameters
//                argv - the parameters
// Outputs      : 0 if successful test, -1 if failure

// Function 	: ???
// ???

int main(int argc, char *argv[]) {

	// Local variables
	// NOTE: this is where you will want to add some new variables
	int int_array1[10], int_array2[10];
	unsigned int uint_array1[10];
    int i;
	int arr_size = 10;
    //????
    if (argc < 11)
	{
		printf("Exiting the program, missing input\n");
		return 0;	
	}
	// Step a - read in the integer numbers to process
	for (i=1; i<11; i++) 
	{
		int_array1[i-1] = atoi(argv[i]);//converting input to integer
	}
	printf("Original Array:\n");
	display_array(int_array1, arr_size);

	
    // Step b - Convert numbers into positive values by taking their 
	//           absolute values and save them in int_array2. 
	// Print all numbers in a single line using display_array function

	for (i = 0; i < arr_size; i++) 
	{
		int_array2[i] = bitwise_abs(int_array1[i]);
	}
	printf("After Abs Value Array:\n");
	display_array(int_array2, 10);

    // Step c - Convert these positive integers to numbers 
	//           in the range 0,…,128 by implementing the  mod operation
	//           save them back into int_array2. 
	// Print all numbers in a single line using display_array function
    // 
    for (i = 0; i < arr_size; i++) 
	{
		int_array2[i] = bitwise_mod128(int_array2[i]);
	}
	printf("After mod128 Array:\n");
	display_array(int_array2, 10);

    // Step d - for each integer in int_array2 print: 
	//           number, number of 1 bits, even or odd
    //
	for (i = 0; i < arr_size; i++) 
	{
		printf("[ Number at position %d : %10d\t Number of 1 bits: %10d\t %10s ]\n", i, *(int_array2 + i), countBits(*(int_array2 + i)), evenOrOdd(*(int_array2 + i)));
	}

    // Step e - Cast each element of int_array2 to unsigned short 
	//			 and store them into uint_array1. 
    //
	for (i = 0; i < arr_size; i++) 
	{
		uint_array1[i] = (unsigned short)int_array2[i];
	}

    // Step f - Reverse the order of array elements in uint_array1 
	//           using swap function. 

	
	for ( i = 0; i < arr_size/2; i++)
	{
		swap_ints((uint_array1 + i), (uint_array1 + ((arr_size - 1) - i)));
	}
	

    // Step g - Update each element of uint_array1 by using reverseBits function. 
    // 
	for (i = 0; i < arr_size; i++) 
	{
		uint_array1[i] = reverseBits(uint_array1[i]);
	}


    // Step h - Print each element of uint_array1 in a separate line along with 
	//           binary representation of each of the numbers using binaryString function. 

	for (i = 0; i < arr_size; i++) 
	{
	char binstr[35];
	binaryString(binstr, uint_array1[i]);
	printf("[ Number at position %d reversed: %12u    Binary Representation: %s ]\n" ,i, uint_array1[i], binstr);
	}
	// Return successfully
	return(0);
}
