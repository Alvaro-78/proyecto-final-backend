const {Admin} = require('../models')
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const secretWord = process.env.JWT_SECRET || 'admin'

class AdminController {

    async createAdmin(admin) {

        let adminEmail = admin.email
        console.log("WUAAAAAA")
        console.log("Soy el adminController",Admin)
        let adminExist = await Admin.findOne({where:{email:adminEmail}})
        if(adminExist) {
        return;
        };
        admin.password = await bcrypt.hash(admin.password, 5)
        return Admin.create(admin)
    };

    async login(email,password) {
  
        const admin =  await Admin.findOne({where:{email}});
      
        if(!admin){
            throw new Error('Admin does not exist')
        };

        if(!await bcrypt.compare( password, admin.password )) {
            throw new Error('Wrong password')
        };

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date,
        };

        let token = jwt.sign(payload, secretWord);
        return {
            token,
            admin
        }
    };   

    async logOut(id) {
        return Admin.findByPk(id);
      };
    
      // Update Admin
      async updateAdmin(admin, id) {
        return Admin.update(admin,{where:{id}})
      };
    
      // Delete Admin
      async deleteAdmin(id) {
        return Admin.destroy({where:{id}})
      };



}

let adminController = new AdminController();

module.exports = adminController;