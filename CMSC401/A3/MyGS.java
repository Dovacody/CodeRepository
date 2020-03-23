/**
 * Author: Cody Woodson
 * Date: March 8 2020 - 
 * Assignment 3 - My Graham Scan
 */

public class MyGS {

    // Class for an Object that models a point
    static class Point {

        private double xVal;
        private double yVal;
        
        private Point(){
            this.xVal = 0;
            this.yVal = 0;
        }

        private Point(double x, double y){
            this.xVal = x;
            this.yVal = y;
        }   
    }

    // Class for our stack of points, with all functionality of a normal stack
    private class MyStack {

        // Instance variable for our stack
        private int top;
        private int max = 4;
        private Point[] stack;

        private MyStack() {
            this.top = -1;
            stack = new Point[max];
        }

        private int size() {
            return top + 1;
        }

        private boolean isEmpty() {
            return top == size();
        }

        private boolean isFull() {
            return size() == max;
        }

        private boolean push(Point p) {
            if (isFull()){
               return false;     
            }
            top += 1;
            stack[top] = p;
            return true;
        }

        private Point peekTop() {
            if(isEmpty()) {
                return null;
            }
            return stack[top];
        }

        private Point peekNextToTop() {
            if(isEmpty()) {
                return null;
            }
            return stack[top - 1];
        }

        private Point pop() {
            if(isEmpty()) {
                return null;
            }
            Point temp = peekTop();
            stack[top] = null;
            top -= 1;
            return temp;
        }
    }

   // gs Code
    Point[] sortPoints(Point[] arr) {
        Point[] sortedPoints = new Point[arr.length];

            
        
        return null;
    }
    public void grahamScan(Point[] points){


    }

    public static void main(String args[]){

        // Array to store the points passed in through command line
        Point[] points = new Point[4];


        // Parsing the x and y values passed through cmd line and storing them into points in our array
        try {
			for(int i = 0; i < args.length; i++) {
                points[i] = new Point(Double.parseDouble(args[i]), Double.parseDouble(args[i + i]));
                i++;
			} 
		} catch(Exception e) {
			System.out.println("Problem with input, please check and try again.");
		}
    }

}