
import { createUseStyles } from 'react-jss';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';

const PokeCard = (props: any) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link style={{ textDecoration: 'none' }}
        to={{
          pathname: `${props.pkmn.name}`,
        }}
        state={{ modal: true }}
      >
        <Card className="poke-card" variant="outlined">
          <CardContent>
            <Typography className='poke-number' sx={{ mb: 1.5 }} color="text.secondary">
              #{props.pkmn.number}
            </Typography>
            <CardMedia style={{ width: "unset", margin: "auto" }}
              component="img"
              height="194"
              image={props.pkmn.image}
              alt={props.pkmn.name}
            />
          </CardContent>
          <CardContent className='poke-card-content'>
            <Typography variant="h5" component="div">
              {props.pkmn.name}
            </Typography>
            <Typography>
              Type: {props.pkmn.types.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
export default PokeCard

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      boxSizing: 'border-box',
      '& .poke-card-content': {
        backgroundColor: '#202a3c',
        color: 'rgba(255,255,255,.92)',
      },
      '& .poke-card': {
        cursor: 'pointer',
        display: 'block',
        borderRadius: '2px',
        align: 'center',
        transition: 'all .25s linear',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4)',
        '&:hover': {
          boxShadow: '-1px 10px 29px 0px white'
        },
        '& .poke-number': {
          position: 'absolute',
          letterSpacing: '.3em',
          textOpacity: '0.25',
          fontSize: '.8rem',
          fontWeight: '500',
          margin: '0',
          color: '#202a3c'
        },
      },
    },
  },
  { name: 'PokeCard' },
);