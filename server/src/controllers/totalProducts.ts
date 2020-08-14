import db from '../database/connection';
import {Request,Response} from 'express';



export default class totalProducts{

    async index (request:Request,response:Response){
        const totalProducts = await db('products').count('* as total');
        const {total} = totalProducts[0];
        return response.json({total});
    }


}