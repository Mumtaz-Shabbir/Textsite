#include <iostream>
using namespace std;

void findMiddle(){
Node *slow,*fast;
slow=fast=head;
while(fast!=NULL && fast->next!=NULL){
slow=slow->next;
fast=fast->next->next;
}
cout<<"\nMiddle element is "<<slow->data<<endl;
}
