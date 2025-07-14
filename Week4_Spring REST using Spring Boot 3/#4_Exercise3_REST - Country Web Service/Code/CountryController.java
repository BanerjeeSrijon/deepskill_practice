package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START getCountryIndia()");
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            Country country = (Country) context.getBean("country");
            LOGGER.info("END getCountryIndia()");
            return country;
        }
    }
}
