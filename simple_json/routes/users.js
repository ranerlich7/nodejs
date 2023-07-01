const express = require("express")
const router = express.Router()
router.use(logger)

router.route("/")
    .get((req, res) => {
        console.log(req.query.name)
        res.json(users)
    })
    .post((req, res) => {
        console.log('CREATE USER - POST')
        const jsonData = req.body;
        console.log(`got data ${jsonData.name}`)
        users.push(jsonData)
        res.json({ message: 'user Created Succsesfuly' })
    })


router.route("/:id")
    .get((req, res) => {
        console.log(`GET user: ${req.params.id}`)
        res.send("get User id:" + req.params.id + req.user.name)
    })
    .put((req, res) => {
        const jsonData = req.body;

        users[req.params.id-1].name = jsonData.name
        res.json({ message: 'user Updated Succsesfuly' })
    })

    .delete((req, res) => {
        console.log(req.query.name)
        res.send("delete User id:" + req.params.id)
    })

const users = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router  