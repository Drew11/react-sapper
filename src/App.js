import React from 'react';
import Row from './components/Row';
import {createDataObjects} from './helpers/helpers';

import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cells: [],
        }
    }

    addActiveCells = (indecies) => {
        const cells = this.state.cells;
        let neighbors = [];

        for (let k = 0; k < indecies.length; k++) {

            let clickI = indecies[k].indexRow;
            let clickJ = indecies[k].indexCell;

            this.state.cells[clickI][clickJ].active = true;

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (
                        (i === 0 && j === 0)
                        || clickI + i < 0
                        || clickJ + j < 0
                        || clickI + i > cells.length - 1
                        || clickJ + j > cells[0].length - 1
                    ) continue;
                    if ((cells[clickI + i][clickJ + j].value === cells[clickI][clickJ].value) &&
                        cells[clickI + i][clickJ + j].active === false
                    ) {
                        neighbors.push({indexRow: clickI + i, indexCell: clickJ + j})
                    }
                }
            }
        }

        if (neighbors.length) {
            this.addActiveCells(neighbors)
        }


        this.setState({
            ...this.state,
            cells: this.state.cells
        });

    };

    checkAllcells = ()=>{
       const filteredRows = this.state.cells.filter(row=>
           row.filter(cell=>cell.active===false).length
       );

       return filteredRows.length;
   };

    createRows = (cells) => {
        const mappingEl = [];
        for (let i = 0; i < cells.length; i++ ) {
            mappingEl.push(
                <Row
                    key={i}
                    row={cells[i]}
                    indexRow = {i}
                    addActiveCells={this.addActiveCells}
                />
            );
        }

        return mappingEl.map(component => component);

    };


    componentDidMount(){

       this.setState({
           ...this.state,
           cells: [...this.state.cells, ...createDataObjects()]
       })

    }
    render() {


        return (

            <div className="App">

                {this.checkAllcells() ? null :
                    <button
                        onClick={()=> this.setState({
                            ...this.state,
                            cells: createDataObjects()
                        })}
                    >
                        Restart
                    </button>}

                <table>
                    <tbody>
                    {this.createRows(this.state.cells)}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default App;