import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Button, Typography, Toolbar } from '@material-ui/core'

import useStyles from './styles'
import memories from '../../images/memories.png';
const Navbar = () => {
  const classes = useStyles()

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))

  console.log(user)

  useEffect(() => {
    const token = user?.token

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [])
  
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} varient="h6">{user.result.name}</Typography>
              <Button varient="contained" className={classes.logout} color="secondery">Logout</Button>
            </div>
          ) : (
            <Button component={Link} to='/auth' varient="contained" color="primary">Sign In</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar