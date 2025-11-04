
package com.example.agriharvbackend.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class DownloadController {

    @GetMapping("/download")
    public ResponseEntity<Resource> downloadFile() throws IOException {
        Resource resource = new ClassPathResource("static/sample.txt");

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename="" + resource.getFilename() + """)
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
    }
}
