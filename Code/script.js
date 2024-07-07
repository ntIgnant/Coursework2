// This script is used to parse a string of XML data and log the titles of books contained within it.

// First, we define a string that contains XML data. This data follows the structure of a typical XML document used
// for storing book information. Each book has a title and an author.
var xmlData = `
<books>
    <book>
        <title>Harry Potter</title> <!--Book Title-->
        <author>J.K. Rowling</author> <!--Book Author-->
    </book>
    <!--Another Book Entry-->
    <book>
        <title>The Hobbit</title> <!--Book Title-->
        <author>J.R.R. Tolkien</author> <!--Book Author-->
    </book>
    <book> <!-- Book section of Call Newports Book-->
        <title>Digital Minimalism</title>
        <author>Cal Newport</author>
    </book>
    <book> <!-- Book section of Johan Haris Book-->
        <title>Lost Connections</title>
        <author>Johan Hari</author>
    </book>
    <book> <!-- Book section of Daniel Pinks Book-->
        <title>Drive</title>
        <author>Daniel H. Pink</author>
    </book>
</books>
`;

// The DOMParser is an object that allows you to parse XML or HTML source code from a string into a DOM Document.
// Here, we create a new instance of DOMParser and call its 'parseFromString' method.
// We pass the XML data string and the content type "text/xml" to indicate we're parsing XML.
var xmlDoc = new DOMParser().parseFromString(xmlData, "text/xml");

// XPath (XML Path Language) is a query language that can select nodes from an XML document.
// In this line, we define an XPath expression to select all <title> elements in the document, regardless of their
// position in the hierarchy. The double slash (//) at the beginning of the XPath expression signifies this.
var titles = xmlDoc.evaluate(
  "//title",
  xmlDoc,
  null,
  XPathResult.ANY_TYPE,
  null
);

// We declare a variable 'titleNode' without initializing it. This variable will be used in the loop to
// reference each node (or title element) that we retrieve from the 'titles' XPathResult.
var titleNode;

// Using a while loop, we iterate over each result of the XPath query. The 'iterateNext()' method moves the
// XPathResult's internal pointer to the next result and returns the node. If there are no more results,
// 'iterateNext()' returns null, which will end the loop.
while ((titleNode = titles.iterateNext())) {
  // For each title node found by the XPath query, we log its text content to the console.
  // 'textContent' is a property that contains the text inside an HTML or XML element.
  console.log(titleNode.textContent);
}
