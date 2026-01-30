import { useState } from "react";
import { Container, Header, Loader, Message } from "semantic-ui-react";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { useGetDetailsCharacter } from "./hooks/useGetDetailsCharacter";
import CharacterModal from "./components/CharacterModal";
import CharactersRenderList from "./components/CharactersRenderList";

function App() {
  const { loading, error, data } = useGetCharacters();
  const [open, setOpen] = useState(false);
  const [getDetail, detailLoading, detailData] = useGetDetailsCharacter();

  const handleClick = (id: string) => {
    getDetail({ variables: { id } }); // Disparo la query
    setOpen(true);
  };
  console.log(data);

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

      <CharactersRenderList data={data} onCharacterClick={handleClick} />

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
