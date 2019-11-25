package pakCkaner.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pakCkaner.entity.Status;
import pakCkaner.repository.StatusRepositoryBeck;
import pakCkaner.service.StatusServiceBeck;

@Service
public class StatusServiceImplBeck implements StatusServiceBeck {

    private StatusRepositoryBeck statusRepository;

    @Autowired
    public StatusServiceImplBeck(StatusRepositoryBeck statusRepository) {
        this.statusRepository = statusRepository;
    }

    @Override
    public Iterable<Status> getAll() {
        return statusRepository.findAll();
    }
}