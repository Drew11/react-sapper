export function createDataObjects() {

    const values = {
        1: "red",
        2: "yellow",
        3: "green",
        4: "blue",
    };

    let cells = [];


    for (let i = 0 ; i < 7; i++) {
        cells[i] = [];
        for (let j = 0; j < 6; j++) {
            let rand = Math.floor((Math.random()*4) +1);
            cells[i][j] = {"value" : values[rand], "active": false};
        }
    }

    return cells;
}
