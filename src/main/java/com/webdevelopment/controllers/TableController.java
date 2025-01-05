package com.webdevelopment.controllers;

import com.webdevelopment.entities.TableEntity;
import com.webdevelopment.services.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tables")
public class TableController {

    @Autowired
    private TableService tableService;

    @GetMapping
    public ResponseEntity<List<TableEntity>> getAllTables() {
        List<TableEntity> tables = tableService.getAllTables();
        
        return ResponseEntity.ok(tables);
    }
    
 
}
