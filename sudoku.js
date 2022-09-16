grid = [['6', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']];

function solution(grid) {
//check each row for dupes
    var row = [];
    var col = [];
    for (i=0;i<9;i++) {
        row = grid[i].filter(function(item) {
            return item !== '.'
        })
        const set = new Set(row); //this finds unique values
        if (set.size != row.length) {
            console.log('not sudoku solveable');
            console.log('rownum = ',i)
            return false;    
        }
        //check each col for dupes
        col.push(grid.map(x=>x[i]));
        var colNums = col[i].filter(function(item) {
            return item !== '.'
        })
        const setCol = new Set(colNums); //this finds unique values
        if (setCol.size != colNums.length) {
            console.log('not sudoku solveable');
            console.log('colnum = ',i)
            return false;    
        }
    }
    //flatten and split into 1x3s
    var gridFlat = [].concat(...grid);
    var multiGrid =[], size=3;
    while (gridFlat.length > 0)
        multiGrid.push(gridFlat.splice(0,size));
    var g=[];
    g[1] = [...multiGrid[0],...multiGrid[3],...multiGrid[6]].filter(g1 => g1 !== ".");
    g[2] = [...multiGrid[1],...multiGrid[4],...multiGrid[7]].filter(g2 => g2 !== ".");
    g[3] = [...multiGrid[2],...multiGrid[5],...multiGrid[8]].filter(g3 => g3 !== ".");
    g[4] = [...multiGrid[9],...multiGrid[12],...multiGrid[15]].filter(g4=> g4 !== ".");
    g[5] = [...multiGrid[10],...multiGrid[13],...multiGrid[16]].filter(g5 => g5 !== ".");
    g[6] = [...multiGrid[11],...multiGrid[14],...multiGrid[17]].filter(g6 => g6 !== ".");
    g[7] = [...multiGrid[18],...multiGrid[21],...multiGrid[24]].filter(g7 => g7 !== ".");
    g[8] = [...multiGrid[19],...multiGrid[22],...multiGrid[25]].filter(g8 => g8 !== ".");
    g[9] = [...multiGrid[20],...multiGrid[23],...multiGrid[26]].filter(g9 => g9 !== ".");g[1] = [...multiGrid[0],...multiGrid[3],...multiGrid[6]].filter(g1 => g1 !== ".");
    
    for (i=1;i<10;i++) {
        let set = new Set(g[i]); //this finds unique values
        console.log(set);
        if (set.size != g[i].length) {
            console.log(set.size,g[i].length);
            return false;
        }
    }
    return true;
}
solution(grid);