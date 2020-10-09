import Location from "./Location";
import Piece from "./Piece";

export default class Game {
    readonly id : number;
    private _board : Map<Location, Piece>;


    constructor(id : number, initialBoard? : Map<Location, Piece>) { 
        this.id = id;
        this._board = new Map();
        this.initializeBoard(initialBoard);
    }

    private initializeBoard(initialBoard? : Map<Location, Piece>) {
        if (initialBoard) {
            initialBoard.forEach((p:Piece, l: Location)=> {
                this._board.set(l,p);
            })
        } else {
            //TODO 
        }
    }

    get board() : Map<Location, Piece> {
        let boardCopy = new Map<Location, Piece>();
        this._board.forEach((p:Piece, l: Location)=> {
            boardCopy.set(l,p);
        })
        console.log('board:',boardCopy);
        return boardCopy;
    }

    // move(from : Location, to : Location) {
    // }




}