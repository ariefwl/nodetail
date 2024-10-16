const express = require("express");
const app = express();
// const helmet = require('helmet');
const methodOverride = require('method-override');
const path = require("path");
const router = require('./routers/router');
// const conn = require('./config/db');

// Konfigurasi Helmet untuk mengizinkan unsafe-eval
// app.use(
//     helmet({
//       contentSecurityPolicy: {
//         directives: {
//           defaultSrc: ["'self'"],
//           scriptSrc: ["'self'", "'unsafe-eval'"], // Menambahkan 'unsafe-eval'
//         },
//       },
//     })
//   );


// Override method POST dengan query _method
app.use(methodOverride('_method'));

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Default use
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'assets')));
// app.use('/assets',express.static('assets')); 

//Routing
app.use(router);

app.listen(3000, () => {
    console.log('Runing on port 3000');
})