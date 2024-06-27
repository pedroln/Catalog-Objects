package org.pedronunes.catalog;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class CatalogObject {

    private @Id @GeneratedValue long id;
    @Setter
    @Getter
    private long objectId;
    @Setter
    @Getter
    private String image;
    @Setter
    @Getter
    private String description;
    @Setter
    @Getter
    private float price;
    @Setter
    @Getter
    private float measure;
    @Setter
    @Getter
    private float weight;



    public CatalogObject() {
    }

    CatalogObject(long objectId, String image, String description, float price, float measure, float weight) {

        this.objectId = objectId;
        this.image = image;
        this.description = description;
        this.price = price;
        this.measure = measure;
        this.weight = weight;

    }


}
