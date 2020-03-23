import java.util.ArrayList;
public class MyBinaryTree{

     BTNode root;

    MyBinaryTree(){
        this.root = null;
    }

    class BTNode{
        int key;
        BTNode parent;
        BTNode left;
        BTNode right;

        BTNode(int key){
            this.key = key;
            this.parent = this.left = this.right = null;
        }
    }
    
    void add(int newNum) {
        BTNode insertNode = new BTNode(newNum);
        BTNode currNode = this.root;
        BTNode prevNode = null;

        while(currNode != null) {
            prevNode = currNode;
            if(newNum <= currNode.key) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }

        if(prevNode == null) {
            this.root = insertNode;
        } else if (newNum <= prevNode.key) {
            prevNode.left = insertNode;
            insertNode.parent = prevNode;
        } else {
            prevNode.right = insertNode;
            insertNode.parent = prevNode;
        }
    }
    
    boolean delete(int delNum) {
        if(this.contains(delNum) == false){
            return false;
        }
        while(this.contains(delNum)){
            deleteOne(delNum);
        }
        return true;
    }
    
    boolean deleteOne(int delNum) {

        //find the node to delete
        
        BTNode delNode = treeSearch(this.root, delNum);

         // Case 1: delNum is not in tree
         if(delNode == null) {
            return false;
        }
        
        // Case 2: delNode has no children
        if(delNode.left == null && delNode.right == null) {
            if(delNode.parent.left ==  delNode){
                delNode.parent.left = null;
            } else {
                delNode.parent.right = null;
            }
            delNode = null;
            return true;
        }

        // Case 3: delNode has one child

        // Has a left child
        if((delNode.left != null && delNode.right == null)) {
            delNode.left.parent = delNode.parent;
            delNode.parent.left = delNode.left;
            delNode = null;
            return false;
        }

        // Has a right child
        if((delNode.left == null && delNode.right != null)) {
            delNode.right.parent = delNode.parent;
            delNode.parent.right = delNode.right;
            delNode = null;
            return false;
        }

        // Case 4: delNode has two children
        if(delNode.left != null && delNode.right != null) {

        // Must find min node within RIGHT subtree with delNode as root, and replace delNode with that node
        BTNode replaceNode = delNode.right;
        while(replaceNode.left != null) {
            replaceNode = replaceNode.left;
        }

        delNode.key = replaceNode.key;
        replaceNode.parent.left = null;
        //replaceNode.parent = null;
        return true;
        }
    
        return false;
    }
    

    
    boolean contains(int num) {
        if(treeSearch(this.root, num) != null) {
            return true;
        }
        return false;
    }
    

    String inOrder(){ 
        ArrayList<Integer> ioArr = new ArrayList<Integer>();
        inOrderValues(this.root, ioArr);
        String result = "";
        for(int i = 0; i < ioArr.size(); i++) {
            result += (ioArr.get(i)) + " ";
        }
        return result;
    }

    String preOrder(){ 
        ArrayList<Integer> preArr = new ArrayList<Integer>();
        preOrderValues(this.root, preArr);
        String result = "";
        for(int i = 0; i < preArr.size(); i++) {
            result += (preArr.get(i) + " ");
        }
        return result;
    }

    String postOrder(){ 
        ArrayList<Integer> poArr = new ArrayList<Integer>();
        postOrderValues(this.root, poArr);
        String result = "";
        for(int i = 0; i < poArr.size(); i++) {
            result += (poArr.get(i) + " ");
        }
        return result;
    }

    // Helper Methods 

    BTNode treeSearch(BTNode root, int key) {
        BTNode currNode = root;
        if(currNode == null || currNode.key == key) {
            return currNode;
        }

        if(key < currNode.key) {
            return treeSearch(currNode.left, key);
        } else {
            return treeSearch(currNode.right, key);
        }
    }

    void inOrderValues(BTNode root, ArrayList<Integer> arr) {
        
        if (root == null) {
            return;
        } 

        inOrderValues(root.left, arr);
        arr.add(root.key);
        inOrderValues(root.right, arr);
    }

    void postOrderValues(BTNode root, ArrayList<Integer> arr) {
        if (root == null) {
            return;
        } 

        postOrderValues(root.left, arr);
        postOrderValues(root.right, arr);
        arr.add(root.key);
    }

    void preOrderValues(BTNode root, ArrayList<Integer> arr) {

        if (root == null) {
            return;
        } 

        arr.add(root.key);
        preOrderValues(root.left, arr);
        preOrderValues(root.right, arr);
    }

    public static void main(String[] args) {

       // Declaring the tree for the integers passed through command line.
		MyBinaryTree bt1 = new MyBinaryTree();
		
		/* Iterating over the command line arguements and adding them to the 
		* 'startArray' in the order they were given. If something goes wrong,
		* user will be told there was an issue with input.
		*/
		try {
			for(int i = 0; i < args.length; i++) {
				bt1.add(Integer.parseInt(args[i]));
			} 
		} catch(Exception e) {
			System.out.println("Problem with input, please check and try again.");
        }
      
        System.out.println(bt1.inOrder());
        
    }

}