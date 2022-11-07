import express from 'express' 
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json())

const tweets = []
const users = []
const tweetDefault = [{username:'Tweteroo', tweet:'Bem-vindo ao twiteroo!', 
avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png'}]
let avatar

app.post("/sign-up", (req, res) => {
    users.push(req.body)
    avatar = req.body.avatar
    res.send('OK')
})

app.post("/tweets", (req, res) => {
    req.body['avatar'] = avatar
    tweets.push(req.body)
    res.send('OK')
})

app.get("/tweets", (req, res) => {

    if (tweets.length === 0) {
        res.send(tweetDefault)
        return
    }

    const reversedArray = tweets.reverse()
    const newArray = []
    for(let i=0; i<10; i++) {
        newArray.push(reversedArray[i])
    }
    res.send(newArray)
})

app.listen(5000, () => console.log('app running in port: 5000'));