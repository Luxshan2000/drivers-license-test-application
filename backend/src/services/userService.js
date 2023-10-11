// services/userService.js

const UserRepository = require('../repositories/userRepository');
const UserFactory = require('../services/userFactory')

class UserService {
  constructor() {
    this.userRepository = new UserRepository()
    this.userFactory = new UserFactory()
  }

  async createUser(userInfo, type){
    userInfo = this.userFactory.createUser(userInfo, type)
    return await this.userRepository.create(userInfo)
  }

  async getAllUsers() {
    return await this.userRepository.getAll()
  }

  async getUserById(userId){
    return await this.userRepository.getById(userId)
  }

  async deleteUserById(useId){
    return await this.userRepository.deleteUserById(useId)
  }

  async updatePasswordById(userId, newpassword){
    const updatedInfo = {
        hashedPassword: newpassword
    }
    return await this.userRepository.updateById(userId, updatedInfo)
  }

 
}

module.exports = UserService;
