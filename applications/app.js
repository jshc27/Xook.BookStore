
const url = ' https://vedicscripturesapi.herokuapp.com/gita/chapters';



fetch(url)
.then(response => response.json())
.then(data => {

    let element = document.getElementById('book1')
    let elem = document.getElementById('autor1')
    let ele = document.getElementById('parag')

    element.innerHTML = `
    <img src="${data.image}">
    <h3>${data[0].translation}</h3>
    <p>${data[0].summary.en}</p>
    
    `;
    console.log(data)
})
.catch(error=> console.log(error))