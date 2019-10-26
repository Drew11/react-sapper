import React from 'react';
import Row from './components/Row';

import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state={
        cells:[
                  {value: "П", active: false},
                  {value: "П", active: false},
                  {value: "K", active: false},
                  {value: "Б", active: false},
                  {value: "K", active: false},
                  {value: "K", active: false},

                  {value: "П", active: false},
                  {value: "П", active: false},
                  {value: "K", active: false},
                  {value: "Б", active: false},
                  {value: "Б", active: false},
                  {value: "Б", active: false},

                  {value: "П", active: false},
                  {value: "К", active: false},
                  {value: "K", active: false},
                  {value: "Б", active: false},
                  {value: "Б", active: false},
                  {value: "Б", active: false},


        ],

        activeCellIndexes: [],


        currentIndexCell: '',

    }


  }

  addActiveCells = (indexCell) => {

          const activeCell = this.state.cells[indexCell];
          activeCell.active = true;
          this.state.cells[indexCell] = activeCell;

          if(this.state.activeCellIndexes.includes(indexCell)){
              return
          }

          if(!this.state.activeCellIndexes.includes(indexCell)){
              const copy = [...this.state.activeCellIndexes];
              copy.push(indexCell);

              this.setState({...this.state,
                            activeCellIndexes: copy
              })
          }

          const nextCellRight = this.state.cells[indexCell+1];
          const nextCellLeft = this.state.cells[indexCell-1];

          const nextBottomRight = this.state.cells[indexCell+7];
          const nextBottomCenter = this.state.cells[indexCell+6];
          const nextBottomLeft = this.state.cells[indexCell+5];



          console.log(activeCell )
          if(nextCellRight && activeCell.value===nextCellRight.value) {
              indexCell=indexCell+1;
              return this.addActiveCells(indexCell);
          }

          // if(activeCell.value===nextCellLeft.value) {
          //     indexCell=indexCell-1;
          //     return this.addActiveCells(indexCell);
          // }


          if(nextBottomLeft && activeCell.value===nextBottomLeft.value) {
              indexCell=indexCell+5;
              this.addActiveCells(indexCell);
          }

          if( nextBottomCenter && activeCell.value === nextBottomCenter.value) {
              indexCell=indexCell+6;
              this.addActiveCells(indexCell);
          }

          if( nextBottomRight && activeCell.value === nextBottomRight.value) {
                  indexCell=indexCell+7;
              this.addActiveCells(indexCell);
          }

          this.setState({
              ...this.state,
              cells: this.state.cells
          });


  };



  createRows = () => {


      let count = 0;
      const mappingEl = [];

      while (count<7){

          mappingEl.push(
              <Row
                  key={count}
                  indexRow={count}
                  cells={this.state.cells}
                  addActiveCells={this.addActiveCells}
               />
          );

          count++;
      }

      return mappingEl.map(component=>component);

    };

  render(){
     console.log(this.state.cells)
      return (
          <div className="App">
             <table>
                 <tbody>
                    {this.createRows()}
                 </tbody>
             </table>
          </div>
      );
  }

}

export default App;


//index+!