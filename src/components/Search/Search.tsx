import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import LoadingSpinner from '../PokemonList/LoadingSpinner';
import PokeCard from '../PokemonCard/PokeCard';

interface PokemonResult {
  id: string;
  image: string;
  name: string;
  number: string;
  types: string;
}

function Search() {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState<PokemonResult[]>([]);

  const searchItems = (searchValue: any) => {
    setSearchInput(searchValue);
    if (searchValue !== '') {
      const filteredData = pokemons.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(pokemons);
    }
  };

  return (
    <div className={classes.root}>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Pokémon Names</span>
        </label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <input
            type="text"
            placeholder="Enter Pokemon name"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
      </form>
      {loading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 20 }}
        >
          {searchInput.length > 1
            ? filteredResults.map((pkmn) => (
              <Grid item xs={4} key={pkmn.id}>
                <PokeCard pkmn={pkmn} />
              </Grid>
            ))
            : pokemons.map((pkmn) => (
              <Grid item xs={4} key={pkmn.id}>
                <PokeCard pkmn={pkmn} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Search;

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      boxSizing: 'border-box',
      form: {
        margin: 'auto',
        display: 'block',
      },
      '& label span': {
        marginTop: '.4rem',
        fontSize: '1.6rem',
        borderBottom: '10rem',
        display: 'block',
        marginBottom: '.4rem',
        color: 'rgba(255,255,255,.92)',
      },
      '& visually-hidden': {
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
        fontSize: '24px',
      },
      '& input[type=text]': {
        float: 'left',
        width: '100%',
        maxWidth: '900px',
        height: '40px',
        padding: '0px 8px',
        fontSize: '1rem',
        color: 'grey',
      },
    },
  },
  { name: 'Search' }
);
