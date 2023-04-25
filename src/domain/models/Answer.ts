import { Player } from "./Player";
import { Scenario } from "./Scenario";
import { Game } from "./Game";
export interface Answer {
    id: string;
    player: Player;
    scenario: Scenario;
    game: Game;
    createdAt: Date;
  }