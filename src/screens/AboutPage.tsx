import { createUseStyles } from 'react-jss';

export const AboutPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>About Page</h1>
    </div>
  );
}

const useStyles = createUseStyles(
  {
    root: {
      marginTop: '6rem',
      width: '100%',
      textAlign: 'center',
      boxSizing: 'border-box',
      color: 'rgba(255,255,255,.92)',
    },
  },
  { name: 'AboutPage' }
);
