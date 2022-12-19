package blogbackend.blogbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import blogbackend.blogbackend.model.Images;
import blogbackend.blogbackend.services.ImagesService;

@RestController
@CrossOrigin("*")
public class ImagesController {

    private ImagesService imagesService;

    public ImagesController(@Autowired ImagesService imagesService){
        this.imagesService = imagesService;
    }

    @PostMapping("/images/save")
    public void saveImages(@RequestBody Images images){
        imagesService.saveImage(images);
    }

    @PutMapping("/images/update")
    public void updateImages(@RequestBody Images images){
        imagesService.updateImage(images);
    }

    @GetMapping("/images/findAll")
    public List<Images> allImages(){
        return imagesService.findAllImages();
    }

    @DeleteMapping("/images/deletePost/{id}")
    public void eliminarImage(@PathVariable Integer id){
        imagesService.deleteImage(id);
    }

}
