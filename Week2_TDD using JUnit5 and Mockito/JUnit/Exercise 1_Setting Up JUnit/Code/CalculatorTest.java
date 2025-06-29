package com.example.JUnitDemo;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {
        int result = 2 + 3;
        System.out.println("Adding 2 + 3 = " + result);  // This will print
        assertEquals(5, result);
    }
}


