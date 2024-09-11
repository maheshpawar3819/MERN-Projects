class PUBLIC_DATA{
        static port=process.env.PORT || 4000
        static mongoUri=process.env.MONGO_URI || `mongodb://localhost:/inventory`
}

module.exports={PUBLIC_DATA};