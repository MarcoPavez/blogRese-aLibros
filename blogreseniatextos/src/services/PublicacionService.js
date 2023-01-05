import axios from 'axios';

import {url} from './Config';

const addPost = async(post)=>{
    const res = await axios.post(url + "/post", post);
    console.log(res);
    return res.data;
};

const getPost = async(id)=>{
    const res = await axios.get(url + '/post/' + id);
    console.log(res);
    return res.data;
};

const editPost = async(post) => {
    const res = await axios.put(url + "/post", post);
    console.log(res);
    return res.data;
};

const deletePost = async(id) => {
    const res = await axios.delete(url + "/deletePost/" + id);
    console.log(res);
    return res.data;
};

const getAllPosts = async()=>{
    const res = await axios.get(url + "/allPost");
    console.log(res)
    return res.data;
}



export {addPost,editPost,deletePost,getPost,getAllPosts}