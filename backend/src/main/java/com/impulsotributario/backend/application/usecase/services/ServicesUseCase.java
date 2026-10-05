package com.impulsotributario.backend.application.usecase.services;

import com.impulsotributario.backend.domain.entity.services.Services;
import com.impulsotributario.backend.domain.repository.services.ServicesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicesUseCase {

    private final ServicesRepository servicesRepository;

    public ServicesUseCase(
            ServicesRepository servicesRepository
    ) {
        this.servicesRepository = servicesRepository;
    }

    public List<Services> execute() {
        return servicesRepository.findAll();
    }
}