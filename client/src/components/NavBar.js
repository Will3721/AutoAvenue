import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';

function NavText({ href, text, isMain }) {
  return (
    <Typography
      variant={isMain ? 'h5' : 'h7'}
      noWrap
      style={{
        marginRight: '30px',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
      }}
    >
      <NavLink
        to={href}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {text}
      </NavLink>
    </Typography>
  )
}

export default function NavBar() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <NavText href='/' text='AutoAvenue' isMain />
          <NavText href='/search' text='SEARCH' />
          <NavText href='/reviews' text='REVIEWS' />
          <NavText href='/carsafetyratings' text='POPULAR' />
          <NavText href='/FuelTypes' text='FUEL' />
          <NavText href='/hidden_gems' text='GEMS' />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
