const {Pool} = require("pg")


const pool = new Pool({
    port: 5432,
    user: "reaper",
    password: "2244",
    database: "supp_trackerDB"
})

module.exports = pool