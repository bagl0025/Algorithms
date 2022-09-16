//  var a=[1,2,4,5,3,6,7,3,12,24];
const a =[];
for (let i=0; i < 90000; i++) {
    a.push(i);
}
a.push(6,7,5);

function solution(a) {   
    console.time('Execution Time'); 
    var num=-1; //////////update this
    const set = new Set(a); //this finds unique values
    const duplicates = a.filter(item => { //this uses unique set to create an array of dupes
    if (set.has(item)) {
        set.delete(item);
    } 
    else {
        return item;
    }
    });
    var dupIndex=a.length;

    console.log('d',duplicates);
    //then search full array for just those values, quit once second value found
    for (i=0;i<a.length;i++) {
        for (j=0;j<duplicates.length;j++) {
            if (a[i]===duplicates[j] && j<dupIndex) {
                console.log(a[i],duplicates[j])
                dupIndex=j;
                num=a[i];
        }
    }
}
console.timeEnd('Execution Time');
console.log(num)
return num; ////////////update value to return
}
solution(a);