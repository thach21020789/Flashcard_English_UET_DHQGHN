import connection from "../configs/DBConnection";
let getRandomQuiz = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * from quiz ORDER BY RAND() LIMIT 15", function (error, rows) {
                if (error) reject(error);
                resolve(rows)
            });
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = {
    getRandomQuiz
}