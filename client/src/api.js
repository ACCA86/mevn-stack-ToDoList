import axios from 'axios';
const url = "http://localhost:3000/api/post"

class Post{
    // Get Post
    static getPosts(){
        return new Promise(async(resolve,reject)=>{
        try{
            const res = await axios.get(url);
            const data = res.data;
            resolve(
                data.map(post => ({
                ...post
            }))
            );
        } catch(err){
            reject(err)
        }
        })
    }
    // Create Post
    static insertPost(description){
        return axios.post(url,{
            description
        })
    }
     // Update Post
     static updatePost(id,description){
        return axios.patch(`${url}/${id}`,{
            description
        })
    }
    // Delete Post
    static deletePost(id){
        return axios.delete(`${url}/${id}`)
    }
}

export default Post;
// export default class Post{
//     //Get All Posts
//     static async getAllPost(){
//         const res = await axios.get(url)
//         return res.data
//     }
//     //get single Post by ID
//     static async getSinglePost(id){
//         const res = await axios.get(`${url}/${id}`)
//         return res.data
//     }

//     //Create Post
//     static async addPost(post){
//         const res = await axios.post(url,post)
//         return res.data
//     }

//     //Update Post By ID
//     static async updatePost(id,post){
//         const res = await axios.patch(`${url}/${id}`,post)
//         return res.data
//     }

//     //Delete Post By ID
//     static async deletePost(id){
//         const res = await axios.delete(`${url}/${id}`)
//         return res.data
//     }

// }