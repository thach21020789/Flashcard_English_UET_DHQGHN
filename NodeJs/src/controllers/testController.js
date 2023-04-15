import connection from "../configs/DBConnection"


let getTestPage = (req, res) => {
    connection.query("SELECT * FROM account", function (error, rows) {
        return res.send(rows[0])
    });
    
}

module.exports = {
    getTestPage
}