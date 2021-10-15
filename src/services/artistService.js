const Artist = require('../models/artistModel/artist')

const allArtistsService = async () => {
    try {
        const artists = await Artist.find()
        return artists
    } catch (err) {
        return 'Artist service failed'
    }
}

const oneArtistService = async (id) => {
    try {
        const artist = await Artist.findById({_id: id})
        return artist
    } catch (err) {
        return 'Artist service failed'
    }
}

const createArtistService = async (name, age, recordLabel, description, albums, songs) => {
    const artist = await Artist({
            name,
            age,
            recordLabel,
            description,
            albums,
            songs
    })
    try {
        return await artist.save()
    } catch (err) {
        return 'Artist service failed'
    }
}

const updateArtistService = async (updatedArtist, id) => {
    const patch = await Artist.updateMany({_id  : id}, {$set: updatedArtist})
    try {
        return patch
    } catch (err) {
        return 'Artist service failed'
    }
}

const deleteArtistService = async (id) => {
    const deleteArtist = await Artist.deleteMany({_id  : id})
    try {
        return deleteArtist
    } catch (err) {
        return 'Artist service failed'
    }
}


module.exports = {
    allArtistsService,
    oneArtistService,
    createArtistService,
    updateArtistService,
    deleteArtistService,
}