let arrowKeyPressCounter = 0;
// const BOARDARRAY = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];
const BOARDARRAY = ["unitA", "unitB", "unitC", "unitD", "unitE", "unitF", "unitG", "unitH", "unitI", "unitJ", "unitK", "unitL", "unitM", "unitN", "unitO", "unitP"];
let currentBoardTile;

// let aValue =[];
// let bValue =[];
// let cValue =[];
// let dValue =[];
// let eValue =[];
// let fValue =[];
// let gValue =[];
// let hValue =[];
// let iValue =[];
// let jValue =[];
// let kValue =[];
// let lValue =[];
// let mValue =[];
// let nValue =[];
// let oValue =[];
// let pValue =[];

// Board tiles

let aBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: document.getElementById("unitA"),
    borderValues: [1, 0, 0, 1],
    free: true
};

let bBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: document.getElementById("unitB"),
    borderValues: [1, 0, 0, 0],
    free: true 
};

let cBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: document.getElementById("unitC"),
    borderValues: [1, 0, 0, 0],
    free: true 
};

let dBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: document.getElementById("unitD"),
    borderValues: [1, 1, 0, 1],
    free: true 
};

let eBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:   document.getElementById("unitE"),
    borderValues: [0, 0, 0, 1],
    free: true
};

let fBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  document.getElementById("unitF"),
    borderValues: [0, 0, 0, 0],
    free: true  
};

let gBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  document.getElementById("unitG"),
    borderValues: [0, 0, 0, 0],
    free: true 
};

let hBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: document.getElementById("unitH"),
    borderValues: [0, 1, 0, 0],
    free: true 
};

let iBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:   document.getElementById("unitI"),
    borderValues: [0, 0, 0, 1],
    free: true
};

let jBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: document.getElementById("unitJ"),
    borderValues: [0, 0, 0, 0],
    free: true  
};

let kBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  document.getElementById("unitK"),
    borderValues: [0, 0, 0, 0],
    free: true
};

let lBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  document.getElementById("unitL"),
    borderValues: [0, 1, 0, 0],
    free: true 
};

let mBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  document.getElementById("unitM"),
    borderValues: [0, 0, 1, 1],
    free: true 
};

let nBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  document.getElementById("unitN"),
    borderValues: [0, 0, 1, 0],
    free: true 
};

let oBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  document.getElementById("unitO"),
    borderValues: [0, 0, 1, 0],
    free: true  
};

let pBoard = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  document.getElementById("unitP"),
    borderValues: [0, 1, 1, 0],
    free: true  
};

// 'Moving' tiles

let aTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: 'document.getElementById("unitA1")',
    CSSClass: "djskfjs",
    currentLocation: "miau"
    
};

let bTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: 'document.getElementById("unitB1")',
    CSSClass: "djskfjs",
    currentLocation: "miau"
};

let cTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: 'document.getElementById("unitC1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let dTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: 'document.getElementById("unitD1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let eTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:   'document.getElementById("unitE1")',
    CSSClass: "djskfjs",
    currentLocation: "miau"
};

let fTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  'document.getElementById("unitF1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let gTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  'document.getElementById("unitG1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let hTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: 'document.getElementById("unitH1")',
    CSSClass: "djskfjs",
    currentLocation: "miau"  
};

let iTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:   'document.getElementById("unitI1")',
    CSSClass: "djskfjs",
    currentLocation: "miau"
};

let jTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName: 'document.getElementById("unitJ1")',
    CSSClass: "djskfjs",
    currentLocation: "miau"  
};

let kTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  'document.getElementById("unitK1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let lTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  'document.getElementById("unitL1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let mTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  'document.getElementById("unitM1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let nTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  'document.getElementById("unitN1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let oTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  'document.getElementById("unitO1")',
    CSSClass: "djskfjs",
    currentLocation: "miau" 
};

let pTile = {
    currentValue: 0,
    valuesHistory: [],
    DOMName:  'document.getElementById("unitP1")',
    CSSClass: "djskfjs",
    currentLocation: "miau"  
};

function pressedKeyHandler (e) {
    switch (e.key) {
        case "ArrowLeft":
            arrowKeyPressCounter++;
            break;
        case "ArrowRight":
            arrowKeyPressCounter++;
            break;
        case "ArrowUp":
            arrowKeyPressCounter++;
            break;
        case "ArrowDown":
            arrowKeyPressCounter++;
            break;
    }
    
    console.log(e.key);
    console.log(`"key counter = ${arrowKeyPressCounter} `);
    assignTileOnArrow;
}


function assignTileOnArrow () {

let randomizer = Math.floor(Math.random()*16);
// console.log(`Wylosowana liczba to: ${randomizer}`);
currentBoardTile = BOARDARRAY[randomizer];
// console.log(`BOARDARRAY[randomizer] ${BOARDARRAY[randomizer]}`);
// console.log(`curremtBoardTile: ${currentBoardTile}`);
// console.log(`Wylosowana literka to: ${currentBoardTile}`);
let temp = (currentBoardTile.charAt(currentBoardTile.length -1)).toLowerCase();
// console.log('temp = '+ temp);
// temp = temp.toLowerCase;
// console.log('temp.toLowerCase = '+ temp);
let JSObjectBoardUnit = (temp + "Board");

console.log("JSObjectBoardUnit "+ JSObjectBoardUnit);

let JSObjectTile = (temp + "Tile");
console.log(`JSObjectTile: ${JSObjectTile}`);

JSObjectBoardUnit.free = false;

console.log('JSObjectBoardUnit.free '+ JSObjectBoardUnit.free);

JSObjectTile.currentLocation = JSObjectBoardUnit;

let currentDOM = JSObjectTile.DOMName;
console.log('typeof: '+ typeof(currentDOM));
console.log('CurrentDOM: '+ currentDOM);
// JSObjectTile.CSSClass = JSObjectTile.classList.add('');
// JSObjectTile.CSSClass = JSObjectTile.style.visibility('visible');
// JSObjectBoardUnit
let x = lTile.DOMName;
console.log(x);


}

// console.log(`currentBoardTile outside the function ${currentBoardTile}`);















document.addEventListener('keydown', pressedKeyHandler);
document.addEventListener('keydown', assignTileOnArrow);
