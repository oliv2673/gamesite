import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
}

interface GameResponse {
    count: number;
    results: Game[];
}

export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<GameResponse>("/games")
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                setError(err.message);
                console.log(err);
            });
    }, []);

    return (
        <div>
            {error && <Text color="red.500">{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </div >
    );
};


