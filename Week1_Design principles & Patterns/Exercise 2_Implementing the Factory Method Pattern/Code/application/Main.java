package application;

import documents.Document;
import factories.DocumentFactory;
import factories.ExcelDocumentFactory;
import factories.PdfDocumentFactory;
import factories.WordDocumentFactory;
public class Main {
    public static void main(String[] args) {
        // Create different document factories
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        // Use factories to create documents
        Document wordDoc = wordFactory.createDocument();
        Document pdfDoc = pdfFactory.createDocument();
        Document excelDoc = excelFactory.createDocument();

        // Test document operations
        System.out.println("-- Word Document Operations --");
        wordDoc.open();
        wordDoc.save();

        System.out.println("\n-- PDF Document Operations --");
        pdfDoc.open();
        pdfDoc.save();

        System.out.println("\n-- Excel Document Operations --");
        excelDoc.open();
        excelDoc.save();

        // Demonstrate polymorphic factory usage
        System.out.println("\n-- Using Factory's newDocument Method --");
        wordFactory.newDocument();
    }
}