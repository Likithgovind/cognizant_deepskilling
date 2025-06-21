public class FactoryMethodPattern 
{
    interface Document 
    {
        void open();
    }
    static class WordDocument implements Document 
    {
        public void open() {
            System.out.println("Opening Word Document...");
        }
    }
    static class PdfDocument implements Document 
    {
        public void open() 
        {
            System.out.println("Opening PDF Document...");
        }
    }
    static class ExcelDocument implements Document 
    {
        public void open() 
        {
            System.out.println("Opening Excel Document...");
        }
    }
    static class DocumentFactory 
    {
        public static Document getDocument(String type) 
        {
            if (type.equalsIgnoreCase("word")) 
            {
                return new WordDocument();
            } else if (type.equalsIgnoreCase("pdf")) 
            {
                return new PdfDocument();
            } else if (type.equalsIgnoreCase("excel")) 
            {
                return new ExcelDocument();
            } else {
                return null;
            }
        }
    }
    public static void main(String[] args) 
    {
        Document word = DocumentFactory.getDocument("word");
        if (word != null) word.open();
        Document pdf = DocumentFactory.getDocument("pdf");
        if (pdf != null) pdf.open();
        Document excel = DocumentFactory.getDocument("excel");
        if (excel != null) excel.open();
    }
}
