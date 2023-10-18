// services/topicService.js

const TopicRepository = require('../repositories/topicRepository');


class TopicService {
  constructor() {
    this.topicRepository = new TopicRepository()
   
  }

//   async createUser(userInfo, type){
//     userInfo = this.userFactory.createUser(userInfo, type)
//     return await this.userRepository.create(userInfo)
//   }

  async getAllTopics() {
    return await this.topicRepository.getAll()
  }

//   async getUserById(userId){
//     return await this.userRepository.getById(userId)
//   }

//   async deleteUserById(useId){
//     return await this.userRepository.deleteUserById(useId)
//   }

//   async updatePasswordById(userId, newpassword){
//     const updatedInfo = {
//         hashedPassword: newpassword
//     }
//     return await this.userRepository.updateById(userId, updatedInfo)
//   }

 
}

module.exports = TopicService;
