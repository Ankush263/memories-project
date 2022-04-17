import React, { useState } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core"

import useStyle from './styles'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  })
  const classes = useStyle()

  const handleSubmit = () => {

  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography varient="h6">Creating a Memory</Typography>
        <TextField 
          name="creator" 
          varient="outliner" 
          label="Creator" 
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
      </form>
    </Paper>
  )
}

export default Form