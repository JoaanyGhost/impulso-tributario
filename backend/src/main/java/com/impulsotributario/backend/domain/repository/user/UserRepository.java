package com.impulsotributario.backend.domain.repository.user;

import com.impulsotributario.backend.domain.entity.user.User;

import java.util.Optional;

public interface UserRepository {

    Optional<User> findByEmail(String email);
}