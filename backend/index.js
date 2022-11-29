import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "rbksqlsprint112",
    database : "app"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.json('hello this is the backend')
})

app.get("/songs", (req,res)=>{
    const q = "SELECT * FROM songs"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/songs", (req, res)=>{
    const q = "INSERT INTO songs (`title`,`artist`,`cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.artist,
        req.body.cover
    ]

    db.query(q,[values], (err, data)=>{
        if(err) return res.json(err);
        return res.json("Song has been submitted");
    })
})

app.listen(5000, ()=>{
    console.log('listening on port 5000!')
})