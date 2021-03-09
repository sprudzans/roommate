const express = require('express')
const app = express()
const port = 4000

const Sequelize = require('sequelize'); //Подключаем библиотеку
const sequelize = new Sequelize('test_db', 'root', 'root', {
    dialect: 'mysql'
})

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

sequelize.sync().then(()=>{
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
}).catch(err=>console.log(err));

app.use(express.json())

app.get("/", function(req, res){
    User.findAll().then(data => res.send(data))
});


app.post("/create", (req, res, next) => {
    const {name} = req.body
    return User.create({name})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})