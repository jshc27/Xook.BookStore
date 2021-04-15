
const url = 'https://vedicscripturesapi.herokuapp.com/gita/chapters';


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var respuesta = JSON.parse(xhttp.responseText);
        console.log(respuesta);

        //Card1
        document.getElementById('parag1').innerHTML = respuesta[0].Description;
        document.querySelector('#book1 img').setAttribute("src", respuesta[0].url);

        //Card2
        document.getElementById('parag2').innerHTML = respuesta[1].Description;
        document.querySelector('#book2 img').setAttribute("src", respuesta[1].url);

        //Card3 
        document.getElementById('parag3').innerHTML = respuesta[2].Description;
        document.querySelector('#book3 img').setAttribute("src", respuesta[2].url);

        //Card4
        document.getElementById('parag4').innerHTML = respuesta[3].Description;
        document.querySelector('#book4 img').setAttribute("src", respuesta[3].url);

        //Card5
        document.getElementById('parag5').innerHTML = respuesta[4].Description;
        document.querySelector('#book5 img').setAttribute("src", respuesta[4].url);

        //Card6
        document.getElementById('parag6').innerHTML = respuesta[5].Description;
        document.querySelector('#book6 img').setAttribute("src", respuesta[5].url);

        //Card7
        document.getElementById('parag7').innerHTML = respuesta[6].Description;
        document.querySelector('#book7 img').setAttribute("src", respuesta[6].url);

        //Card8
        document.getElementById('parag8').innerHTML = respuesta[7].Description;
        document.querySelector('#book8 img').setAttribute("src", respuesta[7].url);

        //Card9
        document.getElementById('parag9').innerHTML = respuesta[8].Description;
        document.querySelector('#book9 img').setAttribute("src", respuesta[8].url);

        //Card10
        document.getElementById('parag10').innerHTML = respuesta[9].Description;
        document.querySelector('#book10 img').setAttribute("src", respuesta[9].url);

        //Card11
        document.getElementById('parag11').innerHTML = respuesta[10].Description;
        document.querySelector('#book11 img').setAttribute("src", respuesta[10].url);

        //Card12
        document.getElementById('parag12').innerHTML = respuesta[11].Description;
        document.querySelector('#book12 img').setAttribute("src", respuesta[11].url);

        //Card13
        document.getElementById('parag13').innerHTML = respuesta[12].Description;
        document.querySelector('#book13 img').setAttribute("src", respuesta[12].url);

        //Card14
        document.getElementById('parag14').innerHTML = respuesta[13].Description;
        document.querySelector('#book14 img').setAttribute("src", respuesta[13].url);

        //Card15
        document.getElementById('parag15').innerHTML = respuesta[14].Description;
        document.querySelector('#book15 img').setAttribute("src", respuesta[14].url);

        //Card16
        document.getElementById('parag16').innerHTML = respuesta[15].Description;
        document.querySelector('#book16 img').setAttribute("src", respuesta[15].url);
        
        //  var respuesta = '';
        //  for(var i = 0; i < book1.length; i++) {
        //      respuesta += '<div>' + book1[i].respuesta[0].url + '</div>';
        //  }
        //      document.getElementById('book1').innerHTML = respuesta;
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();



fetch(url)
.then(response => response.json())
.then(data => {

    let element = document.getElementById('book1');
    let autor1 = document.querySelector('#autor1').innerHTML = data[0].translation;
    let autor2 = document.querySelector('#autor2').innerHTML = data[1].translation;
    let autor3 = document.querySelector('#autor3').innerHTML = data[2].translation;
    let autor4 = document.querySelector('#autor4').innerHTML = data[3].translation;
    let autor5 = document.querySelector('#autor5').innerHTML = data[4].translation;
    let autor6 = document.querySelector('#autor6').innerHTML = data[5].translation;

    let autor7 = document.querySelector('#autor7').innerHTML = data[6].translation;
    let autor8 = document.querySelector('#autor8').innerHTML = data[7].translation;
    let autor9 = document.querySelector('#autor9').innerHTML = data[8].translation;
    let autor10 = document.querySelector('#autor10').innerHTML = data[9].translation;
    let autor11 = document.querySelector('#autor11').innerHTML = data[10].translation;
    let autor12 = document.querySelector('#autor12').innerHTML = data[11].translation;
    let autor13 = document.querySelector('#autor13').innerHTML = data[12].translation;
    

    

    // element.innerHTML = `
    // <img src="${data.image}">
    // <h3>${data[0].translation}</h3>
    // `;
    console.log(data)
})
.catch(error=> console.log(error))



