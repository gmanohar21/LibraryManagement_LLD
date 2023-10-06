package com.mn.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class LibraryManagementSecurityConfig  {
	
	@Bean
	  public SecurityFilterChain publicSecurityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(auth->auth.requestMatchers("/user/**").permitAll());
        
        return http.build();
    }

}
