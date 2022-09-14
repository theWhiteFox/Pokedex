import * as React from 'react';
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

  return (
    <div
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul>
          <li> weight: object,</li>
          <li> height: object,</li>
          <li>classification: {props.pokeDetails.classification}</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul>
          <li>resistant: [],</li>
          <li>weaknesses: {props.pokeDetails.weaknesses},</li>
          <li>fleeRate: {props.pokeDetails.fleeRate},</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul>
          <li>maxCP: {props.pokeDetails.maxCP},</li>
          <li>maxHP: {props.pokeDetails.maxHP},</li>
          <li>image: {props.pokeDetails.image}</li>
        </ul>
      </TabPanel>
    </Box>
  );
}
