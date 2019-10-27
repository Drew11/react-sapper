export function createDataObjects() {

    const values = {
        1: "peaks",
        2: "diamonds",
        3: "hearts",
        4: "cross",
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

