import Player from  "./class/player.js";
import Board from  "./class/board.js";

let player;
let board;

window.addEventListener("DOMContentLoaded", (event)=>{
    player = new Player();
    board = new Board();

    console.log(board);
})