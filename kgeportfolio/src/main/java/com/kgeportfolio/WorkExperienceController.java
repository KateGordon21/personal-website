package com.kgeportfolio;

import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/v1/workexperience")
public class WorkExperienceController {

    public final WorkExperienceRepository workExperienceRepository;

    public WorkExperienceController(WorkExperienceRepository workExperienceRepository) {
        this.workExperienceRepository = workExperienceRepository;
    }

    @GetMapping
    public List<WorkExperience> getAllWorkExperience(){
        return (List<WorkExperience>) workExperienceRepository.findAll();
    }

    @GetMapping("/{id}")
    public WorkExperience getEmployeeById(@PathVariable String id) {
        return workExperienceRepository.findById(id)
                .orElseThrow(() -> new WorkExperienceNotFoundException(id));
    }

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addWorkExperience (@RequestParam String id
            , @RequestParam String companyName, @RequestParam String description, @RequestParam Date startDate
            , @RequestParam Date endDate, @RequestParam String location, @RequestParam String position) {

        WorkExperience we = new WorkExperience();
        we.setId(id);
        we.setCompanyName(companyName);
        we.setDescription(description);
        we.setStartDate(startDate);
        we.setEndDate(endDate);
        we.setLocation(location);
        we.setPosition(position);
        workExperienceRepository.save(we);
        return "Saved";
    }

}
