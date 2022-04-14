package com.doubletex.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class CatsAPI {
    @GetMapping("cats")
    public String getCats(
            @RequestParam("breed") String breed){
        return "There was a cat named Mittens who was " + breed;
    }
}
