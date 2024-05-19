package com.todo.todo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.todo.todo.Model.TodoModel;

@Repository
public interface TodoRepository extends JpaRepository<TodoModel, Long>{

    
}
