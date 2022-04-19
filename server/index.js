import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postsRoute from './routes/posts.js'

const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postsRoute)

// const CONNECTION_URL = 'mongodb+srv://Ankush263:Ankush263@cluster0.3c3fb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const CONNECTION_URL = 'mongodb+srv://Ankush263:Ankush263@cluster0.3c3fb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running to the port: ${PORT}`)))
  .catch((err) => console.log(err))

//mongoose.set('useFindAndModify', false)