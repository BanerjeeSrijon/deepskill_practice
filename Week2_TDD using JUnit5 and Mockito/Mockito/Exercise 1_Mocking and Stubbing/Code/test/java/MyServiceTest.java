package com.example.MockitoDemo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Arrange: Create mock
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act: Inject mock into service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert: Check result
        assertEquals("Mock Data", result);
    }
}

