#include <stdio.h>

void print1D(int *arr, int size)
{
  int i;
  for (i = 0; i < size; i++)
    {
      printf("[ address of element %d is :%pv ]\n", i, arr + i);
    }
  printf("[ Size of the overall array: %ld ]\n", sizeof(*arr) * size);
}

void print2D(int *arr, int row, int col)
{
  int i, j;
  for (i = 0; i < row; i++)
    {
	for(j = 0; j < col; j++)
	{
	  printf("[ address of element [%d, %d] is: %p ]", i, j, (arr + (i * col)) + j);
	}
	printf("\n");
    }
  printf("[ Size of the overall array: %ld ]\n", sizeof(*arr) * (row * col));
}



int main()
{
  // Making an Integer
  int x;
  x = 5;

  // Basic pointer to an Int
  // (Memory location of x)
  int *p = &x;
  int *n = NULL;
  
  // Printing out the memory location stored in p
  printf("The memory location stored at in pointer \"p\" is: %p\n", p);

  // Printing out the value of what's stored at p
  printf("The int stored in the above memory location is:%d\n", *p);
  
  // What's printed if we don't dereference the pointer?
  // memory location in int, ugly num
  printf("Printing out the value of a pointer without dereferencing:%d\n", p);
  
  // Gonna dereference a NULL pointer..
  // seg fault. it really didn't like that 
  // printf("The dereferenced value of a NULL pointer is:%d\n", *n);

  int a = 42;
  int b = 7;
  int c = 999;
  int *t = &a;
  int *u = NULL;
  printf("%d %d\n", a, *t);
  c = b;
  u = t;
  printf("%d %d\n", c, *u);
  a = 8;
  b = 8;
  printf("%d %d %d %d\n", b, c, *t, *u);
  *t = 123;
  printf("%d %d %d %d %d\n", a, b, c, *t, *u);

  //changing the location pointed to to C
  t = &c;

  //Changing c to 555 with a dereference
  *t = 555;

  // u now points to 555 as well, the only thing that was changed was
  // the value of that memory location however.
  printf("The value of c is %d, t points to the value %d\n", c, *t);

  // changing the value of c once more
  c = 1234;
  printf("The value of c is %d, t points to the value %d\n", c, *t);

  // Ask sonmez about this one 
  int **v = &t;
  printf("%d\n", *(*v)); // *v -> t -> *(t) -> value of C!

  printf("Size of int: %d\n", sizeof(int));
  printf("Size of 3.14: %u\n", sizeof(3.14));
  
  // Printing out the address of an array (first element)
  int d[3] = {1, 2, 3};
  printf("The array starts at %p\n", d);

  // Printing out the values of the array
  printf("The first element is: %d\n", *d);
  printf("The second element is: %d\n", *(d + 1));
  printf("The third element is: %d\n", *(d + 2));
  
  int data[3][4] = { {1, 2, 3, 4},
	  		{5, 6, 7, 8},
			{9, 10, 11, 12} };

  printf("address of the first element of row 0: %p\n", *(data + 0) + 0);
  printf("value of the first element of row 0: %d\n", **(data + 0) + 0);
  
  //Functions for printing a 1d and 2d array
  print1D(d, 3);
  printf("\n\n\n");
  print2D(data, 3, 4);



  return 0;
}
