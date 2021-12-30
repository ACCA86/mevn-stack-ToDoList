const Post = require('../models/post')
module.exports = class API{
    //Fetch all posts
    static async fetchAllPost(req,res){
        // res.send('Hello Api...')
        try{
            const posts = await Post.find()
            res.status(200).json(posts)
        }catch(err){
            res.status(404).json({msg:err.msg})
        }
    }

    //Get  post By ID
    static async fetchSinglePost(req,res){
        const id = req.params.id
        try{
            const posts = await Post.findById(id)
            res.status(200).json(posts)
        }catch(err){
            res.status(404).json({msg:err.msg})
        }
    }


    //Create  post By ID
    static async createPost(req,res){
        const post = req.body
        try{
            const posts = await Post.create(post)
            res.status(201).json({message:"Post Created Succssfully.."})
        }catch(err){
            res.status(404).json({msg:err.msg})
        }
    }

    //Update  Post
    static async updatePost(req,res){
        const id = req.params.id
        try{
            const posts = await Post.findByIdAndUpdate(id,req.body)
            res.status(201).json(posts)
        }catch(err){
            res.status(404).json({msg:err.msg})
        }
    }

    //Delete  Post
    static async deletePost(req,res){
        const id = req.params.id
        try{
            const posts = await Post.findByIdAndDelete(id)
            res.status(201).json({message:"Post Deleted successfully..."})
        }catch(err){
            res.status(404).json({msg:err.msg})
        }
    }
}