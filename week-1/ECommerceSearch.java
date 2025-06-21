import java.util.*;
public class ECommerceSearch 
{
    static class Product 
    {
        int id;
        String name;
        String category;
        Product(int id, String name, String category) 
        {
            this.id = id;
            this.name = name;
            this.category = category;
        }
        public String toString() 
        {
            return "Product[ID=" + id + ", Name=" + name + ", Category=" + category + "]";
        }
    }
    static Product linearSearch(Product[] products, String key) 
    {
        for (Product p : products) 
        {
            if (p.name.equalsIgnoreCase(key)) 
            {
                return p;
            }
        }
        return null;
    }
    static Product binarySearch(Product[] products, String key) 
    {
        Arrays.sort(products, Comparator.comparing(p -> p.name.toLowerCase()));
        int low = 0;
        int high = products.length - 1;
        while (low <= high) 
        {
            int mid = (low + high) / 2;
            int compare = products[mid].name.compareToIgnoreCase(key);

            if (compare == 0) return products[mid];
            else if (compare < 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Book", "Education"),
            new Product(104, "Shoes", "Footwear"),
            new Product(105, "Shirt", "Apparel")
        };
        System.out.print("Enter product name to search: ");
        String input = sc.nextLine();
        long start1 = System.nanoTime();
        Product result1 = linearSearch(products, input);
        long end1 = System.nanoTime();
        long start2 = System.nanoTime();
        Product result2 = binarySearch(products.clone(), input);
        long end2 = System.nanoTime();
        System.out.println("\nLinear Search Result:");
        if (result1 != null)
            System.out.println(result1);
        else
            System.out.println("Product not found.");
        System.out.println("Time: " + (end1 - start1) + " ns");
        System.out.println("\nBinary Search Result:");
        if (result2 != null)
            System.out.println(result2);
        else
            System.out.println("Product not found.");
        System.out.println("Time: " + (end2 - start2) + " ns");
        sc.close();
    }
}
