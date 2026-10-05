package com.impulsotributario.backend.infrastructure.persistence.mongodb.users;

import com.impulsotributario.backend.domain.entity.user.User;
import com.impulsotributario.backend.domain.repository.user.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class MongoUserRepository implements UserRepository {

    private final MongoUserRepositorySpring repository;

    public MongoUserRepository(
            MongoUserRepositorySpring repository
    ) {
        this.repository = repository;
    }

    @Override
    public Optional<User> findByEmail(String email) {

        return repository.findByEmail(email)
                .map(document -> new User(
                        document.getId().toString(),
                        document.getEmail(),
                        document.getPassword(),
                        document.getRole(),
                        document.getFirstName(),
                        document.getLastName(),
                        document.isActive()
                ));
    }
}