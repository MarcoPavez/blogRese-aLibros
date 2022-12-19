package blogbackend.blogbackend.services;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import blogbackend.blogbackend.model.Post;
import blogbackend.blogbackend.repository.PostRepository;


@Service
@Transactional
public class PostService {
    
    private PostRepository postRepository;

    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    public void savePost(Post post){
        postRepository.save(post);
    }

    public void updatePost(Post post){
        postRepository.save(post);
    }

    public List<Post> findAllPost(){
        return postRepository.findAll();
    }

    public List<Post> findDatePost(Date fecha){
        return postRepository.postSeleccionado(fecha);
    }

    public void deletePost(int id){
        postRepository.deleteById(id);
    }

}
