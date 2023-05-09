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
                "SELECT *, (SELECT IPA FROM phonemes WHERE word = ?) AS IPA FROM entries WHERE word = ? GROUP BY word;", [word, word],
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
                "SELECT UPPER(word) as word, IPA, wordtype, definition, vietnamese FROM entries WHERE LENGTH(word) = 5 AND category_id != 0 ORDER BY RAND() LIMIT 1;",
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

module.exports = {
    getVocabByCategory, getVocabByCategoryAndDifficulty, getVocabService, getRandomVocabService
}