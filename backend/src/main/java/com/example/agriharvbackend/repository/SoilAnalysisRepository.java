package com.example.agriharvbackend.repository;

import com.example.agriharvbackend.model.SoilAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SoilAnalysisRepository extends JpaRepository<SoilAnalysis, Long> {
    SoilAnalysis findBySoilType(String soilType);
}
