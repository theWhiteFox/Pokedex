import { createUseStyles } from 'react-jss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, IconButton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import { useGetPokemon } from '../../hooks/useGetPokemon';

export default function BasicModal() {
  const { pokeName } = useParams();
  const location = useLocation();
  const { pokemon } = useGetPokemon(pokeName);
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => navigate('/');

  const [poke, setPokemon] = useState('');

  // open
  useEffect(() => {
    if (pokeName !== ' ') {
      setPokemon(`name: ${pokeName}`);
    } else {
      setPokemon('No pokeName was provided');
    }
  }, [pokeName]);

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.style}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Card className="poke-card" variant="outlined">
              <CardContent>
                <Typography
                  className="poke-number"
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  #{pokemon.number}
                </Typography>
                <CardMedia
                  style={{ width: 'unset', margin: 'auto' }}
                  component="img"
                  height="194"
                  image={pokemon.image}
                  alt={pokemon.name}
                />
              </CardContent>
              <CardContent className="poke-card-content">
                <Typography variant="h5" component="div">
                  {pokemon.name}
                </Typography>
                <Typography>Type: {pokemon.types}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </div>
      <Outlet />
    </>
  );
}

const useStyles = createUseStyles(
  {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 380,
      border: '2px solid white',
      boxShadow: 24,
      backgroundColor: '#202a3c',
      p: 4,
      '& .poke-card-content': {
        backgroundColor: '#202a3c',
        color: 'rgba(255,255,255,.92)',
        align: 'center',
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
  { name: 'PokeCard' }
);
