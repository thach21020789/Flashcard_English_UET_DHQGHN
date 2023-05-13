import DBconnection from "../configs/DBConnection"

let getVocabByCategory = (category) => {
    return new Promise( (resolve, reject) => {
        try {
            DBconnection.query(
                'SELECT * FROM `entries` e INNER JOIN `category` c ON e.category_id = c.category_id WHERE c.name = ? GROUP BY word', category,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve (rows)
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let getVocabByCategoryAndDifficulty = (category, difficulty) => {
    return new Promise( (resolve, reject) => {
        try {
            DBconnection.query(
                'SELECT *  FROM `entries` e INNER JOIN `category` c ON e.category_id = c.category_id WHERE c.name = ? AND difficulty = ? GROUP BY word', [category, difficulty],
                function(err, rows) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve (rows)
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let getVocabService = (word) => {
    return new Promise( (resolve, reject) => {
        try {
            DBconnection.query(
                "SELECT * FROM entries WHERE word = ? GROUP BY word;", [word],
                function(err, rows) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve (rows[0])
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let getRandomVocabService = () => {
    return new Promise( (resolve, reject) => {
        try {
            DBconnection.query(
                "SELECT UPPER(word) as word, IPA, wordtype, definition, vietnamese, difficulty, name AS category FROM entries e INNER JOIN category c ON e.category_id = c.category_id WHERE LENGTH(word) = 5 ORDER BY RAND() LIMIT 1;",
                function(err, rows) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve (rows[0])
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let saveFlashcardService= (user_id, word_id) => {
    return new Promise( (resolve, reject) => {
        try {
            DBconnection.query(
                `SELECT (SELECT IF(? IN (SELECT word_id FROM flashcard_storage WHERE id = ? ), "You've already saved this flashcard", "Free to save" )) AS flashcard_status;`, [word_id, user_id],
                function(err, rows) {
                    if (err) {
                        reject(err)
                    } else {
                        if (rows[0].flashcard_status == "Free to save") {
                            DBconnection.query(
                                `INSERT INTO flashcard_storage SET id = ?, word_id = ?`, [user_id, word_id], function(err, rows) {
                                    if (err) {
                                        reject (err)
                                    } else {
                                        resolve ("Save flashcard successfully")
                                    }
                                }
                            )
                        } else {
                            reject("You've already saved this flashcard")
                        }
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let getSavedFlashcard = (user_id) => {
    console.log("check user_id: ", user_id)
    return new Promise( (resolve, reject) => {
        try {
            DBconnection.query(
                "SELECT a.id, fullname, e.id as word_id, word, IPA, wordtype, definition, vietnamese FROM `entries` e INNER JOIN flashcard_storage f ON e.id = f.word_id INNER JOIN account a ON f.id = a.id WHERE a.id = ?", [user_id], 
                function(err, rows) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve (rows)
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = {
    getVocabByCategory, getVocabByCategoryAndDifficulty, getVocabService, getRandomVocabService, saveFlashcardService, getSavedFlashcard
}