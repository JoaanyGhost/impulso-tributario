package com.impulsotributario.backend.presentation.controller;

import com.impulsotributario.backend.application.usecase.services.ServicesUseCase;
import com.impulsotributario.backend.domain.entity.services.Services;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ServicesController {

    private final ServicesUseCase servicesUseCase;

    public ServicesController(
            ServicesUseCase servicesUseCase
    ) {
        this.servicesUseCase = servicesUseCase;
    }

    @GetMapping
    public ResponseEntity<List<Services>> findAll() {
        return ResponseEntity.ok(servicesUseCase.execute());
    }
}
