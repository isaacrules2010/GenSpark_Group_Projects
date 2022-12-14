package com.genspark.spring_app;

import com.genspark.spring_app.Config.RsaKeyProperties;
import com.genspark.spring_app.Dao.CharacterDao;
import com.genspark.spring_app.Entity.PlayerCharacter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;


@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
public class SpringAppApplication{

	public static void main(String[] args) {
		SpringApplication.run(SpringAppApplication.class, args);
	}
}
