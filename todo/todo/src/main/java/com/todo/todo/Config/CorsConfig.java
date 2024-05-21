package com.todo.todo.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Allow CORS for all paths
                        .allowedOrigins("http://172.30.1.171:5173") // Allow specific domain
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specific HTTP methods
                        .allowedHeaders("*") // Allow all headers
                        .allowCredentials(false); // Allow credentials
            }
        };
    }
}
