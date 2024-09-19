const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient();

const home=async (req,res) => {
    try {
        const users=await prisma.user.findMany()
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({msg:"something wrong internal server error"});
    }
}

//create user

const createUser=async (req,res) => {
    try {
        const {name,email,password}=req.body;

        const exist=await prisma.user.findUnique({
            where:{email:email}
        });
        if(exist){
            res.status(400).json({msg:`user is already exist`});
        }

        const newUser=await prisma.user.create({
            data:{name,email,password}
        });
        
        res.status(200).json({msg:'user create succesfully',user:newUser});
    } catch (error) {
        console.log(`someting wrong not able to create user`);
    }
}

//read user by id

const getUser=async (req,res) => {
    try {
        const {id}=req.params;
        const user=await prisma.user.findUnique({
            where:{id:parseInt(id)}
        })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({msg:"someting wrong cannot able to find user by id"});
    }
}

//update user

const updateUser=async (req,res)=> {
    try {
        const {id}=req.params;
        const {name,email}=req.body;
        const updateuser=await prisma.user.update({
            where:{id:parseInt(id)},
            data:{name,email},
            select:{
                id:true,
                name:true,
                email:true,
                password:false
            }
        })
        res.status(200).json({msg:`user update successfully`,updateduser:updateuser});
    } catch (error) {
        res.status(500).json({msg:`someting wrong unable to update user`});
    }
}

module.exports={home,createUser,getUser,updateUser}