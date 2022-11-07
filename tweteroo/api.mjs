import express from 'express' 
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

const tweets = []
const users = []

app.post("/sign-up", (req, res) => {
    users.push(req.body)
    res.send('OK')
})

app.post("/tweets", (req, res) => {
    tweets.push(req.body)
    res.send('OK')
})

app.get("/tweets", (req, res) => {

})

app.listen(5000, () => console.log('app running in port: 5000'));