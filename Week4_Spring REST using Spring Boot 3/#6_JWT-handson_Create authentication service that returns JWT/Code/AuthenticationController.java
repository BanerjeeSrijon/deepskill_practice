package com.cognizant.spring_learn.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(401).body("Missing or invalid Authorization header.");
        }

        // Decode base64 username:password
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded);

        // Split username and password
        String[] values = credentials.split(":", 2);
        String username = values[0];
        String password = values[1];

        if (username.equals("user") && password.equals("pwd")) {
            // Return fake JWT token for now
            String fakeJwt = "eyJhbGciOiJIUzI1NiJ9.fake.payload.signature";
            return ResponseEntity.ok().body("{\"token\":\"" + fakeJwt + "\"}");
        } else {
            return ResponseEntity.status(403).body("Invalid username or password");
        }
    }
}
