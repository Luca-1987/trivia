import { Player } from "../models/Player";

export interface PlayerRepository {
    findById(id: string): Promise<Player>;
    findByUsername(username: string): Promise<Player>;
    save(player: Player): Promise<void>;
    deleteById(id: string): Promise<void>;
}