package logger;

public class Logger {
    // Private static instance of the class
    private static final Logger instance = new Logger();

    // Private constructor
    private Logger() {
        System.out.println("Logger instance created");
    }

    // Public static method
    public static Logger getInstance() {
        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}