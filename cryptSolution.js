crypt = ["SEND", "MORE", "MONEY"];

answer = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']];

function solution(crypt, solution) {
    var a = [];
    var aFlat = [].concat(...answer);
    for (i=0;i<3;i++) {
        var b = "";
        for (j=0;j<crypt[i].length;j++) {
            // console.log(aFlat[aFlat.indexOf(crypt[i][j])+1]);
            b+=(aFlat[aFlat.indexOf(crypt[i][j])+1]);
            if (j===0 && b==="0" && crypt[i]>0) {
                console.log("leading zero");
                return false;
            }
        }
        a.push([b]);
    }
    var sum = (parseInt(a[0])+parseInt(a[1]));
    if (sum === parseInt(a[2])) {
        console.log('true');
        return true;
    }
}
solution(crypt, answer);       
//9567 + 1085 = 10652     