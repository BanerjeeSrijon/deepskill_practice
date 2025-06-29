package finforecast;

import java.util.Scanner;

public class FinancialForecasting {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get initial amount from user
        System.out.print("Enter initial investment amount: ");
        double initialAmount = scanner.nextDouble();

        // Get number of past growth rates from user
        System.out.print("Enter number of past growth periods: ");
        int numPastPeriods = scanner.nextInt();
        double[] pastGrowthRates = new double[numPastPeriods];

        // Get each past growth rate from user
        for (int i = 0; i < numPastPeriods; i++) {
            System.out.printf("Enter growth rate for period %d (in decimal, e.g., 0.05 for 5%%): ", i + 1);
            pastGrowthRates[i] = scanner.nextDouble();
        }

        // Get future periods to forecast from user
        System.out.print("Enter number of future periods to forecast: ");
        int futurePeriods = scanner.nextInt();

        scanner.close();

        // Step 1: Compute current value after applying past growth
        double currentValue = computeCurrentValue(initialAmount, pastGrowthRates);
        System.out.printf("Current value after past growth: $%.2f%n", currentValue);

        // Step 2: Compute average growth rate
        double avgGrowthRate = computeAverageGrowthRate(pastGrowthRates);
        System.out.printf("Average growth rate: %.2f%%%n", avgGrowthRate * 100);

        // Step 3: Predict future value recursively
        double futureValue = predictFutureValue(currentValue, avgGrowthRate, futurePeriods);
        System.out.printf("Future value after %d periods: $%.2f%n", futurePeriods, futureValue);
    }

    // Computes current value by applying all past growth rates
    private static double computeCurrentValue(double initialAmount, double[] growthRates) {
        double currentValue = initialAmount;
        for (double rate : growthRates) {
            currentValue *= (1 + rate);
        }
        return currentValue;
    }

    // Computes average of past growth rates
    private static double computeAverageGrowthRate(double[] growthRates) {
        double sum = 0;
        for (double rate : growthRates) {
            sum += rate;
        }
        return sum / growthRates.length;
    }

    // Recursively predicts future value
    private static double predictFutureValue(double currentValue, double growthRate, int periods) {
        if (periods == 0) {
            return currentValue; // Base case: no future periods
        }
        // Recursive case: apply growth rate and reduce periods
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, periods - 1);
    }
}
