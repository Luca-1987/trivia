import { Player } from './Player';
import { Scenario } from './Scenario';

export interface Game {
    id: string;
    name: string;
    createdBy: string;
    players: Player[];
    scenarios: Scenario[];
    currentScenarioIndex: number,
    createdAt: Date;
}