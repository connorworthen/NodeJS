const albumRoutes  = require('./albumRoutes/albumRoutes')
const authRoutes = require('./authRoutes/authRoutes')
const userRoutes = require('./userRoutes/userRoutes')
const songRoutes = require('./songRoutes/songRoutes')
const artistRoutes = require('./artistRoutes/artistRoutes')
const artistAlbumRoutes = require('./artistAlbumRoutes/artistAlbumRoutes')

const verify = require('../middleware/verifyToken')
const express = require('express')
const verifyRouter = express.Router()
verifyRouter.use(verify)

const authRouter = express.Router()

authRouter.use('/register', authRoutes)

authRouter.use('/login', authRoutes)

verifyRouter.use('/users', userRoutes)

verifyRouter.use('/albums', albumRoutes)

verifyRouter.use('/songs', songRoutes)

verifyRouter.use('/artists', artistRoutes)

verifyRouter.use('/artist',  artistAlbumRoutes)

module.exports = [
    authRouter,
    verifyRouter
]
