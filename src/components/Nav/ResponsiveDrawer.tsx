import { createUseStyles } from 'react-jss';
import * as React from 'react';
import clsx from 'clsx';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useLayout, useToggleNav } from '../../contexts';

const drawerWidth = 72;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { navCollapsed } = useLayout();
  const classes = useStyles({ navCollapsed });
  const toggleNav = useToggleNav();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.title}>
            <img src="/pokeball-white.png" className={classes.img} />
            <h3>Pokémon</h3>
          </div>
          <Link to="/">
            List
          </Link>
          <a
            className={classes.gitLink}
            href="https://github.com/theWhiteFox/ui-assessment-pokedex-snr"
          >
            <img src="/icons8-octocat-500.svg" className={classes.svg} />
            <h3>GitHub</h3>
          </a>
        </div>
        <div className={classes.bottom}>
          <button className={classes.expandBtn} onClick={() => toggleNav()}>
            <span
              title={navCollapsed ? 'Expand' : 'Collapse'}
              className={clsx(classes.btnIcon, 'material-icons')}
            >
              {navCollapsed ? 'unfold_more' : 'unfold_less'}
            </span>
            <span className={classes.btnTxt}>Collapse</span>
          </button>
        </div>
      </div>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Pokédex
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '&': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '&': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

interface StyleProps {
  navCollapsed: boolean;
}

const useStyles = createUseStyles(
  {
    root: {
      zIndex: 100,
      background: '#131924',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      width: (props: StyleProps) => (props.navCollapsed ? '81px' : '240px'),
      display: 'flex',
      flexDirection: 'column',
      transition: 'width .2s ease-in-out',
      overflow: 'hidden',
      color: 'rgba(255,255,255,.92)',
    },
    spacer: {
      height: '100%',
      width: (props: StyleProps) => (props.navCollapsed ? '81px' : '240px'),
      transition: 'width .2s ease-in-out',
    },
    main: {
      flex: '1',
      '& > *': {
        paddingLeft: '18px',
        paddingRight: '18px',
      },
    },
    title: {
      display: 'flex',
      letterSpacing: '.1rem',
      alignItems: 'center',
      '& h3': {
        marginLeft: '18px',
      },
    },
    gitLink: {
      display: 'flex',
      letterSpacing: '.1rem',
      alignItems: 'center',
      '& h3': {
        marginLeft: '18px',
      },
      '&:hover': {
        background: 'rgba(255,255,255,.04)',
      },
    },
    img: {
      width: '48px',
      paddingTop: '12px',
      paddingBottom: '12px',
      filter: 'brightness(75%)',
    },
    svg: {
      width: '48px',
      paddingTop: '4px',
      paddingLeft: '10px',
      paddingRight: '12px',
      paddingBottom: '4px',
      filter: 'brightness(75%)',
    },
    bottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '12px 18px',
      borderTop: '2px solid rgba(255, 255, 255, .1)',
    },
    expandBtn: {
      background: 'transparent',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      cursor: 'pointer',
      '&:hover': {
        background: 'rgba(255,255,255,.04)',
      },
      '&:active': {
        background: 'rgba(255,255,255,.06)',
      },
      overflow: 'hidden',
    },
    btnIcon: {
      transform: 'rotate(90deg)',
    },
    btnTxt: {
      marginLeft: '18px',
      transition: 'all 0s ease-in-out .2s',
    },
  },
  { name: 'Nav' }
);
