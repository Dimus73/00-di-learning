const express = require('express');
const ejs = require('ejs');

const app = express();

// sete template engine
app.set('view engine', 'ejs');

app.listen(process.env.PORT||3030, ()=>{
  console.log(`run on ${process.env.PORT||3030}`);
})

app.get('/', (req,res)=>{
  // res.send('<h1>Hello EJS</h1>')
  let login = false;
  let user = {
    firstName:'John',
    lastName:'Due'
  };
  let students = {
    stu1: 'mary',
    stu2: 'kelly',
    stu3: 'lura'
  }

  res.render('index',{
    login,
    user,
    students
  })
})

app.get('/shop' ,(req,res)=>{
  res.render("shop")
})



// {
//   'firstName':'John',
//   'lastName':'Due'
// }
