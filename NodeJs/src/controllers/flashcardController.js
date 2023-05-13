import { response } from 'express'
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

let getRandomVocab = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getRandomVocabService()
    )
}


let saveFlashcard = async (req, res) => {
    try {
        let response = await flashcardService.saveFlashcardService(req.body.user_id, req.body.word_id)
        return res.status(200).json({
            message : response
        })
    } catch (error) {
        console.log("check error at flashcard controller: ", error)
        return res.status(406).json({
            error : error
        })
    }
    
}

let getSavedFlashcard = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getSavedFlashcard(req.params.user_id)
    )
}

module.exports = {
    getVocabByC, getVocabByCD, getVocab, getRandomVocab, saveFlashcard, getSavedFlashcard
}