const router = require('express').Router({mergeParams:true});
const adminController = require('../controllers/adminController');


router.post('/', async (req,res) => {

    try{
        console.log("IEEEEEEEE",req.body)
        res.json(await adminController.createAdmin(req.body));
    }catch(error){
        res.status(500).json({
          error: 'error',
          message: 'error'
        });
    };
});

router.post('/login',async (req,res) => {

    try {
        const {email,password} = req.body;
        const jwt = await adminController.login(email,password);
        const token = jwt.token
        const admin = jwt.admin 
        res.json({token, admin})
    } catch (error) {
        return res.status(401).json({
        message: error.message
        });
    };
});

router.get('/logout/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const user =  await adminController.logOut(id);
        const status = `Eat a lot of sugar we want see you as soon as possible, ${user.firstName}`;
        
        res.json({ status, id, date:new Date }); 
        
    }catch (error) {
        console.log(error)
    };
});

module.exports = router;