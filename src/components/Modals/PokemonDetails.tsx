import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { useGetPokemon } from '../../hooks/useGetPokemon'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: '#202a3c',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
};

interface PokemonDetails {
  id: string,
  number: string,
  name: string,
  weight: string,
  height: string,
  classification: string,
  types: string,
  resistant: string,
  weaknesses: string,
  fleeRate: string,
  maxCP: string,
  maxHP: string,
  image: string
}

export default function BasicModal() {
  const { pokeName } = useParams();
  const location = useLocation();
  
  let navigate = useNavigate();
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => navigate('/');

  const [poke, setPokemon] = useState('')

  // open 
  useEffect(() => {
    if (pokeName !== ' ') {
      setPokemon('name: ' + pokeName)
    } else {
      setPokemon('No pokeName was provided')
    }
  }, [pokeName])

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CardContent>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <Typography className='poke-number' sx={{ mb: 1.5 }} color="text.secondary">
                Pokemon number
              </Typography>
              <CardMedia style={{ width: "unset", margin: "auto" }}
                component="img"
                height="194"
                image=''
                alt=''
              />
            </CardContent>
            <CardContent className='poke-card-content'>
              <Typography variant="h5" component="div">
              </Typography>
              <Typography>
                Type: fire
              </Typography>
            </CardContent>
          </Box>
        </Modal>
      </div>
      <Outlet />
    </>
  );
}