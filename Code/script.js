var xmlData = `
<MovieInfo>
    <movie>
        <id>1</id>
        <name>Interstellar</name>
        <year>November 6, 2014</year>
        <duration>2h 49m</duration>
        <genre>Science Fiction</genre>
    </movie>
</MovieInfo>
`;


var xmlDoc = new DOMParser().parseFromString(xmlData, "text/xml");


var movies = xmlDoc.evaluate(
  "//movie",
  xmlDoc,
  null,
  XPathResult.ANY_TYPE,
  null
);


var movieNode;

while ((movieNode = movies.iterateNext())) {
  var id = movieNode.querySelector("id")?.textContent;
  var name = movieNode.querySelector("name")?.textContent;
  var year = movieNode.querySelector("year")?.textContent;
  var duration = movieNode.querySelector("duration")?.textContent;
  var genre = movieNode.querySelector("genre")?.textContent;

  console.log(`ID: ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Year: ${year}`);
  console.log(`Duration: ${duration}`);
  console.log(`Genre: ${genre}`);
}