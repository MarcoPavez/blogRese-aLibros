package blogbackend.blogbackend.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import blogbackend.blogbackend.model.User;
import blogbackend.blogbackend.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User getUser(Integer id){
        Optional <User> users = userRepository.findById(id);
        return users.orElse(null);
    }

    @Override
    public User save(User user){
        return userRepository.save(user); //save hace un inser into user (columnas)(values)
    }

    @Override
    public void delete(Integer id){
        //delete from user where id = id
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
