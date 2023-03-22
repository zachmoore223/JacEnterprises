package wcci.jamz.restControllers;

import org.springframework.web.bind.annotation.*;
import wcci.jamz.entities.User;
import org.springframework.beans.factory.annotation.Autowired;


import wcci.jamz.repositories.UserRepository;

@RestController
public class UserController {
    final UserRepository userRepository;

    public UserController(@Autowired UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping("/api/users")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/api/users/{user_id}")
    public User getUser(@PathVariable final long user_id) {
        return userRepository.findById(user_id).get();
    }

    @PostMapping("/api/users")
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}
