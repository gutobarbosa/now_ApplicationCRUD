
import Knex from 'knex';

export async function up (knex: Knex) {
	return knex.schema.createTable('products', table =>{
	//é aqui que criamos os campos da tabela da nossa aplicação de produtos
	table.increments('id').primary();
	table.string('product').notNullable();
    table.string('photo').notNullable();
	table.string('status').notNullable();
	
	
	table.integer('users_id')
    .notNullable()
    .references('id')
    .inTable('users')  //para vincular um o produto a um ID de usuario
	.onUpdate('CASCADE') // deve ser usado em 99% das vezes para que qualquer alteração daquele ID o restante seja replicado.
	.onDelete('CASCADE') ;// Se esse usuario for deletado, tudo que estiver atrelado a ele é deletado tbm
	table.timestamp('created_at')
	.defaultTo(knex.raw('CURRENT_TIMESTAMP'))
	.notNullable();
});

	
}
export async function down (knex: Knex){
	return knex.schema.dropTable('products');
}

// ambos tem que ser escrito desta maneira, pois os metodos up and down tem funções diferentes.

//o metodo UP tem a função de: pega as funções que a gente quer realizar no banco de dados.
//o metodo down: serve pra caso de problema através dele consigamos voltar ou desfazer oque foi feito.
