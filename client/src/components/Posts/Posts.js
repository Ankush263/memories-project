import React from "react"
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from "react-redux"
import Post from './Post/Post'

import useStyle from './styles'
const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyle()

  

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>

          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts