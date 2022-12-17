package blogbackend.blogbackend.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import blogbackend.blogbackend.model.PostCategories;
import blogbackend.blogbackend.repository.PostCategoriesRepository;

@Service
@Transactional
public class PostCategoriesService {
    
    private PostCategoriesRepository postCategoriesRepository;

    public PostCategoriesService(PostCategoriesRepository postCategoriesRepository){
        this.postCategoriesRepository = postCategoriesRepository;
    }

    public void savePostCategories(PostCategories postCategories){
        postCategoriesRepository.save(postCategories);
    }

    public void updatePostCategories(PostCategories postCategories){
        postCategoriesRepository.save(postCategories);
    }

    public List<PostCategories> findAllPostCategories(){
        return postCategoriesRepository.findAll();
    }

    public List<PostCategories> findAllCategories(String categoria){
        return postCategoriesRepository.categoriaSeleccionada(categoria);
    }

    public List<PostCategories> findAllSubCategories(String subcategoria){
        return postCategoriesRepository.categoriaSeleccionada(subcategoria);
    }

    public void deletePostCategories(int id){
        postCategoriesRepository.deleteById(id);
    }


}

