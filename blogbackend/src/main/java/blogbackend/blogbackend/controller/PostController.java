package blogbackend.blogbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import blogbackend.blogbackend.model.Post;
import blogbackend.blogbackend.services.PostService;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@CrossOrigin("*")

public class PostController {

    private PostService postService;

    public PostController(@Autowired PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/post")
    public Post newPost(@RequestBody Post post) {
        return postService.save(post);
    }

    @GetMapping("/post/{id}")
    public Post getPost(@PathVariable Long id) {
        return postService.getPost(id);
    }

    @PutMapping("/post")
    public Post updatePost(@RequestBody Post post) {
        return postService.save(post);
    }

    @RequestMapping("/allPost")
    public List<Post> allPost() {
        List<Post> listaPost = postService.getAllPost();
        return listaPost;
    }

    @DeleteMapping("/deletePost/{id}")
    public void eliminarPost(@PathVariable Long id) {
        postService.delete(id);
    }




}
