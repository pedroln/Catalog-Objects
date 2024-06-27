package org.pedronunes.catalog.service;

import org.pedronunes.catalog.CatalogObject;
import org.pedronunes.catalog.CatalogObjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CatalogObjectService {

    @Autowired
    private CatalogObjectRepository catalogObjectRepository;

    public List<CatalogObject> findAll() {
        return catalogObjectRepository.findAll();
    }

    public Optional<CatalogObject> findById(Long id) {
        return catalogObjectRepository.findById(id);
    }
}
