const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
//     const { id } = req.params;
//     axios(URL + id)
//         .then(result => result.data)
//         .then(({ id, name, gender, species, origin, image, status }) => {
//             let character = {
//                 id,
//                 name,
//                 gender,
//                 species,
//                 origin,
//                 image,
//                 status
//             }
//             return character ? res.status(200).json(character) : res.status(404).send('Not found')
//         })
//         .catch((error) => res.status(500).json({ error: error.message }));
// }

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, gender, species, origin, image, status } = (await axios(URL + id)).data
        const character = { id, name, gender, species, origin, image, status }
        character ? res.status(200).json(character) : res.status(404).send('Character not found')

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getCharById };

