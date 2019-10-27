import React from 'react';
import Cell from './Cell';

const Row = (props)=> {

   const {
       row,
       indexRow,
       addActiveCells
   } = props;

    function  createCells() {

        const mappingEL = [];

        for (let i = 0 ; i < row.length; i++) {
                mappingEL.push(<Cell
                        key={i}
                        cell={row[i]}
                        indexRow={indexRow}
                        indexCell={i}
                        addActiveCells={addActiveCells}
                    />
                );
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
