package com.example.pinggybackend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/post")
public class PostController {

    private final List<Map<String, String>> posts = new ArrayList<>();

    @PostMapping
    public Map<String, String> createPost(@RequestBody Map<String, String> postData) {
        posts.add(postData);
        System.out.println("Current Posts: " + posts); 
        return postData;
    }

    @GetMapping
    public List<Map<String, String>> getPosts() {
    	System.out.println("Returning Posts: " + posts);
        return posts;
    }
}
