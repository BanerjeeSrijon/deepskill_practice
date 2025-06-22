package logger;

public class TestLogger {
    public static void main(String[] args) {
        // logger instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Verify singleton behavior
        if (logger1 == logger2) {
            System.out.println("Both references should point to the same instance");
        } else {
            System.out.println("References will point to different instances which is wrong");
        }

        // Use logging functionality
        logger1.log("First message");
        logger2.log("Second message");
    }
}