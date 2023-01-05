package blogbackend.blogbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import blogbackend.blogbackend.model.Post;
import blogbackend.blogbackend.services.PostService;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.io.IOException;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.multipart.MultipartFile;

import blogbackend.blogbackend.services.PostServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/image")
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

    @Autowired
	private PostServiceImpl postServiceImpl;

	@PostMapping
	public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file) throws IOException {
		String uploadImage = postServiceImpl.uploadImage(file);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadImage);
	}

	@GetMapping("/{nombre}")
	public ResponseEntity<?> downloadImage(@PathVariable String nombre){
		byte[] imageData=postServiceImpl.downloadImage(nombre);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/jpg"))
				.body(imageData);

	}


}
