import DBconnection from "../configs/DBConnection"

let getVocabByCategory = (category) => {
    return new Promise( (resolve, reject) => {
        try {
            DBconnection.query(
                'SELECT * FROM `entries` e INNER JOIN `category` c ON e.category_id = c.category_id WHERE c.name = ?', category,
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
    getVocabByCategory
}