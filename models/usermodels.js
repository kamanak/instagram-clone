const mongoose =require("mongoose");
const { stringify } = require( "querystring" );
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/ductxghm2/image/upload/v1596198037/24-248253_user-profile-default-image-png-clipart-png-download_lx5jy4.png"

    },
    followers:[{
        type:ObjectId,
        ref:"User"
    }],
    following:[{
        type:ObjectId,
        ref:"User"
    }],

})
mongoose.model("User",userSchema)