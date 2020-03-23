#include<stdio.h>
#include<stdlib.h>

//maxpotential
 
typedef struct node
{
    int data;
    struct node *next;
} Node;

//Creating head a as a global Node*
Node *head;
 


/* Given a node prev_node, insert a new node after the given  
   prev_node */
void insertAfter( Node* prev_node, int new_data) 
{ 
    /*1. check if the given prev_node is NULL */
    if (prev_node == NULL) 
    { 
      printf("the given previous node cannot be NULL"); 
      return; 
    } 
  
    /* 2. allocate new node */
    Node* new_node =( Node*) malloc(sizeof(Node)); 
  
    /* 3. put in the data  */
    new_node->data  = new_data; 
  
    /* 4. Make next of new node as next of prev_node */
    new_node->next = prev_node->next; 
  
    /* 5. move the next of prev_node as new_node */
    prev_node->next = new_node; 
} 


/* Given an int, appends a new node at the end  */
void append(int new_data) 
{ 
    /* 1. allocate node */
    Node* new_node = (Node*) malloc(sizeof(Node)); 
  
    Node *last = head;  /* used in step 5*/
  
    /* 2. put in the data  */
    new_node->data  = new_data; 
  
    /* 3. This new node is going to be the last node, so make next of 
          it as NULL*/
    new_node->next = NULL; 
  
    /* 4. If the Linked List is empty, then make the new node as head */
    if (head == NULL) 
    { 
       head = new_node; 
       return; 
    } 
  
    /* 5. Else traverse till the last node */
    while (last->next != NULL) 
        last = last->next; 
  
    /* 6. Change the next of last node */
    last->next = new_node; 
    return; 
} 
 
/* Given an int, inserts a new node on the front of the list. */
void push(int new_data) 
{ 
	Node *newNode = (Node*) malloc(sizeof(Node));
    newNode->data = new_data;
    newNode->next = head;
    head = newNode;
}  
 

// This function prints contents of linked list starting from head 
void printList() 
{ 
  Node* node;
  node = head;
  while (node != NULL) 
  { 
     printf(" %d ", node->data); 
     node = node->next; 
  }
  printf("\n"); 
  
} 

// This function deletes the first occurance of num in the linked list starting from head
// Delete function returns 1 if the num is in the list and deleted othewise returns  0
int delete(int num)
{
    Node *deleteNode = head;
    Node *previousNode = NULL; 

    while(deleteNode != NULL)
    {
        if(deleteNode->data == num)
        {
            if(previousNode != NULL)
            {
            previousNode->next = deleteNode->next;
            free(deleteNode);
            deleteNode = NULL;
            return 1;
            } 
            else 
            {
            head = deleteNode->next;
            free(deleteNode);
            deleteNode = NULL;
            return 1;
            }
        } 
        else 
        {
            previousNode = deleteNode;
            deleteNode = deleteNode->next;
        }
    }

    return 0;
}
 
 

 
// This function counts the number of elements in the linked list and returns the count   
int count()
{
    int count = 0;
    Node *currentNode = head;

    if(currentNode == NULL) return count;

    while(currentNode != NULL){
        count++;
        currentNode = currentNode->next;
    }
    return count;
}
 
 
int  main()
{
    int i,num;
    Node *n;
    head=NULL;
    while(1)
    {
		printf("\nList Operations\n");
    	printf("===============\n");
    	printf("1.Append\n");
    	printf("2.Push\n");
    	printf("3.Display\n");
    	printf("4.Size\n");
    	printf("5.Delete\n");
    	printf("6.Exit\n");
    	printf("Enter your choice : ");
    if(scanf("%d",&i)<=0){
        printf("Enter only an Integer\n");
        exit(0);
    } else {
        switch(i)
        {
        case 1:  printf("Enter the number to append : ");
                 scanf("%d",&num);
				 append(num);
                 break;
				         
		case 2:  printf("Enter the number to push : ");
                 scanf("%d",&num);
				 push(num);
                 break;
                 
        case 3: if(head==NULL)
                {
                	printf("List is Empty\n");
                }
                else
                {
                	printf("Element(s) in the list are : ");
                	printList();
                }
                break;
                
        case 4: printf("Size of the list is %d\n",count());
                break;
                
        case 5: if(head==NULL)
                	printf("List is Empty\n");
                else{
                	printf("Enter the number to delete : ");
                	scanf("%d",&num);
                if(delete(num))
                    printf("%d deleted successfully\n",num);
                else
                    printf("%d not found in the list\n",num);
                }
                break;
                
        case 6: 
                while(head != NULL)
                {
                    delete(head->data);
                }  
                return 0;
        
        default:    printf("Invalid option\n");
        }
    }
    }
    return 0;
}

