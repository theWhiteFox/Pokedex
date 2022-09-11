import { createUseStyles } from 'react-jss';
import Search from '../Search/Search';

export const PokemonList = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Search />
      </div>
    </>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '12px',
      marginTop: '3rem',
      boxSizing: 'border-box',
      actionArea: {
        '&:hover $focusHighlight': {
          opacity: 1,
        },
      },
    },
  },
  { name: 'PokemonList' }
);
