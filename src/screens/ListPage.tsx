import { createUseStyles } from 'react-jss';
import { PokemonList } from '../components/PokemonList';

export const ListPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PokemonList />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
    },
  },
  { name: 'ListPage' }
);
