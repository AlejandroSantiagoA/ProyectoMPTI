const db = require("../../database/models");
const User = db.User;

const userController = {
    register:(req, res)=>{
        res.sendFile(
            //aquí mete la ruta de tu formulario de registro
         );
    },
    createUser:(req, res)=>{
        
        console.log(req.body);
        let user = {
            ...req.body
        }
        User.create(user)
            .then(user=>res.status(200).send(user))
            .catch(error => res.send(error));
    },
    login:(req, res)=>{
        res.sendFile(
            //Aquí coloca la ruta de tu formulario de login
        )
    },
    gettingLogged: (req, res) => {
        User.findOne({
            where: {
                email: req.body.email,
                pass: req.body.pass
            }
        })
            .then(user=> res.status(200).send(user))
            .catch(error=>res.send(error))
    }
};


module.exports = userController;