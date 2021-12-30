<template>
  <div class="hello">
   <form @submit.prevent="Edit">
    <img src="../assets/logo.png" width="50" height="50" style="background:#fff;"/>
     <input type="text" v-model="todoCon" placeholder="enter your action..."/>
     <button class="btn-add" @click="createPost()">ADD</button>
     <button class="btn-clear" 
     type="button" 
     @click.prevent="Clear()">
      DELETE ALL</button>
   </form>
    <ul>
      <li class="Items-Box" v-for="post in posts" :key="post._id">
        <input type="text" v-if="selected.id === post._id" v-model="editPost"/>
        <p v-else
        @click="post.done=!post.done" 
        :style="{'text-decoration': post.done ? 'line-through':''}">
        {{ post.description }}
        </p>
        <div class="con-icons">
          <a :class="selected.id === post._id ? 'close':'edit'" 
          @click.prevent="selected.id === post._id ? unEdit(post) : Edit(post.description,post._id)" 
          href="#">
          <fa :icon="selected.id === post._id ? 'window-close':'edit'"/></a>
          <a @click.prevent="Delete(post._id)" href="#" class="edit"><fa id="trash" icon="trash-alt"/></a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Post from '../api'
export default {
  name: 'AddPost',
  data(){
    return{
      posts:[],
      todoCon:'',
      editPost:'',
      edt:false,
      selected:{}
    }
  },
  async created(){
    this.posts = await Post.getPosts();
    },
  methods:{
    async  createPost(){
      await Post.insertPost(this.todoCon)
      this.posts = await Post.getPosts();
      this.todoCon = ''
    },

    async  Delete(id){
      this.posts = await Post.deletePost(id)
      this.posts = await Post.getPosts();
    },
    async  Edit(description,id){
      //this.selected = post
      this.selected.id = id
      this.editPost = description
      console.log(this.editPost)
      this.edt = true
      this.posts = await Post.updatePost(id,description)
      this.posts = await Post.getPosts();
    },
    unEdit:function(post){
      this.selected={}
      post.description = this.editPost
      this.edt = false
    },
    Clear:function(){
      this.posts = []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Montserrat:ital,wght@1,200&family=Roboto:ital,wght@0,400;0,900;1,500&display=swap');

.home{background:rgba(0, 0, 0, .5)}
form{width:50%;height:50px;display:flex;justify-content:center;align-items:center;
margin:0 auto;border-radius:30px;}
form input,button{padding:7px;border-radius:10px;margin-left:10px;}
form input {width:66.66%;height:50%;padding:10px;line-height:50px;font-size:30px;font-weight:700;}
form input::placeholder{color:#42b983;text-transform:lowercase;font-family: 'Montserrat', sans-serif;
}
input,button {
  border:none;outline:none;font-family: 'Lato', sans-serif;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display:flex;
  flex-wrap:wrap;
}
li {
  display: flex;
  margin:10px;
}
a {
  color: #42b983;
}
p {
  text-align:center;
  font-size:30px;
  font-family: 'Roboto', sans-serif;

}
.Items-Box {border:3px solid rgb(106, 223, 213);width:30.33%;display:flex;
flex-direction:column;border-radius:20px;padding:7px;}
.Items-Box input {display:flex;margin:10px;padding:7px;font-size:30px;
  font-family: 'Roboto', sans-serif;}

.con-icons {display:flex;justify-content:center;align-items:center;}
.con-icons a {margin:7px 0 0 7px;}
.edit {color:#5d8acd;font-size:30px;}
.close,#trash {color:#e9897a;font-size:30px;}
.btn-add {color:#5d8acd;}
.btn-clear {color:#e9897a;width:180px;}
.btn-add,.btn-clear{padding:10px;font-size:20px;font-family: 'Roboto', sans-serif;font-weight:700;cursor:pointer;}
</style>
