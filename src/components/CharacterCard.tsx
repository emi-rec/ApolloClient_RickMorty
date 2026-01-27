import { Card } from "semantic-ui-react";
import type { Character } from "../types/Character";

interface CharacterCardProps {
  character: Character;
  onClick: (id: string) => void;
}

function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <Card
      header={character.name}
      image={character.image}
      onClick={() => onClick(character.id)}
    />
  );
}

export default CharacterCard;
