import Game from "../domain/Game";
import * as fs from 'fs';
import GameRepository from "../domain/GameRepository";

export default class GameRepositoryInMemory implements GameRepository  {
    private memory : Map<number, Game>;

    constructor() {
        this.memory = new Map();
    }

    save(game : Game) {
        this.memory.set(game.id, game);
    }

    findGameById(id : number) : Game | undefined{
        return this.memory.get(id);
    }



}