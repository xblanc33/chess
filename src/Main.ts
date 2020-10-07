import Game from "./domain/Game";
import GameRepository from "./domain/GameRepository";
import Location from "./domain/Location";
import Piece from "./domain/Piece";
import GameRepositoryInJSONFile from "./infra/GameRepositoryInJSONFile";
import GameRepositoryInMemory from "./infra/GameRepositoryInMemory";
//import FrameworkMongo from "./infra/FrameworkMongo";

let loc = new Location("e","2");
console.log('loc:',loc.toString());
console.log('loc:',loc);
let piece = new Piece();

let initialBoard = new Map();
initialBoard.set(loc,piece);

let g = new Game(1,initialBoard);
console.log('Game', g);


//const f =  new FrameworkMongo();
let repo : GameRepository; 
repo = new GameRepositoryInMemory();
repo.save(g);