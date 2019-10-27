import React from 'react';
import './style/cell.css';

const Cell = (props)=> {
    const {
        cell,
        indexRow,
        indexCell,
        addActiveCells,
    } = props;


    return (
        <td
            className={cell && cell.active ? 'active': `${cell.value}`}
            onClick = {()=>{
                addActiveCells([{indexRow: indexRow, indexCell: indexCell}]);
            }}
        >
        </td>
    );

};



export default Cell;
