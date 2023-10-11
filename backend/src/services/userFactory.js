class UserFactory {
    createUser(userInfo, type){
        if(type === "admin"){
            return {...userInfo, isAdmin:true, isUpgraded: true}
        }
        else{
            return {...userInfo, isAdmin: false}
        }
    }
}

module.exports = UserFactory