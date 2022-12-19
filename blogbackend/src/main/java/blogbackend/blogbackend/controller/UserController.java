package blogbackend.blogbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import blogbackend.blogbackend.model.User;
import blogbackend.blogbackend.services.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

    private UserService userService;

    public UserController(@Autowired UserService userService){
        this.userService = userService;
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Integer id) {
        return userService.getUser(id);
    }

    // si no lleva id, agrega; si lleva id, pero no existe, agrega tambien
    @PostMapping("/user")
    public User newUser(@RequestBody User user) {
        return userService.save(user);
    }

    // si lleva id y si el id existe en la base, lo actualiza con nuevos datos
    @PutMapping("/user")
    public User updateUser(@RequestBody User user) {
        return userService.save(user);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.delete(id);
    }

    @RequestMapping("/allUser")
    public List<User> getAllUsers() {
        List<User> listaUser = userService.getAllUsers();
        return listaUser;
    }

}


