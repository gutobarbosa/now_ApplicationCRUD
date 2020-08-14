import db from '../database/connection';
import {Request,Response} from 'express';



export default class ProductsController{

    async exclud(request:Request, response:Response){
        const {
            id,
            product,
            photo,
            status,
        
        } = request.body;
       const tre = await db.transaction();

      try {
     
          await tre ('products').where('id', request.params.id).delete();

          await tre.commit();
              return response.status(201).send();
      } catch (err) {
          await tre.rollback();
          console.log(err);
          return response.status(400).json({
              error: ' unexpected error while creating new class'
          })
      }
    }

    async change(request:Request, response:Response){
        const {
            id,
            product,
            photo,
            status,
        
        } = request.body;
       const trs = await db.transaction();

      try {
  
          await trs ('products').where('id', request.params.id).update({
              product,
              photo,
              status,
              id
          });
          await trs.commit();
              return response.status(201).send();
      } catch (err) {
          await trs.rollback();
          console.log(err);
          return response.status(400).json({
              error: ' unexpected error while creating new class'
          })
      }
    }

    async index(request:Request, response:Response){
      // const filters = request.query;

        const allProducts = await db('products')
       // .where("products")

        return response.json(allProducts);
    }

    async cont (request:Request,response:Response){
        const totalProducts = await db('products').count('* as total');
        const {total} = totalProducts[0];
        return response.json({total});
    }

    async create(request:Request,response:Response) {
        const {
            id,
            product,
            photo,
            status,
            name,
            permission
        
        } = request.body;

      
    
        const trx = await db.transaction();
        // dessa comando que ia surgir o ID do usuario,
        // é nesse momento que devemos pegar o ID do usuario para vincular com o produto
        // porém o insert foi feito para inserir mais de um cadastro por vez entao ele sempre ira retornar uma lista 
        // então nesse caso é necessario fazer o seguinte: repare abaixo a diferença entre users e products
        try {
            const insertUsersIds = await trx ('users').insert({
                name,
                permission
            });
            
            // aqui pegamos o primeiro ID da lista que foi retornada
            const users_id = insertUsersIds[0];
            
            await trx ('products').insert({
                product,
                photo,
                status,
                users_id
            });
            await trx.commit();
                return response.status(201).send();
        } catch (err) {
            await trx.rollback();
            console.log(err);
            return response.status(400).json({
                error: ' unexpected error while creating new class'
            })
        }
    }
    

}