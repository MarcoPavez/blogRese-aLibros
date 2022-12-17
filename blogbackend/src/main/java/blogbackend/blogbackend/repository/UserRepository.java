package blogbackend.blogbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import blogbackend.blogbackend.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{

    @Query(value="SELECT * FROM bbdd_blog.user WHERE id = ?1", nativeQuery=true)
    List<User> usuarioSeleccionado (int id);

    @Query(value="SELECT * FROM bbdd_blog.user WHERE paisResidencia = ?1", nativeQuery=true)
    List<User> paisUsuarioSeleccionado (String paisResidencia);
    
}
