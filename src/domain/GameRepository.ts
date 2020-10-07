import Game from "./Game";


export default interface GameRepository {

    save(game : Game) : void;

    findGameById(id : number) : Game | undefined;
}