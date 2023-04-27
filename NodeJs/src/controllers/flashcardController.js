import flashcardService from '../services/flashcardService'

let getVocabByC = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getVocabByCategory(req.params.category)
    )
}

let getVocabByCD = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getVocabByCategoryAndDifficulty(req.params.category, req.params.difficulty)
    )
}

let getVocab = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getVocabService(req.params.word)
    )
}

module.exports = {
    getVocabByC, getVocabByCD, getVocab
}