const { artistModel } = require('../models/artistModel/artist')
const { albumModel } = require('../models/artistModel/artist')

const allArtistAlbum = async (id) => {
    try {
        const artist = await artistModel.findById({_id: id});
        return artist.albums
    } catch (err) {
        return 'failed'
    }
}

// const oneArtistAlbum = async (id) => {
//     try {
//         const artist = await Artist.findById({_id: id});
//         console.log(artist)
//         return artist.album
//     } catch (err) {
//         return 'failed'
//     }
// }

const albumService = async (name, tracks, id) => {
    const album = await albumModel({ name, tracks })
    try {
        const artistData = await artistModel.findById({_id: id})
        const newAlbum = await artistData.push(album)
        return await newAlbum.save()
    } catch (err) {
        return {error: err}
    }
}



module.exports = {
    allArtistAlbum,
    albumService
}