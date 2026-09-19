package com.impulsotributario.backend.presentation.dto.auth;

public record LoginRequest(
        String email,
        String password
) {
}