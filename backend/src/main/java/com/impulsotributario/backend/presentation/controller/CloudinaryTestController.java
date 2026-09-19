package com.impulsotributario.backend.presentation.controller;

import com.impulsotributario.backend.infrastructure.storage.CloudinaryStorageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/test/cloudinary")
public class CloudinaryTestController {

    private final CloudinaryStorageService cloudinaryStorageService;

    public CloudinaryTestController(
            CloudinaryStorageService cloudinaryStorageService
    ) {
        this.cloudinaryStorageService = cloudinaryStorageService;
    }

}