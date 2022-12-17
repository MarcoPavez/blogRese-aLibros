package blogbackend.blogbackend.services;

import java.util.List;

import blogbackend.blogbackend.model.User;

public interface UserService {
    
    User getUser(Integer id);

    User save (User user);

    void delete (Integer id);

    List<User> getAllUsers();

}
