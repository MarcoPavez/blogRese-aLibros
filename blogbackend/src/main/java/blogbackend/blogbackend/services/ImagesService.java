package blogbackend.blogbackend.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import blogbackend.blogbackend.model.Images;
import blogbackend.blogbackend.repository.ImagesRepository;

@Service
@Transactional
public class ImagesService {
    
    private ImagesRepository imagesRepository;

    public ImagesService(ImagesRepository imagesRepository){
        this.imagesRepository = imagesRepository;
    }

    public void saveImage(Images images){
        imagesRepository.save(images);
    }

    public void updateImage(Images images){
        imagesRepository.save(images);
    }

    public List<Images> findAllImages(){
        return imagesRepository.findAll();
    }

    public void deleteImage(int id){
        imagesRepository.deleteById(id);
    }

}
