package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CountryService {
    private List<Country> countryList;

    public void setCountryList(List<Country> countryList) {
        this.countryList = countryList;
    }

    public Country getCountry(String code) throws Exception {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new Exception("Country not found"));
    }
}
