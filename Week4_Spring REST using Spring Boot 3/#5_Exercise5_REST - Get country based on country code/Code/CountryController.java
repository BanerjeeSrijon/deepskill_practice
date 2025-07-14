package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @GetMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START getCountryIndia()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) context.getBean("country", Country.class);
        LOGGER.info("END getCountryIndia()");
        return country;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) throws Exception {
        LOGGER.info("START getCountry() with code: {}", code);
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        CountryService countryService = (CountryService) context.getBean("countryService");
        Country country = countryService.getCountry(code);
        LOGGER.info("END getCountry()");
        return country;
    }
}
