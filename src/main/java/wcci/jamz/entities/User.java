package wcci.jamz.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name="MyUsers")
public class User {

    @Id
    @GeneratedValue
    private long user_id;
    private String userName;

    public User(String userName) {
        this.userName = userName;
    }

    protected User() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserId(long user_id) {
        this.user_id = user_id;
    }

    public long getUserId() {
        return user_id;
    }

}
