package blogbackend.blogbackend.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import blogbackend.blogbackend.model.Post;
import blogbackend.blogbackend.services.PostService;

@RestController
@CrossOrigin("*")
public class PostController {
    
    private PostService postService;

    public PostController(@Autowired PostService postService){
        this.postService = postService;
    }

    @PostMapping("/post/save")
    public void savePost(@RequestBody Post post){
        postService.savePost(post);
    }

    @PutMapping("/post/update")
    public void updatePost(@RequestBody Post post){
        postService.updatePost(post);
    }

    @GetMapping("/post/findAll")
    public List<Post> allPost(){
        return postService.findAllPost();
    }

    @GetMapping("/post/findDate/{fecha}")
    public List<Post> datePost(@PathVariable Date fecha){
        return postService.findDatePost(fecha);
    }

    @DeleteMapping("/post/deletePost/{id}")
    public void eliminarPost(@PathVariable Integer id){
        postService.deletePost(id);
    }

}
