package com.todo.todo.Config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;

// @Configuration
public class DataSourceConfig {

    @Value("${spring.datasource.host}")
    private String dbHost;

    @Value("${spring.datasource.port}")
    private int dbPort;

    @Value("${spring.datasource.dbname}")
    private String dbName;

    @Value("${spring.datasource.username}")
    private String dbUsername;

    @Value("${spring.datasource.password}")
    private String dbPassword;

    @Primary
    @Bean
    public DataSource dataSource() {
        String dbUrl = String.format("jdbc:mysql://%s:%d/%s", dbHost, dbPort, dbName);
        return DataSourceBuilder.create()
                .url(dbUrl)
                .username(dbUsername)
                .password(dbPassword)
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .build();
    }
}
