// repositories/useroRepository.js

const Topic = require('../models/topic');

class TopicRepository {
  async getAll() {
    return await Topic.find().exec()
  }

//   async getById(userId){
//     return await Topic.findById(userId).exec()
//   }

//   async create(userInfo) {
//     const user = new User(userInfo)
//     return await user.save()
//   }

//   async deleteById(useId){
//     return await User.findByIdAndDelete(useId)
//   }

//   async updateById(userId, userInfo){
//     return await User.findByIdAndUpdate(userId,userInfo)
//   }
}

module.exports = TopicRepository
