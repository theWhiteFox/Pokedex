import { createUseStyles } from 'react-jss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { LayoutProvider } from '../contexts';
// import { Nav } from '../components/Nav';
import ResponsiveDrawer from '../components/Nav/ResponsiveDrawer';
import { client } from './client';
import { ListPage } from '../screens';
import Modal from '../components/Modals/PokemonDetails'

function App() {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <LayoutProvider>
        <div className={classes.root}>
          <BrowserRouter>
            <ResponsiveDrawer />
            <div className={classes.content}>
              <div className={classes.scrollableArea}>
                <Routes location={location}>
                  <Route path="/" element={<ListPage />} />
                  <Route path=":pokeName" element={<Modal />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </LayoutProvider>
    </ApolloProvider>
  );
}

const useStyles = createUseStyles(
  {
    root: {
      background: '#171E2b',
      minHeight: '100vh',
      minWidth: '100vw',
      height: '100%',
      width: '100%',
      display: 'flex',
    },
    content: {
      flex: '1',
      overflow: 'hidden',
      position: 'relative',
    },
    scrollableArea: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
    },
  },
  { name: 'App' }
);

export default App;
