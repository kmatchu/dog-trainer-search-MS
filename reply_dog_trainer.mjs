
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
// Cors implementation based on tutorial accessed 5/20/24 at:
// https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:8000"
}

app.use(cors(corsOptions))

app.get("/trainer", (req,res) => {
    console.log("Received a Request")
    const request_profile = req.query.type

    if (request_profile == "puppy"){
        res.send("Check out these trainers for puppy training tips: \n 1) Kikopup \n 2) McCann Dogs")
    } else if (request_profile == "agility"){
        res.send("Check out these trainers for agility training: \n 1) OneMind Dogs \n 2) McCann Dogs \n 3) Susan Garrett \n 4) Bad Dog Agility")
    } else if (request_profile == "behavioral"){
        res.send("Check out these trainers for behavioral issues: \n 1) Robert Cabral \n 2) Larry Krohn")
    } else if (request_profile == "sports"){
        res.send("Check out these trainers for bite sports: \n 1) Michael Ellis \n 2) Ivan Balabanov")
    } else {
        res.send("Error: Please make sure to request with an approved application.")
    }

})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});