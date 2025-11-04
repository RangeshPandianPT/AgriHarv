package com.example.agriharvbackend.model;

import javax.persistence.*;

@Entity
public class SoilAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String soilType;
    private String recommendedCrop;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSoilType() {
        return soilType;
    }

    public void setSoilType(String soilType) {
        this.soilType = soilType;
    }

    public String getRecommendedCrop() {
        return recommendedCrop;
    }

    public void setRecommendedCrop(String recommendedCrop) {
        this.recommendedCrop = recommendedCrop;
    }
}
