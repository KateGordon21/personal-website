package com.kgeportfolio.v1;

public class WorkExperienceNotFoundException extends RuntimeException {
    public WorkExperienceNotFoundException(String id) {
        super("Employee not found with id: " + id);
    }
}
