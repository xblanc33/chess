import Game from "../domain/Game";
import * as fs from 'fs';
import GameRepository from "../domain/GameRepository";

export default class GameRepositoryInJSONFile implements GameRepository  {

    save(game : Game) {
        let data : any = {};
        data.id = game.id;
        data.board = JSON.stringify(Array.from(game.board.entries()));
        
        console.log()

        fs.writeFileSync(`chess_${data.id}.json`, JSON.stringify(data));
    
    }

    findGameById(id : number) : Game {
        //TODO
        return new Game(id);
    }



}