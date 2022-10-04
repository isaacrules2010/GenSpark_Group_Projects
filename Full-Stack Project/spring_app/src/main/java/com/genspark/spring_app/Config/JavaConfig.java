package com.genspark.spring_app.Config;
import com.genspark.spring_app.Entity.MyUserDetails;
import com.genspark.spring_app.Entity.User;
import com.genspark.spring_app.Service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableWebSecurity
public class JavaConfig {

    @Autowired
    MyUserDetailsService myUserDetailsService;

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        return http
                .csrf().disable()
                .authorizeRequests(auth -> {
                    auth.antMatchers("/users").permitAll();
                    auth.antMatchers("/user").hasRole("USER");
                    auth.antMatchers("/admin").hasRole("ADMIN");
                })
                .userDetailsService(myUserDetailsService)
                .httpBasic()
                .and()
                .logout(LogoutConfigurer::permitAll)
                .build();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return myUserDetailsService.getEncoder();
    }
}
