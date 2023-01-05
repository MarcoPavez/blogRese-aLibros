package blogbackend.blogbackend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import blogbackend.blogbackend.model.User;

@Service
public interface UserService {
    
    User getUser(Integer id);

    User save (User user);

    void delete (Integer id);

    List<User> getAllUsers();

}
