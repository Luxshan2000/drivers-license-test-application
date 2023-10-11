// repositories/useroRepository.js

const User = require('../models/user');

class UserRepository {
  async getAll() {
    return await User.find().exec()
  }

  async getById(userId){
    return await User.findById(userId).exec()
  }

  async create(userInfo) {
    const user = new User(userInfo)
    return await user.save()
  }

  async deleteById(useId){
    return await User.findByIdAndDelete(useId)
  }

  async updateById(userId, userInfo){
    return await User.findByIdAndUpdate(userId,userInfo)
  }
}

module.exports = UserRepository
