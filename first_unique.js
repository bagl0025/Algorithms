var s = "abacabadcd";
// solution(s) = 'c'.

function solution(s) {
    s=s.split("");
    const unique = new Set(s);
    const dupes = s.filter((c, index) => {
        return s.indexOf(c) !== index;
    });
    var dupesSet = new Set(dupes);
    var diff = new Set([...unique].filter(x => !dupesSet.has(x)));
    const [ans] = diff;
    if (ans){
        console.log(ans);
        return ans;
    }
    else {
        console.log("_");
        return "_";
    }
}
solution(s);