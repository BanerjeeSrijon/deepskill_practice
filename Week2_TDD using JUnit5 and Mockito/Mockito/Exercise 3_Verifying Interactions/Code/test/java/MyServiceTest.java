package com.example.MockitoDemo;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Call the method with mock
        MyService service = new MyService(mockApi);
        service.fetchData(); // Should call mockApi.getData()

        // Step 3: Verify interaction
        verify(mockApi).getData();
    }
}
