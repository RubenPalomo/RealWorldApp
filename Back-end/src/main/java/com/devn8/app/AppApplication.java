package com.devn8.app;

import com.devn8.app.models.Transaction;
import com.devn8.app.models.User;
import com.devn8.app.repositories.TransactionRepository;
import com.devn8.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppApplication implements CommandLineRunner {

	private final UserRepository userRepository;
	private final TransactionRepository transactionRepository;

	@Autowired
	public AppApplication(UserRepository userRepository, TransactionRepository transactionRepository){
		this.userRepository = userRepository;
		this.transactionRepository = transactionRepository;
	}


	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		if(userRepository.findAll().isEmpty()){ userRepository.save(new User("Dany", "Illo"));}
		for (User user : userRepository.findAll()){
			System.out.println(user);
		}

		if(transactionRepository.findAll().isEmpty()){ transactionRepository.save(new Transaction("Dany", "Pierre", 200.));}
		for (Transaction transaction : transactionRepository.findAll()){
			System.out.println(transaction);
		}
	}
}
