import { Modal, Image, Header, Loader } from "semantic-ui-react";
import type { Character } from "../types/Character";
import EpisodeTable from "./EpisodeTable";

interface CharacterModalProps {
  open: boolean;
  onClose: () => void;
  loading: boolean;
  data?: { character: Character };
}

function CharacterModal({ open, onClose, loading, data }: CharacterModalProps) {
  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header>Detalle del Personaje</Modal.Header>
      <Modal.Content image>
        {loading ? (
          <div style={{ padding: '2em', width: '100%' }}><Loader active inline="centered" /></div>
        ) : (
          data?.character && (
            <>
              <Image size="medium" src={data.character.image} wrapped />
              <Modal.Description style={{ width: '100%', marginLeft: '1.5em' }}>
                <Header>{data.character.name}</Header>
                <p><strong>Género:</strong> {data.character.gender}</p>
                
                <Header as="h4">Lista de Episodios</Header>
                {/* Si data existe pero no hay episodios, EpisodeTable 
                   manejará el array vacío internamente.
                */}
                <EpisodeTable data={data.character.episode} />
              </Modal.Description>
            </>
          )
        )}
      </Modal.Content>
    </Modal>
  );
}

export default CharacterModal;