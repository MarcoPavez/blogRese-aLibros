package blogbackend.blogbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import blogbackend.blogbackend.model.PostCategories;

public interface PostCategoriesRepository extends JpaRepository<PostCategories,Integer>{

    @Query(value="SELECT * FROM bbdd_blog.postcategories WHERE categoria = ?1", nativeQuery=true)
    List<PostCategories> categoriaSeleccionada(String categoria);

    @Query(value="SELECT * FROM bbdd_blog.postcategories WHERE subcategoria = ?1", nativeQuery=true)
    List<PostCategories> subCategoriaSeleccionada(String subcategoria);
    
}
