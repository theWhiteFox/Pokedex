import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export type Poke = {
  id: string, 
  name: string, 
  number: string, 
  weight: object, 
  height: object, 
  classification: string, 
  types: [], 
  resistant: [], 
  weaknesses: string, 
  fleeRate: string, 
  maxCP: string, 
  maxHP: string, 
  image: string
}

export type PokeOption = {
  value: Poke['id'];
  label: Poke['name'];
};

export const GET_POKEMON = gql`
  query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
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

export const useGetPokemon = (name:string) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON, {
    variables: {
      name: name
    },
  });

  const pokemon: Poke[] = useMemo(() => data?.pokemon || [], [data]);

  // const pokeOptions: PokeOption[] = useMemo(
  //   () => Object.keys(pokemon).map((p: Poke) => ({ value: p.id, label: p.name })),
  //   [pokemon]
  // );

 console.log(pokemon)

  return {
    pokemon,
    // pokeOptions,
    ...queryRes,
  };
};
