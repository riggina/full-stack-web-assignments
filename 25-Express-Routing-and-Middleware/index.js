const express = require('express')

const app = express()

const port = 3001

const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
];

const middlewareLogger = function(req, res, next){
    console.log("logger")
    next();
};

const middlewarePostChecker = function(req, res, next) {
    const checkSpesies = ["kucing", "anjing", "kelinci"]
    const spesies = req.body.spesies.toLowerCase()

    if (checkSpesies.includes(spesies)){
        next();
    }
    else {
        res.status(400).send({ error: "Spesies not Valid"});

    }
}

app.use(express.json(), middlewareLogger);

app.get("/ping", (req,res) => {
    res.send("server ready to use")
})

// get all
app.get("/hewan", (req, res) => {
    res.status(200).send({
        message : "success get all",
        data : hewan
    })
})

// get by id
app.get("/hewan/:id", (req,res) => {
    try {
        const params = req.params.id
        const searchID = hewan.find(item => item.id === Number(params))

        if(searchID){
            res.status(200).send({
                message : "success get by id",
                data : searchID
            })
        } else {
            res.status(404).send({
                message : "data not found"
            })
        }
    } catch (error){
        res.status(500).send({ 
            message : error
        })
    }
})

// post 
app.post("/hewan", middlewarePostChecker, (req,res) => {
    try {
        const body = req.body
        const data = {
            id : body["id"],
            nama : body["nama"],
            spesies : body["spesies"]
        }
        hewan.push(data)
        res.status(200).send({
            message : "success added pet",
            data : hewan
        })
    }
    catch(error){
        res.status(500).send({
            message: error
        })
    }
})

//put (update) 
app.put("/hewan/:id", (req,res) => {
    try{
        const body = req.body
        const hewanID = req.params.id
        const index = hewan.findIndex(item => item.id === Number(hewanID))

        if(index !== -1) {
            hewan[index].nama = body.nama || hewan[index].nama
            hewan[index].spesies = body.spesies || hewan[index].spesies
            
            res.status(200).send({
                message : "success update data",
                data : hewan
            })
        } else {
            res.status(404).send({
                message : "data not found"
            })
        }
    } catch(error){
        res.status(500).send({
            message : error
        })
    }
})

//delete
app.delete("/hewan/:id", (req,res) => {
    try {
        const hewanID = req.params.id
        const findIndex = hewan.findIndex(item => item.id === Number(hewanID))

        if(findIndex !== -1){
            hewan.splice(findIndex, 1)

            res.status(200).send({
                message : "success delete data",
                data : hewan
            })
        } else {
            res.status(404).send({
                message : "data not found"
            })
        }    
    } catch (error) {
        res.status(500).send({
            message : error
        })
    }

})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})