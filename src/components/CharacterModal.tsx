import { Modal, Image, Header, Loader } from "semantic-ui-react";
import type { Character } from "../types/Character";

interface CharacterModalProps {
  open: boolean;
  onClose: () => void;
  loading: boolean;
  // crear una interfaz para el detalle y ver la query de detalle que traigo!!
  data: { character: Character };
}

function CharacterModal({ open, onClose, loading, data }: CharacterModalProps) {
  console.log(data);
  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header>Detalle del Personaje</Modal.Header>
      <Modal.Content image>
        {loading ? (
          <Loader active />
        ) : (
          data?.character && (
            <>
              <Image size="medium" src={data.character.image} wrapped />
              <Modal.Description>
                <Header>{data.character.name}</Header>
                <p>
                  <strong>Género:</strong> {data.character.gender}
                </p>
                <p>
                  <strong>EPISODIOS:</strong>{" "}
                  {data.character.episode?.map((each) => (
                    <div key={data.character.id}>
                      <p>{each.episode}</p>
                      <b>{each.name}</b>
                    </div>
                  ))}
                </p>
              </Modal.Description>
            </>
          )
        )}
      </Modal.Content>
    </Modal>
  );
}

export default CharacterModal;
