package com.devn8.app.repositories;

import com.devn8.app.models.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends MongoRepository<Transaction, String> {//Aquí se pone el modelo a usar, este caso User, tipo String
}
