package com.kgeportfolio.v1;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/v1/workexperience")
public class WorkExperienceController {

    public final WorkExperienceRepository workExperienceRepository;

    public WorkExperienceController(WorkExperienceRepository workExperienceRepository) {
        this.workExperienceRepository = workExperienceRepository;
    }

    @GetMapping
    public List<WorkExperience> getAllWorkExperience() {
        return (List<WorkExperience>) workExperienceRepository.findAll();
    }

    @GetMapping("/{id}")
    public WorkExperience getEmployeeById(@PathVariable String id) {
        return workExperienceRepository.findById(id)
                .orElseThrow(() -> new WorkExperienceNotFoundException(id));
    }

    @PostMapping(path = "/add")
    public @ResponseBody String addWorkExperience(@RequestParam String id
            , @RequestParam String companyName, @RequestParam List<String> description, @RequestParam @DateTimeFormat(pattern = "MM-dd-yyyy") Date startDate
            , @RequestParam @DateTimeFormat(pattern = "MM-dd-yyyy") Date endDate, @RequestParam String location, @RequestParam String position) {

        WorkExperience we = new WorkExperience();
        we.setId(id);
        we.setDescription(description);
        we.setCompanyName(companyName);
        we.setStartDate(startDate);
        we.setEndDate(endDate);
        we.setLocation(location);
        we.setPosition(position);
        workExperienceRepository.save(we);
        return "Saved";
    }

    @PostMapping(path = "/modify")
    public @ResponseBody WorkExperience modifyWorkExperience(@RequestParam String id
            , @RequestParam(required = false) String companyName, @RequestParam(required = false) List<String> description
            , @RequestParam(required = false) @DateTimeFormat(pattern = "MM-dd-yyyy") Date startDate, @RequestParam(required = false) @DateTimeFormat(pattern = "MM-dd-yyyy") Date endDate
            , @RequestParam(required = false) String location, @RequestParam(required = false) String position) {

        Optional<WorkExperience> workExperience = workExperienceRepository.findById(id);
        if (workExperience.isPresent()) {
            WorkExperience entity = workExperience.get();
            if (companyName != null) {
                entity.setCompanyName(companyName);
            }
            if (description != null) {
                entity.setDescription(description);
            }
            if (startDate != null) {
                entity.setStartDate(startDate);
            }
            if (endDate != null) {
                entity.setEndDate(endDate);
            }
            if (location != null) {
                entity.setLocation(location);
            }
            if (position != null) {
                entity.setPosition(position);
            }
            workExperienceRepository.save(entity);

        }

        return workExperience.orElseThrow(() -> new WorkExperienceNotFoundException(id));
    }

    @DeleteMapping
    public @ResponseBody String deleteWorkExperience(@RequestParam String id) {
        workExperienceRepository.deleteById(id);
        return "Deleted";
    }

}
