package blogbackend.blogbackend.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import blogbackend.blogbackend.model.Post;

public interface PostRepository extends JpaRepository<Post,Long>{

    @Query(value="SELECT * FROM post WHERE fecha = ?1", nativeQuery = true)
    List<Post> postSeleccionado (Date fecha);

    Optional<Post> findByNombre(String nombre);
    
}
