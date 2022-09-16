// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, n) {
    size=0;
    current=l;
    while(current){
        size++;
        current=current.next;
    }
    if (size===n) {
        return l;
    }
    var stop = size-n-1;
    var last = l; // stopping at size-n
    var last2=l; //going to end
    var count=0;
    
    while (last2.next != null) {
        if (count < stop){
            last=last.next;
        }
        last2 = last2.next;
        count++;
    }

    last2.next = l; //point end of block to head
    l = last.next; //point head to beginning of block
    last.next = null; //point new end of list to null
    return l;
}
