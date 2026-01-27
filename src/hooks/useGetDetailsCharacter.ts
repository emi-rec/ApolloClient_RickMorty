import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_DETAIL = gql`
  query GetCharacterDetail($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useGetDetailsCharacter = () => {
  const [getDetail, { loading: detailLoading, data: detailData }] =
    useLazyQuery(GET_CHARACTER_DETAIL);

  return [getDetail, detailLoading, detailData];
};
