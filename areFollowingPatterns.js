function solution(strings, patterns) {
    if (strings.length === 1 && strings[0]===patterns[0]) {
            return true;
    }    
    for (i=0;i<strings.length;i++) {
        for (j=0;j<strings.length;j++) {
            if (strings[i]===strings[j] && patterns[i]!=patterns[j]) {
                return false;
            }
            else if (strings[i]!=strings[j] && patterns[i]===patterns[j]) {  
                return false;
            }         
        }
    }
        return true;
}

