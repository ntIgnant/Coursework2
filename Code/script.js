document.addEventListener('DOMContentLoaded', () => {
    const xmlString = `
        <MovieInfo>
            <movie>
                <id>1</id>
                <name>Interstellar</name>
                <year>November 6, 2014</year>
                <duration>2h 49m</duration>
                <genre>Science Fiction</genre>
            </movie>
            <movie>
                <id>2</id>
                <name>The Matrix</name>
                <year>June 17, 1999</year>
                <duration>2h 16m</duration>
                <genre>Science Fiction</genre>
            </movie>
            <movie>
                <id>3</id>
                <name>Blade Runner 2049</name>
                <year>October 6, 2017</year>
                <duration>2h 44m</duration>
                <genre>Science Fiction</genre>
            </movie>
            <movie>
                <id>4</id>
                <name>The Batman</name>
                <year>March 3, 2022</year>
                <duration>2h 56m</duration>
                <genre>Action</genre>
            </movie>
            <movie>
                <id>5</id>
                <name>Rocky</name>
                <year>November 21, 1976</year>
                <duration>2h 0m</duration>
                <genre>Drama</genre>
            </movie>
            <movie>
                <id>6</id>
                <name>Pacific Rim</name>
                <year>July 18, 2013</year>
                <duration>2h 11m</duration>
                <genre>Science Fiction</genre>
            </movie>
        </MovieInfo>
    `;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    const movies = xmlDoc.querySelectorAll("movie");

    movies.forEach(movie => {
        const id = movie.querySelector("id").textContent;
        const name = movie.querySelector("name").textContent;
        const year = movie.querySelector("year").textContent;
        const duration = movie.querySelector("duration").textContent;
        const genre = movie.querySelector("genre").textContent;

        console.log(`Movie ID: ${id}`);
        console.log(`Name: ${name}`);
        console.log(`Year: ${year}`);
        console.log(`Duration: ${duration}`);
        console.log(`Genre: ${genre}`);
        console.log("---");
    });

    // Copy to clipboard button
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Movie Information';
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(xmlString)
            .then(() => {
                console.log('Movie information Copied (XML format)');
                alert('Movie information Copied (XML format)');
            })
            .catch(err => {
                console.error('Failed to copy movie information (XML info)', err);
                alert('Failed to copy movie information (XML info)');
            });
    });


    const copyInfoDiv = document.querySelector('.copyInfo');
    copyInfoDiv.appendChild(copyButton);


    //  // Fetch API  functionality

    // const form = document.getElementById('userDataForm');
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();


    //     const formData = new FormData(form);
    //     const name = formData.get('name');
    //     const email = formData.get('email');

    //     console.log(`Name: ${name}`);
    //     console.log(`Email: ${email}`);

    //     fetch('https://example.com/api/submit', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/xml',
    //         },
    //         body: xmlString,
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             console.log('User information submitted');
    //             alert('User information submitted');
    //         } else {
    //             console.error('Could't submit user information');
    //             alert('Could't submit user information');
    //         }
    //     })
    //     .catch(err => {
    //         console.error('Could't submit user information', err);
    //         alert('Could't submit user information');
    //     });
    // });
});

