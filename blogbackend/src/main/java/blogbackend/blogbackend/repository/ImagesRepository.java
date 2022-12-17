package blogbackend.blogbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import blogbackend.blogbackend.model.Images;

public interface ImagesRepository extends JpaRepository <Images,Integer>{
    
}
