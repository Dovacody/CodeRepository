/* Author: Cody Woodson
 * Date: Feb 24 2020
 * CMSC 401 Assignment 2 - QuickSort
 */ 

public class MyQuicksort{

	/* Partions the array based on a pivot, which is always the furthest right
	* value in the array.
	*/
	static int partion(int[] arr, int low, int high){
		int pivot = arr[high];		// Always select rightmost element as pivot
		int i = low - 1;			// Start of array portion 1
		
		for(int j = low; j < high; j++){
			if(arr[j] <= pivot){
				i++;
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		
		int temp = arr[i + 1];
		arr[i + 1] = arr[high];
		arr[high] = temp;
		return i + 1;
	}

	/* Method for quicksorting an array, takes the array to be sorted and an 
	*  int variable to store the number of comparisons made into as arguments.
	*  Returns the sorted array.
	*/
	static int quickSortArray(int[] arr, int low, int high){
		int count = 0;
		if(low < high){
			int q = partion(arr, low, high);
			count += quickSortArray(arr, low, q - 1);
			count += quickSortArray(arr, q + 1, high);
		}
		count += 1;
		return count;
	}
	
	/* Method for printing out the array on the same line.
	*
	*/
	static void printArray(int[] arr){
		System.out.print("[");
		for(int i = 0; i < arr.length; i++){
			System.out.print(" " + arr[i]);
		}
		System.out.println(" ]");
	}
	public static void main(String[] args){
		
		// Declaring the Array for the integers passed through command line,
		// and a placeholder for the number of comparisons.
		int arr[] = new int[args.length];
		int comps = 0; 
		
		/* Iterating over the command line arguements and adding them to the 
		* 'startArray' in the order they were given. If something goes wrong,
		* user will be told there was an issue with input.
		*/
		try {
			for(int i = 0; i < args.length; i++) {
				arr[i] = Integer.parseInt(args[i]);
			} 
		} catch(Exception e) {
			System.out.println("Problem with input, please check and try again.");
		}

		comps = quickSortArray(arr, 0, arr.length - 1);
		System.out.println("Values sorted with quicksort:");
		printArray(arr);
		System.out.println("Number of comparisons " + comps);

	}

}
