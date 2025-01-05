package com.webdevelopment.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "tables") 
public class TableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int number; 
    private int capacity; 
    private BigDecimal tablevalue;
    private int customers;
    private String status;

}
