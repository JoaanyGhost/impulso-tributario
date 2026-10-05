package com.impulsotributario.backend.infrastructure.persistence.mongodb.services;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoServicesRepositorySpring
        extends MongoRepository<ServicesDocument, ObjectId> {

}
