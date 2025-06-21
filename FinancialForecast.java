public class FinancialForecast 
{
    public static double calculateFutureRecursive(double amount, double rate, int years) 
    {
        if (years == 0)
            return amount; 
        return calculateFutureRecursive(amount * (1 + rate), rate, years - 1);
    }
    public static double calculateFutureIterative(double amount, double rate, int years) 
    {
        for (int i = 0; i < years; i++) {
            amount = amount * (1 + rate);
        }
        return amount;
    }
    public static void main(String[] args) 
    {
        double presentValue = 10000;
        double growthRate = 0.10;      
        int years = 5;
        double resultRecursive = calculateFutureRecursive(presentValue, growthRate, years);
        System.out.printf("Recursive Future Value after %d years: Rs.%.2f%n", years, resultRecursive);
        double resultIterative = calculateFutureIterative(presentValue, growthRate, years);
        System.out.printf("Iterative Future Value after %d years: Rs.%.2f%n", years, resultIterative);
    }
}
