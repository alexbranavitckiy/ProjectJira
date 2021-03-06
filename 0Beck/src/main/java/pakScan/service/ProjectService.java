package pakScan.service;

import pakScan.entity.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectService {
    Project addProject(Project project);

    Optional<Project> findById(Integer id);


    List<Project> getAll();


    List<Project> getAllName(String name);


    void deleteProject(Integer Integer);
}
