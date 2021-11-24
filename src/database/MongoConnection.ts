import {Mongoose,connect} from 'mongoose'
import {config} from '../config/Constants'

export class MongoConnection{
  public async connect(): Promise<void>{
    try{
      await connect(config.MONGO_CONNECTION)
      console.log("Database connected")
    }catch(err){
      console.log(err.message)
      process.exit(1)
    }
  }
}
