import { createUseStyles } from 'react-jss';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <CircularProgress />
        </Box>
    );
}

const useStyles = createUseStyles(
    {
        root: {
            marginTop: '10rem'
        }
    }
  )