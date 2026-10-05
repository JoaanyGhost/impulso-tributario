package com.impulsotributario.backend.domain.repository.services;

import com.impulsotributario.backend.domain.entity.services.Services;

import java.util.List;
import java.util.Optional;

public interface ServicesRepository {

    List<Services> findAll();
    Optional<Services> findById(String id);


}
