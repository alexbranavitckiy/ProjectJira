package pakScan.service;


import pakScan.entity.Task;

import java.util.List;
import java.util.Optional;

public interface TaskServiceBeck {
    Task addTask(Task task);

    Optional<Task> findById(Integer id);

    List<Task> getAll();

}
