package scanpackage.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import scanpackage.models.ProjectModel;
import scanpackage.service.ProjectService;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Value("${backend.server.url}")
    private String url;

    // System.out.println("работает флапи контроллер");
    @Override
    public List<ProjectModel> getAll() {
        System.out.println("работает флапи сервис");
        RestTemplate restTemplate = new RestTemplate();
        ProjectModel[] projectModels = restTemplate.getForObject(url + "/api/project/all", ProjectModel[].class);
        return projectModels == null ? Collections.emptyList() : Arrays.asList(projectModels);
    }

    @Override
    public ProjectModel findById(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url + "/api/project/" + id, ProjectModel.class);
    }


    @Override
    public ProjectModel save(ProjectModel project) {


        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(url+"/api/project", project, ProjectModel.class).getBody();

    }
}