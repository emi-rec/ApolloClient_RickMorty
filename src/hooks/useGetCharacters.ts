import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacter {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useGetCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  return { loading, error, data };
};
