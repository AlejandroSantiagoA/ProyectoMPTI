const express = require("express");
const app = express();
const path = require("path");
const routerUser= require('./src/routes/userRoutes');
const publicPath = path.resolve(__dirname, "./public");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require("express-session"); //Para usar sesiones
const cookieParser = require("cookie-parser"); // Para usar cookies


app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: "This is a secret, blabla",
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views/'));

app.listen(3000, () => {
  console.log("Server running at port 3000");
});

app.use('/users', routerUser);
app.use((req, res, next)=>{
  res.status(404).render('notFound');
});
