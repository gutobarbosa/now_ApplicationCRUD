import knex from 'knex';
import path from 'path'; // esse import nos ajuda a navegar pelas pastas

const db = knex({
//Aqui eu posso colocar qualquer banco que eu quiser, mySql, postgree e etc.
client: 'sqlite3',
connection:{
    filename: path.resolve(__dirname,'database.sqlite') //__dirname sempre que tiver isso num parametro quer dizer que ele vai voltar no diretorio do arquivo no qual estamos escrevendo o codigo, e nesse caso ele vai adicionar um arquivo nesse diretorio, junto com resolve não precisamos colocar as / para falar do diretorio
},

useNullAsDefault: true,

});


export default db;