import quizService from '../services/quizService'

let getRandomQuiz = async (req, res) => {
    return res.status(200).json(
        await quizService.getRandomQuiz()
    )
}

module.exports = {
    getRandomQuiz
}