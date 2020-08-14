//primeiro arquivo aberto ao executar o servidor
import express from 'express';
import routes from './routes';
import cors from 'cors';




//console.log("Hello world");

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

//app.get('/products', (request,response) =>{
/*

    app.post('/', (request,response) =>{

        console.log(request.body);

        const products = [
            {
                name: "Faca",
                photo:"faca.png"
            },
            {
                name: "Panela",
                photo:"panela.png"
            }
        ];
        //console.log('acessou a rota');
        //return response.json("Hello World");
        return response.json(products);
        });*/
app.listen(3333);