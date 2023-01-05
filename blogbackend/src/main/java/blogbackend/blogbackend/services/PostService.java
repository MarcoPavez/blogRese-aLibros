package blogbackend.blogbackend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import blogbackend.blogbackend.model.Post;

@Service
public interface PostService {
    
    Post getPost(Long id);

    Post save (Post user);

    void delete (Long id);

    List<Post> getAllPost();

    

}