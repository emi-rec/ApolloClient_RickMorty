import React, { useState } from 'react';
import { Table, Icon } from 'semantic-ui-react';

export interface Episode {
  id?: number | string; // Es opcional porque viene de la prop del modal
  __typename?: 'Episode';
  name: string;
  episode: string;
}

interface EpisodeTableProps {
  data?: Episode[] | null;
}

const EpisodeTable = ({ data }: EpisodeTableProps) => {
  // El estado puede ser string, number o null
  const [expandedId, setExpandedId] = useState<number | string | null>(null);

  const episodes = data ?? [];

  // Cambiamos el tipo del parámetro a: number | string
  const handleRowClick = (id: number | string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (episodes.length === 0) return <p>No hay episodios disponibles.</p>;

  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={2}>Status</Table.HeaderCell>
          <Table.HeaderCell>Episode</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {episodes.map((item, index) => {
          /** * SOLUCIÓN AL ERROR:
           * Si item.id es undefined, usamos el index del array como ID.
           * Esto garantiza que 'rowId' nunca sea undefined.
           */
          const rowId = item.id ?? index;
          const isExpanded = expandedId === rowId;
          
          return (
            <React.Fragment key={rowId}>
              <Table.Row 
                onClick={() => handleRowClick(rowId)} // Pasamos rowId (seguro)
                style={{ cursor: 'pointer' }}
                active={isExpanded}
              >
                <Table.Cell collapsing>
                  <Icon name={isExpanded ? 'chevron down' : 'chevron right'} />
                </Table.Cell>
                <Table.Cell>{item.episode}</Table.Cell>
              </Table.Row>

              {isExpanded && (
                <Table.Row>
                  <Table.Cell colSpan="2" style={{ backgroundColor: '#f9f9f9' }}>
                    <strong>Name:</strong> {item.name}
                  </Table.Cell>
                </Table.Row>
              )}
            </React.Fragment>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default EpisodeTable;