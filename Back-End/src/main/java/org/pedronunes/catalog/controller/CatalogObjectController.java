package org.pedronunes.catalog.controller;

import org.pedronunes.catalog.service.CatalogObjectService;
import org.pedronunes.catalog.CatalogObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/objects")
public class CatalogObjectController {

    @Autowired
    private CatalogObjectService catalogObjectServiceService;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<CatalogObject> findAll() {
        return catalogObjectServiceService.findAll();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<CatalogObject> findById(@PathVariable Long id) {
        return catalogObjectServiceService.findById(id);
    }
}
