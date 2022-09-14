import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export type Poke = {
  id: string;
  name: string;
  number: string;
  weight: object;
  height: object;
  classification: string;
  types: [];
  resistant: [];
  weaknesses: string;
  fleeRate: string;
  maxCP: string;
  maxHP: string;
  image: string;
};

export const GET_POKEMON = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemon = (name: unknown) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON, {
    variables: {
      name,
    },
  });

  const pokemon: Poke = useMemo(() => data?.pokemon || [], [data]);

  return {
    pokemon,
    ...queryRes,
  };
};
