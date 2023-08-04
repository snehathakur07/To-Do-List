import express from "express"
import bodyParse from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParse.urlencoded({ extended: true }))

app.use(express.static("public"))


const today = [];
const work = [];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];


app.get("/", (req, res) => {
    res.render("index.ejs", {
        days: dayNames,
        months:monthNames,
        today:today
    })
})
app.get("/work",(req,res)=>{
    res.render("work.ejs",{
        work:work
    })
})

app.post("/", (req, res) => {
    console.log(req.body.newItem+" added to today")
    today.push(req.body.newItem)
    res.redirect("/")
})
app.post("/work", (req, res) => {
    console.log(req.body.newItem+" added to work")
    work.push(req.body.newItem)
    res.redirect("/work")
})
app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})
