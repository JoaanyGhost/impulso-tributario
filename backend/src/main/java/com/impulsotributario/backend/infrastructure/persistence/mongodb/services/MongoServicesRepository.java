package com.impulsotributario.backend.infrastructure.persistence.mongodb.services;

import com.impulsotributario.backend.domain.entity.services.Services;
import com.impulsotributario.backend.domain.repository.services.ServicesRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class MongoServicesRepository implements ServicesRepository {

    private final MongoServicesRepositorySpring repository;

    public MongoServicesRepository(
            MongoServicesRepositorySpring repository
    ) {
        this.repository = repository;
    }

    @Override
    public List<Services> findAll() {
        return repository.findAll()
                .stream()
                .filter(ServicesDocument::isActive)
                .map(this::toDomain)
                .toList();
    }

    @Override
    public Optional<Services> findById(String id) {
        if (!ObjectId.isValid(id)) {
            return Optional.empty();
        }

        return repository.findById(new ObjectId(id))
                .filter(ServicesDocument::isActive)
                .map(this::toDomain);
    }

    private Services toDomain(ServicesDocument document) {
        return new Services(
                document.getId() != null ? document.getId().toHexString() : null,
                document.getCode(),
                document.getName(),
                document.getDescription(),
                document.isActive(),
                document.getOrder()
        );
    }
}
