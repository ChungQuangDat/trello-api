/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */


import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

let trelloDatabaseInstance = null


//Khởi tạo một đối tượng mongoClientInstance để connect tới MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

//Kết nối tới Database
export const CONNECT_DB = async () => {
  //Gọi kết nối tới mongoDB AtLas với URI đã khai báo trong thân của mongoClientInstance
  await mongoClientInstance.connect()
  //Kết nối thành công thì lấy Database theo tên và gán ngược nó lại vào biến trelloDatabaseInstance ở trên
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}


//Đóng kết nối tới Database khi cần
export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

//GET_DB(không async) này có nhiệm vụ export ra cái trelloDatabaseInstance sau khi đã connect thành công tới MongoDB để
//chúng ta sử dụng nhiều nơi trong code
//Lưu ý: Ta gọi GET_DB khi và chỉ khi đã kết nối thành công tới MongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!')
  return trelloDatabaseInstance
}

