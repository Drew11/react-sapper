export function checkCells(currentCell, rows, indexRow, index) {



    if(currentCell === rows[indexRow][index+1]){
        currentCell = rows[indexRow][index+1];
        index=index+1;

        //console.log(currentCell, index);
        return checkCells(currentCell, rows, indexRow, index)
    }

    // const cellRight = array[indexRow][indexCell+1];
    // const cellLeft = array[indexRow][indexCell-1];
    //
    // const cellBottomRight = array[indexRow+1][indexCell+1];
    // const cellBottomLeft = array[indexRow+1][indexCell-1];
    // const cellBottomCenter = array[indexRow+1][indexCell];
    //
    // const cellTopRight = array[indexRow-1][indexCell+1];
    // const cellTopLeft = array[indexRow-1][indexCell-1];
    // const cellTopCenter = array[indexRow-1][indexCell];

}
