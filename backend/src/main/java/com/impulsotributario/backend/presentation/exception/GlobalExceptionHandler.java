package com.impulsotributario.backend.presentation.exception;


import com.impulsotributario.backend.application.exception.user.InvalidCredentialsException;
import com.impulsotributario.backend.application.exception.user.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final String INVALID_CREDENTIALS = "Correo o contraseña incorrectos.";

    /**
     * Usuario inexistente y contraseña errónea responden igual (401 y el mismo mensaje),
     * para que nadie pueda averiguar qué correos están registrados.
     */
    @ExceptionHandler({InvalidCredentialsException.class, UserNotFoundException.class})
    public ResponseEntity<Map<String, String>> handleInvalidLogin(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", INVALID_CREDENTIALS));
    }
}