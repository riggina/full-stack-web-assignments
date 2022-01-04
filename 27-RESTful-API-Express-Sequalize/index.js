const express = require("express")
const Sequelize = require("sequelize")
const mysql2 = require("mysql2")
const Hewan = require('./models').hewan

const app = express()
port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize('hewan_databases', 'root', 'Imokaydude2000',{
    host: "localhost",
    dialect: "mysql"
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .then(() => {
        Hewan.sync().then(() => {
          console.log("Table Has been Created");
        });
      })
      .catch((err) => {
        console.log("Unable to Connect", err);
    });
    
// Route
app.get('/', (req,res)=>{
    res.send("server ready to use")
    console.log("server ready to use")
})

// Get All
app.get("/hewan", (req, res) => {
    Hewan.findAll().then((result) => {
      res.send({
        message: "success get all data",
        data: result
      });
    });
  });
  
  // Get Data By Id
  app.get("/hewan/:id", (req, res) => {
    const hewanId = req.params.id;
    Hewan.findOne({
      where: {
        id: hewanId,
      },
    })
      .then((result) => {
        res.send({
          message : `GET DATA BY ID : ${hewanId}`,
          data : result
        });
      })
      .catch((err) => {
        res.send({
          message: err.message,
        });
      });
  });
  
  // Post Data
  app.post("/hewan", async (req, res) => {
    const body = req.body;
    const hewan = {
      nama: body["nama"],
      namaspesies: body["namaspesies"],
      umur: body["umur"],
    };
  
    try {
      await Hewan.create(hewan);
      res.status(201).send({
        message: `success add data`,
        data: hewan,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  });
  
  // Put Data
  app.patch("/hewan/:id", async (req, res) => {
    try {
      const hewanId = req.params.id;
      const body = req.body;
      const hewan = {
        nama: body["nama"],
        namaspesies: body["namaspesies"],
        umur: body["umur"],
      };
  
      await Hewan.update(hewan, {
        where: {
          id: hewanId,
        },
      });
  
      res.status(200).json({
        message: `success update data by id: ${hewanId}`,
      });
    } catch (error) {
      res.status(500).send({
        message: error,
      });
    }
  });
  
  // Delete Data By Id
  app.delete("/hewan/:id", (req, res) => {
    const hewanId = req.params.id;
    Hewan.destroy({
      where: {
        id: hewanId,
      },
    })
      .then((result) => {
        res.send({
          message: `success delete data by id ${hewanId}`,
          delete : hewanId
        });
      })
      .catch((err) => {
        res.send({
          message: err.message,
        });
      });
  });

app.listen(port, ()=>{
    console.log("server is listening on", port)
})