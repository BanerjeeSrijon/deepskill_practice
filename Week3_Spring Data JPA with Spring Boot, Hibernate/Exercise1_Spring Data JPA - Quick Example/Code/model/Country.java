package com.cognizant.ormlearn.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity                      // Tells Hibernate this is an entity mapped to a table
@Table(name = "country")     // Maps to the "country" table in MySQL
public class Country {

    @Id                     // Primary key of the table
    @Column(name = "co_code") 
    private String code;

    @Column(name = "co_name")
    private String name;

    // Standard Java Bean methods
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
