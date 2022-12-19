package blogbackend.blogbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import blogbackend.blogbackend.model.PostCategories;
import blogbackend.blogbackend.services.PostCategoriesService;

@RestController
@CrossOrigin("*")
public class PostCategoriesController {
    
    private PostCategoriesService postCategoriesService;

    public PostCategoriesController(@Autowired PostCategoriesService postCategoriesService){
        this.postCategoriesService = postCategoriesService;
    }

    @PostMapping("/postCategories/save")
    public void savePostCategories(@RequestBody PostCategories postCategories){
        postCategoriesService.savePostCategories(postCategories);
    }

    @PutMapping("/postCategories/update")
    public void updatePost(@RequestBody PostCategories postCategories){
        postCategoriesService.updatePostCategories(postCategories);
    }

    @GetMapping("/postCategories/findAll")
    public List<PostCategories> allPost(){
        return postCategoriesService.findAllPostCategories();
    }

    @GetMapping("/postCategories/findDate/{categoria}")
    public List<PostCategories> findPostByCategories(@PathVariable String categoria){
        return postCategoriesService.findAllCategories(categoria);
    }

    @GetMapping("/postCategories/findDate/{subcategoria}")
    public List<PostCategories> findPostBySubCategories(@PathVariable String subcategoria){
        return postCategoriesService.findAllSubCategories(subcategoria);
    }

    @DeleteMapping("/postCategories/deletePost/{id}")
    public void eliminarPostCategories(@PathVariable Integer id){
        postCategoriesService.deletePostCategories(id);
    }

}
