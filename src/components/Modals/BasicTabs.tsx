import * as React from 'react';
import { createUseStyles } from 'react-jss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props: any) {
  const [value, setValue] = React.useState(0);

  const { pokeDetails } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        style={{ color: 'red' }}
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Details" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul>
          <li> weight: object,</li>
          <li> height: object,</li>
          <li>classification: {pokeDetails.classification}</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul>
          <li>resistant: {pokeDetails.resistant},</li>
          <li>weaknesses: {pokeDetails.weaknesses}</li>
          <li>fleeRate: {pokeDetails.fleeRate},</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul>
          <li>maxCP: {pokeDetails.maxCP},</li>
          <li>maxHP: {pokeDetails.maxHP},</li>
          <li>image: {pokeDetails.image ? 'yes' : 'no'} </li>
        </ul>
      </TabPanel>
    </Box>
  );
}

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#202a3c',
      color: 'rgba(255,255,255,.92)',
      listStyle: 'none',
      '& .poke-card': {
        cursor: 'pointer',
        display: 'block',
        borderRadius: '2px',
        align: 'center',
        transition: 'all .25s linear',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4)',
        '&:hover': {
          boxShadow: '-1px 10px 29px 0px white',
        },
        '& .poke-number': {
          position: 'absolute',
          letterSpacing: '.3em',
          textOpacity: '0.25',
          fontSize: '.8rem',
          fontWeight: '500',
          margin: '0',
          color: '#202a3c',
        },
      },
    },
  },
  { name: 'TabPanel' }
);
