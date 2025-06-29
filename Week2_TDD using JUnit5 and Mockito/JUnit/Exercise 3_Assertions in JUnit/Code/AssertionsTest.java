package com.example.JUnitDemo;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals("2 + 3 should equal 5", 5, 2 + 3);

        // Assert true
        assertTrue("5 > 3 should be true", 5 > 3);

        // Assert false
        assertFalse("5 < 3 should be false", 5 < 3);

        // Assert null
        assertNull("Should be null", null);

        // Assert not null
        assertNotNull("Should not be null", new Object());
    }
}

