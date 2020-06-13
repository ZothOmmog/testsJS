const horseImg = 'https://img1.freepng.ru/20171220/oiq/chess-horse-icon-png-image-5a3b3e08a6a8f5.7418616715138319446827.jpg';

const tbody = document.querySelector('tbody');
const xSize = tbody.rows.length;
const ySize = tbody.rows[0].childElementCount;

const isPosibleMove = ({x, y}) => x < xSize && x > -1 && y < ySize && y > -1;

const getMovesHorse = ({x, y}) => {
    const moves = [];

    moves.push({x: x - 1, y: y - 2}); //top left
    moves.push({x: x + 1, y: y - 2}); //top right
    moves.push({x: x + 2, y: y - 1}); //right top
    moves.push({x: x + 2, y: y + 1}); //right bottom
    moves.push({x: x + 1, y: y + 2}); //bottom right
    moves.push({x: x - 1, y: y + 2}); //bottom left
    moves.push({x: x - 2, y: y + 1}); //left bottom
    moves.push({x: x - 2, y: y - 1}); //left top

    posibleMoves = moves.filter(move => isPosibleMove(move));

    return posibleMoves;
}

const renderMovesHorse = ({x, y}) => {
    const moves = getMovesHorse({x, y});

    moves.forEach(move => {
        tbody.rows[move.y].children[move.x].innerHTML = `<img src="${horseImg}" alt="horse">`
    });
    
    return () => {
        moves.forEach(move => {
            tbody.rows[move.y].children[move.x].innerHTML = null;
        });
    }
}

let cleanPrevMoves = null;
tbody.onclick = (e) => {
    if(cleanPrevMoves) cleanPrevMoves();

    const x = e.target.cellIndex;
    const y = e.target.parentElement.rowIndex;
    
    cleanPrevMoves = renderMovesHorse({x, y});
}