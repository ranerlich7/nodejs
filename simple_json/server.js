const express = require("express")
const app = express()
console.log('server starting...')
app.listen(3000)
app.use(express.static("public"))
app.use(express.json())

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.get("/", (req, res) => {
    console.log(req.query.name)
    res.render("index.ejs", {text:"ran is getting the job"}) ;
    // ({message: `User List ${req.query.name}`})
  })
