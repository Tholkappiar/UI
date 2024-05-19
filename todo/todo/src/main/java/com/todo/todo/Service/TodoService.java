package com.todo.todo.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.todo.todo.Model.TodoModel;
import com.todo.todo.Repository.TodoRepository;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<TodoModel> getAllTodos() {
        return todoRepository.findAll();
    }

    public Optional<TodoModel> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    public TodoModel createTodo(TodoModel todo) {
        return todoRepository.save(todo);
    }

    public TodoModel updateTodo(Long id, TodoModel todoDetails) {
        Optional<TodoModel> optionalTodo = todoRepository.findById(id);
        if (optionalTodo.isPresent()) {
            TodoModel todo = optionalTodo.get();
            todo.setTitle(todoDetails.getTitle());
            todo.setDescription(todoDetails.getDescription());
            todo.setCompleted(todoDetails.isCompleted());
            return todoRepository.save(todo);
        } else {
            return null;
        }
    }

    public void deleteTodoById(Long id) {
        todoRepository.deleteById(id);
    }
}
