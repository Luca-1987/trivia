import { v4 as uuidv4 } from 'uuid';

import { Game } from '../models/Game';
import { Player } from '../models/Player';
import { Scenario } from '../models/Scenario';
import { Answer } from '../models/Answer';

export class GameService {
  private games: Game[] = [];

  public createGame(name: string, createdBy: string): Game {
    const game: Game = {
      id: Date.now().toString(),
      name,
      createdBy,
      players: [],
      scenarios: [],
      currentScenarioIndex: -1,
      createdAt: new Date(),
    };
    this.games.push(game);
    return game;
  }

  public getGameById(id: string): Game | undefined {
    return this.games.find(game => game.id === id);
  }

  public addPlayerToGame(gameId: string, player: Player): void {
    const game = this.getGameById(gameId);
    if (game) {
      game.players.push(player);
    }
  }

  public removePlayerFromGame(gameId: string, playerId: string): void {
    const game = this.getGameById(gameId);
    if (game) {
      game.players = game.players.filter(player => player.id !== playerId);
    }
  }

  public addScenarioToGame(gameId: string, scenario: Scenario): void {
    const game = this.getGameById(gameId);
    if (game) {
      game.scenarios.push(scenario);
    }
  }

  public startGame(gameId: string): void {
    const game = this.getGameById(gameId);
    if (game && game.scenarios.length > 0) {
      game.currentScenarioIndex = 0;
    }
  }

  public getCurrentScenario(gameId: string): Scenario | undefined {
    const game = this.getGameById(gameId);
    if (game && game.currentScenarioIndex >= 0 && game.currentScenarioIndex < game.scenarios.length) {
      return game.scenarios[game.currentScenarioIndex];
    }
    return undefined;
  }


  public answerScenario(gameId: string, playerId: string, scenarioId: string): Answer | undefined {
    const game = this.getGameById(gameId);
    if(game) {
      const player = game.players.find((p) => p.id === playerId);
      const scenario = game.scenarios.find((s) => s.id === scenarioId);
      if (!player || !scenario) {
        return undefined;
      }
  
      const answer: Answer = {
        id: uuidv4(),
        player,
        scenario,
        game,
        createdAt: new Date(),
      };
  
      return answer;
    }
    return undefined;
  }
}
