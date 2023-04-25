import { Player } from "../models/Player";
import { PlayerRepository } from "../repositories/PlayerRepository";

export class PlayerService {
    constructor(private playerRepository: PlayerRepository) {}

    async getPlayerById(id: string): Promise<Player> {
        const player = await this.playerRepository.findById(id);
        if (!player) {
            throw new Error(`Player with id ${id} not found`);
        }
        return player;
    }

    async getPlayerByUsername(username: string): Promise<Player> {
        const player = await this.playerRepository.findByUsername(username);
        if (!player) {
            throw new Error(`Player with username ${username} not found`);
        }
        return player;
    }

    async createPlayer(player: Player): Promise<void> {
        const existingPlayer = await this.playerRepository.findByUsername(player.username);
        if (existingPlayer) {
            throw new Error(`Player with username ${player.username} already exists`);
        }
        await this.playerRepository.save(player);
    }

    async updatePlayer(player: Player): Promise<void> {
        const existingPlayer = await this.playerRepository.findById(player.id);
        if (!existingPlayer) {
            throw new Error(`Player with id ${player.id} not found`);
        }
        await this.playerRepository.save(player);
    }

    async deletePlayerById(id: string): Promise<void> {
        const existingPlayer = await this.playerRepository.findById(id);
        if (!existingPlayer) {
            throw new Error(`Player with id ${id} not found`);
        }
        await this.playerRepository.deleteById(id);
    }
}
