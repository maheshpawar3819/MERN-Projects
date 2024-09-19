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

module.exports={home,createUser}