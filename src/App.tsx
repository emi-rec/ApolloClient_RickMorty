import { useState } from "react";
import { Container, Header, Card, Loader, Message } from "semantic-ui-react";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { useGetDetailsCharacter } from "./hooks/useGetDetailsCharacter";
import type { Character } from "./types/Character";
import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";

function App() {
  const { loading, error, data } = useGetCharacters();
  console.log(data);

  const [open, setOpen] = useState(false);

  const [getDetail, detailLoading, detailData] = useGetDetailsCharacter();

  const handleClick = (id: string) => {
    getDetail({ variables: { id } }); // Disparo la query
    setOpen(true);
  };

  if (loading) <Loader active inline="centered" />;

  if (error) {
    return (
      <Message negative>
        <Message.Header>Error de conexión</Message.Header>
        <p>{error?.message}</p>
      </Message>
    );
  }

  return (
    <Container style={{ marginTop: "2em" }}>
      <Header as="h1">My first app using Apollo Client & TS</Header>
      {}

      <Card.Group>
        {data?.characters.results.map((character: Character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={handleClick}
          />
        ))}
      </Card.Group>

      {open && (
        <CharacterModal
          open={open}
          onClose={() => setOpen(false)}
          loading={detailLoading}
          data={detailData}
        />
      )}
    </Container>
  );
}

export default App;
