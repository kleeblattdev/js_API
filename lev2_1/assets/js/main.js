fetch('https://picsum.photos/v2/list')
.then(response => response.json())
.then((data) => {
    //Datentyp Array
    console.log(data)

    data.forEach((picture) => {
        const url =picture.download_url
        const author = picture.author

        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.src = `${url}`;

        const figureFigcaption = document.createElement('figcaption');
        figureFigcaption.innerText = `${author}`;

        figure.appendChild(figureImg);
        figure.appendChild(figureFigcaption);


        document.body.appendChild(figure);
    })
})
