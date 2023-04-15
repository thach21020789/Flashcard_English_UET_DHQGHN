import flashcardService from '../services/flashcardService'

let getVocab = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getVocabByCategory(req.params.category)
    )
}

module.exports = {
    getVocab
}