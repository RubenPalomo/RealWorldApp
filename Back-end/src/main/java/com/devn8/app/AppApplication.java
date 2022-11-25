package com.devn8.app;

import com.devn8.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppApplication implements CommandLineRunner {

	private final UserRepository userRepository;

	/*private final ArrayList<TransactionClass> transactionClass = null;*/

	@Autowired
	public AppApplication(UserRepository userRepository){
		this.userRepository = userRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*if(userRepository.findAll().isEmpty()){ userRepository.save(new User("Dany", "Illo"));}
		for (User user : userRepository.findAll()){
			System.out.println(user);
		}*/
	}
}
