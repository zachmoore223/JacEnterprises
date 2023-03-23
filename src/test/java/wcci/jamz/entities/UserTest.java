package wcci.jamz.entities;

import org.junit.jupiter.api.Test;
import wcci.jamz.entities.User;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {
    @Test
    public void testGetName() {
        User test = new User("TestName");
        assertEquals("TestName", test.getUserName());
    }

}