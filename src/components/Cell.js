import React, {useState} from 'react';
import {checkCells} from  '../helpers/checkCells';
import './style/cell.css';

const Cell = (props)=> {
    const {
        indexRow,
        cells,
        addActiveCells,
        indexCell
    } = props;

    // const [active, setActive] = useState(false);
       //let currentCell = rows[indexRow][indexCell];

    const cell = cells[indexCell];

        return (
            <td
                className={cell&&cell.active?'active': ''}

                onClick={()=>{
                    addActiveCells(indexCell);
                }}
            >
                {cell&&cell.value} {indexCell}

            </td>
        );

 };



export default Cell;
