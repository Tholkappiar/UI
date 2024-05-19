package com.todo.todo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.todo.todo.Model.TodoModel;
import com.todo.todo.Service.TodoService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<TodoModel> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("/{id}")
    public Optional<TodoModel> getTodoById(@PathVariable Long id) {
        return todoService.getTodoById(id);
    }

    @PostMapping
    public TodoModel createTodo(@RequestBody TodoModel todo) {
        return todoService.createTodo(todo);
    }

    @PutMapping("/{id}")
    public TodoModel updateTodo(@PathVariable Long id, @RequestBody TodoModel todoDetails) {
        return todoService.updateTodo(id, todoDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable Long id) {
        todoService.deleteTodoById(id);
    }
}
