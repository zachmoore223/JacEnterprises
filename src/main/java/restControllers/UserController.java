package restControllers;

import entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.GetMapping;
import repositories.UserRepository;

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

    @GetMapping("/api/users/{user.id}")
    public User getUser(@PathVariable final long user_id) {
        return userRepository.findById(user_id).get();
    }

}
