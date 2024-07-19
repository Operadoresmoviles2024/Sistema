import React from "react";
import ReactPDF, {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";



const PDF = () => {
    return (
        <Document>
            <Page size="A4">
            
                            <Text>Hello world</Text>
                    
            </Page>
        </Document>
    );
};

export default async () => {
    return await ReactPDF.renderToStream(<PDF  />);
};
