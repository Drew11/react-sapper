import React from 'react';
import Cell from './Cell';

const Row = (props)=> {

   const {
       cells,
       indexRow,
       rows,
       addActiveCells} = props;



    function  createCells() {

        let count = 0;
        const mappingEL = [];

        while (count<6){

            mappingEL.push(<Cell
                    cells={cells}
                    key={count}
                    indexRow={indexRow}
                    indexCell={(count)+(indexRow*6)}
                    rows={rows}
                    addActiveCells={addActiveCells}
                />
            );
            count ++;
        }

        return mappingEL.map(cell=>cell);

    }





    return (
             <tr>
                {
                   createCells()
                }
             </tr>

    );
};



export default Row;
