package com.todo.todo.Service;

import java.util.Optional;

import java.util.List;

import com.todo.todo.Model.Todo;

import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.todo.todo.Repository.TodoRepository;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    public Todo saveOrUpdate(Todo todo) {
        return todoRepository.save(todo);
    }

    public void deleteTodoById(Long id) {
        todoRepository.deleteById(id);
    }
}
