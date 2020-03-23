#ifndef CMSC257_A1SUPPORT_INCLUDED
#define CMSC257_A1SUPPORT_INCLUDED

////////////////////////////////////////////////////////////////////////////////
//
//  File          : cmsc257-s17-assign1-support.h
//  Description   : This is a set of general-purpose utility functions we use
//                  for the 257 assignment #1.
//

//
// Functional Prototypes

void display_array(int *, int);
	// This function prints out the array of integer values

int countBits(int);
	// return the number of nonzero bits in an integer

unsigned int reverseBits(unsigned int);
	// reverses the bits of a number (i.e. bit 0 becomes bit 31) and returns it.

void binaryString(char *, unsigned int);
	// stores the string representation of a number's bits into a passed pointer

int bitwise_mod128(int);
	// Returns the int argument % 128, returns 0 if negative

int bitwise_abs(int num);
	// Absolute value of a number using bitwise operations

int bit_get(int, int);
	// Returns the bit at a given location of a number

char *evenOrOdd(int);
	// returns "even" if a number is even, or "odd" if a number is odd

void swap_ints(unsigned int*, unsigned int*);

//??? add other helper functions as needed. functions above are minimums.
      

#endif // CMSC257_A1SUPPORT_INCLUDED
