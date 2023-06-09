const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const profile_router = require('./routes/profiles.js');
const logins_router = require('./routes/login.js');


const app = express();
dotenv.config();

app.listen(process.env.PORT||3001, ()=>{
	console.log(`Server run on port ${process.env.PORT||3001}`);
});

app.use('/', express.static(__dirname+'/public'))
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/', profile_router.router);
app.use('/',logins_router.router);



// // Подключение необходимых модулей
// const express = require('express');

// // Создание экземпляра приложения Express
// const app = express();

// // Обработчик маршрута для главной страницы
// app.get('/', (req, res) => {
//   res.send('Привет, мир!');
// });

// // Запуск сервера
// app.listen(3000, () => {
//   console.log('Сервер запущен на порту 3000');
// });