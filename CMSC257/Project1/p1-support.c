#include <stdio.h>
#include "p1-support.h"

void display_array(int *arr, int size)
{
    int i;
    printf("[ %d,", *(arr));
    for ( i = 1; i < size - 1; i++)
    {
        printf("%5d,", *(arr + i));
    }
    printf("%5d ]\n", *(arr + size -1));
}

int countBits(int num)
{
    int i;
    int numBits = 0;

    for(i = 0; i < 32; i++)
    {
        if(num >> i & 1)
        {
            numBits++;
        }
    }
    return numBits;
}

void binaryString(char *str , unsigned int num)
{
    int i;
    int j = 33;
    for(i = 0; i < 32; i++)
    {
        if(num >> i & 1)
        {
            *(str + j) = '1';
        } else 
        {
            *(str + j) = '0';
        }
        j--;
    }

    *(str) = '0';
    *(str + 1) = 'b';
    *(str + 32) = '\0';
}

int bit_get(int num, int bit)
{
    return (num >> bit) & 1;
}

int bitwise_mod128(int num)
{
    if(num < 0)
    {
        return 0;
    } else 
    {
        return num & 127;
    }
}


unsigned int reverseBits(unsigned int num)
{
    unsigned int result = 0;
    int i;
    for(i = 0; i < 31; i++)
    {
       result |= num & 1;
       num >>= 1;
       result <<= 1;
    }
    return result;
}

int bitwise_abs(int num)
{
    if(bit_get(num, 31) == 0)
    {
        return num;
    } else 
    {
        return ~num + 1 ; 
    }
}

char *evenOrOdd(int num)
{
    if(num & 1)
    {
        return "odd";
    } else
    {
        return "even";
    }
}

void swap_ints(unsigned int *a, unsigned int *b)
{
    *a = *a + *b; 
    *b = *a - *b;
    *a = *a - *b;
}