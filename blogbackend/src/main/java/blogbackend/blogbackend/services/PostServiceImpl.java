package blogbackend.blogbackend.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import blogbackend.blogbackend.model.Post;
import blogbackend.blogbackend.repository.PostRepository;
import blogbackend.blogbackend.util.ImageUtil;

@Service
@Transactional
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public Post getPost(Long id) {
        Optional<Post> posts = postRepository.findById(id);
        return posts.orElse(null);
    }

    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }

    /*
     * @Override
     * public void updatePost(Post post){
     * postRepository.save(post);
     * }
     */

    @Override
    public List<Post> getAllPost() {
        return postRepository.findAll();
    }

    /*
     * @Override
     * public List<Post> findDatePost(Date fecha){
     * return postRepository.postSeleccionado(fecha);
     * }
     */

    @Override
    public void delete(Long id) {
        postRepository.deleteById(id);
    }

    public String uploadImage(MultipartFile file) throws IOException {

        Post imageData = postRepository.save(Post.builder()
                .nombre(file.getOriginalFilename())
                .tipo(file.getContentType())
                .imageData(ImageUtil.compressImage(file.getBytes())).build());
        if (imageData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
    }

    public byte[] downloadImage(String fileName){
        Optional<Post> dbImageData = postRepository.findByNombre(fileName);
        byte[] images=ImageUtil.decompressImage(dbImageData.get().getImageData());
        return images;
    }

}
