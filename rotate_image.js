a = [[1,2,3],
     [4,5,6],
     [7,8,9]]
// [[7,4,1],
//  [8,5,2],
//  [9,6,3]]     
function solution(a) {
var b=[];
    for (i=0;i<a[0].length;i++){
        b.push(a.map(x=>x[i]).reverse());
    }
    // console.log(b);
    return b;
}
solution(a);