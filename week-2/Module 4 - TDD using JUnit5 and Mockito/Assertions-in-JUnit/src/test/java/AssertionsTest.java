import org.junit.Test;
import static org.junit.Assert.*;
public class AssertionsTest {
    @Test
    public void testAssertions() {
        System.out.println("Running testAssertions...");
        System.out.println("Checking if 2 + 3 == 5");
        assertEquals(5, 2 + 3);
        System.out.println("Checking if 5 > 3");
        assertTrue(5 > 3);
        System.out.println("Checking if 5 < 3 is false");
        assertFalse(5 < 3);
        System.out.println("Checking if null is null");
        Object obj = null;
        assertNull(obj);
        System.out.println("Checking if object is not null");
        String text = "Cognizant";
        assertNotNull(text);
        System.out.println("All assertions passed.");
    }
}
