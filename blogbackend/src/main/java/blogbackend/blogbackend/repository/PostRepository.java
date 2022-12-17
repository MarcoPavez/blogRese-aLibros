package blogbackend.blogbackend.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import blogbackend.blogbackend.model.Post;

public interface PostRepository extends JpaRepository<Post,Integer>{

    @Query(value="SELECT * FROM bbdd_blog.post WHERE fecha = ?1", nativeQuery = true)
    List<Post> postSeleccionado (Date fecha);
    
}
