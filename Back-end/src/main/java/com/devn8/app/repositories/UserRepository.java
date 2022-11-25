package com.devn8.app.repositories;

import com.devn8.app.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {//Aquí se pone el modelo a usar, este caso User, tipo String
}
