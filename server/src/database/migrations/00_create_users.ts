
import Knex from 'knex';

export async function up (knex: Knex) {
	return knex.schema.createTable('users', table =>{
	//é aqui que criamos os campos da tabela da nossa aplicação de produtos
	table.increments('id').primary();
	table.string('name').notNullable();
    table.string('permission').notNullable();


})
}

export async function down (knex: Knex){
	return knex.schema.dropTable('users');
}

// ambos tem que ser escrito desta maneira, pois os metodos up and down tem funções diferentes.

//o metodo UP tem a função de: pega as funções que a gente quer realizar no banco de dados.
//o metodo down: serve pra caso de problema através dele consigamos voltar ou desfazer oque foi feito.
