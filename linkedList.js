
function solution(l, k) {
    var current = l;
    var a=[];
    
    while (current != null) {
        if (current.value != k) {
        a.push(current.value);
        }
        current = current.next;
    }         
    return a;
}
