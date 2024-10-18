import express from 'express';
import path from 'path';
import commonRoute from './routes/commonRoute';

const app = express();
const PORT = 8080;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/',commonRoute);



app.listen(PORT,()=>{
  
  console.log(`Running on port number ${PORT}`);
  
})
