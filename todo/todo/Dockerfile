# Use a base image with Java 21 installed
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the target directory to the container
COPY target/*.jar app.jar

# Expose the port your Spring Boot app is running on
EXPOSE 8080

# Run the JAR file when the container starts
CMD ["java", "-jar", "app.jar"]