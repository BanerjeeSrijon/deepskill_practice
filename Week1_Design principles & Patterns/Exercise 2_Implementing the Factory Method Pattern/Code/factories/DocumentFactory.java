package factories;

import documents.Document;

public abstract class DocumentFactory {
    // Factory method
    public abstract Document createDocument();
    
    public void newDocument() {
        Document doc = createDocument();
        doc.open();
    }
}