import { Card } from "semantic-ui-react";
import CharacterCard from "./CharacterCard";
import type { Character } from "../types/Character";

interface CharactersRenderListProps {
  // Tipamos la data según la estructura de Apollo/GraphQL
  data:
    | {
        characters: {
          results: Character[];
        };
      }
    | undefined;
  // La función recibe el id del personaje
  onCharacterClick: (id: string) => void;
}

function CharactersRenderList({
  data,
  onCharacterClick,
}: CharactersRenderListProps) {
  // Si no hay data todavía, no renderizamos nada (o un mensaje)
  if (!data?.characters?.results) return null;

  return (
    <Card.Group itemsPerRow={4} stackable>
      {data.characters.results.map((character: Character) => (
        <CharacterCard
          key={character.id}
          character={character}
          // Pasamos el id al hacer click
          onClick={() => onCharacterClick(character.id)}
        />
      ))}
    </Card.Group>
  );
}

export default CharactersRenderList;
