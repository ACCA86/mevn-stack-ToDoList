const {Schema,model} = require('mongoose')

const postSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default:Date.now
    },
    done:{
        type:Boolean,
        default:false
    }
})



module.exports = model('Post',postSchema)