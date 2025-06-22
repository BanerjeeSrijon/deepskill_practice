package search;

public class SearchDemo {
    // Linear Search: Works on any array (unsorted or sorted)
    public static int linearSearch(Product[] products, int targetId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductId() == targetId) {
                return i; // Found at index i
            }
        }
        return -1; // Not found
    }

    // Binary Search: Requires a sorted array
    public static int binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midId = products[mid].getProductId();

            if (midId == targetId) {
                return mid; // Found at mid index
            } else if (midId < targetId) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
        return -1; // Not found
    }

    public static void main(String[] args) {
        // Sample products (unsorted for linear search)
        Product[] linearSearchProducts = {
            new Product(101, "Laptop", "Electronics"),
            new Product(203, "Blender", "Kitchen"),
            new Product(145, "Smartphone", "Electronics"),
            new Product(567, "Desk Chair", "Furniture")
        };

        // Sample products sorted by ID for binary search
        Product[] binarySearchProducts = {
            new Product(101, "Laptop", "Electronics"),
            new Product(145, "Smartphone", "Electronics"),
            new Product(203, "Blender", "Kitchen"),
            new Product(567, "Desk Chair", "Furniture")
        };

        // Test searches
        int targetId = 203;
        
        // Linear Search
        int linearResult = linearSearch(linearSearchProducts, targetId);
        System.out.println("Linear Search Result: " + 
            (linearResult != -1 ? linearSearchProducts[linearResult] : "Product not found"));

        // Binary Search
        int binaryResult = binarySearch(binarySearchProducts, targetId);
        System.out.println("Binary Search Result: " + 
            (binaryResult != -1 ? binarySearchProducts[binaryResult] : "Product not found"));
    }
}
