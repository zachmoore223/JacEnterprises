package wcci.jamz.repositories;

import wcci.jamz.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
