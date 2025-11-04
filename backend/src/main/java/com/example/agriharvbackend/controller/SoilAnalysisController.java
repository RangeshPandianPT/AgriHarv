package com.example.agriharvbackend.controller;

import com.example.agriharvbackend.model.SoilAnalysis;
import com.example.agriharvbackend.repository.SoilAnalysisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/soil-analysis")
public class SoilAnalysisController {

    @Autowired
    private SoilAnalysisRepository soilAnalysisRepository;
    
    // Default recommendations when database has no entry
    private static final Map<String, String> DEFAULT_RECOMMENDATIONS = new HashMap<>();
    
    static {
        DEFAULT_RECOMMENDATIONS.put("Clay", "Soybeans");
        DEFAULT_RECOMMENDATIONS.put("Sandy", "Corn");
        DEFAULT_RECOMMENDATIONS.put("Loam", "Wheat");
        DEFAULT_RECOMMENDATIONS.put("Silty", "Rice");
        DEFAULT_RECOMMENDATIONS.put("Peaty", "Lettuce");
        DEFAULT_RECOMMENDATIONS.put("Chalky", "Cabbage");
        DEFAULT_RECOMMENDATIONS.put("Black", "Cotton");
        DEFAULT_RECOMMENDATIONS.put("Red", "Groundnut");
    }

    @GetMapping("/{soilType}")
    public SoilAnalysis getSoilAnalysis(@PathVariable String soilType) {
        SoilAnalysis sa = soilAnalysisRepository.findBySoilType(soilType);
        if (sa != null) {
            return sa;
        }
        
        // If not found in DB, return a default mapping (so the frontend shows a recommendation)
        String recommended = DEFAULT_RECOMMENDATIONS.get(soilType);
        if (recommended != null) {
            SoilAnalysis fallback = new SoilAnalysis();
            fallback.setSoilType(soilType);
            fallback.setRecommendedCrop(recommended);
            return fallback;
        }
        
        return null;
    }
}
