//dados
let cidade = 'São Paulo, SP';
let telefone = '+55 41 988574851';
let email = 'gabrieltborba@gmail.com'

//funcao pra calcular minha idade
function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
let calculoIdade = getAge(new Date(1992, 7, 1));
console.log( getAge(new Date(1992, 7, 1)) );

//funcao para atualizar o front com os dados que vieram da API
function loadData(element, data) {
    return document.getElementById(element).innerHTML = data;
}

window.onload = function () {
    loadData('telefone', telefone);
    loadData('idade', calculoIdade + " anos");
    loadData('cidade', cidade)
    loadData('email', email)
    const nightMode = document.querySelector('#switch-shadow');

    // ao clicar mudaremos as cores
    nightMode.addEventListener('click', () => {
        // adiciona a classe `night-mode` ao html
        document.documentElement.classList.toggle('night-mode');
    });
};


let min = 12;
let max = 32;


// // funcao pizza
// window.onload = function() {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
        
//         data: [{
//             type: "pie",
//             startAngle: 240,
//             yValueFormatString: "##0.00\"%\"",
//             indexLabel: "{label} {y}",
//             dataPoints: [
//                 {y: 29, label: "Flexibilidade"},
//                 {y: 29, label: "Suporte"},
//                 {y: 22, label: "Individualidade"},
//                 {y: 20, label: "Organização"}
//             ]
//         }]
//     });
//     chart.render();
    
//     }
//     </script>
    
//funcao para aumentar o tamanho das letras 

function increaseFontSizeInternal(list) {
    for (i = 0; i < list.length; i++) {
        let s = 18;
        if (list[i].style.fontSize) {
            s = parseInt(list[i].style.fontSize.replace("px", ""));
        }
        if (s != max) {
            s += 1;
        }
        list[i].style.fontSize = s + "px"
    }
}

function increaseFontSize() {
    let paragraph = document.getElementsByTagName('p');
    increaseFontSizeInternal(paragraph);
    let links = document.getElementsByTagName('a');
    increaseFontSizeInternal(links);
    let titles = document.getElementsByTagName("h3")
    increaseFontSizeInternal(titles);
    let subTitles = document.getElementById("subTitle")
    increaseFontSizeInternal(subTitles);

}
//funcao para diminuir o tamanho das letras 
function decreaseFontSizeInternal(list) {
    for (i = 0; i < list.length; i++) {
        let s = 16;
        if (list[i].style.fontSize) {
            s = parseInt(list[i].style.fontSize.replace("px", ""));
        }
        if (s != min) {
            s -= 1;
        }
        list[i].style.fontSize = s + "px"
    }
}

function decreaseFontSize() {
    let paragraph = document.getElementsByTagName('p');
    decreaseFontSizeInternal(paragraph);
    let links = document.getElementsByTagName('a');
    decreaseFontSizeInternal(links);
    let titles = document.getElementsByTagName("h3")
    decreaseFontSizeInternal(titles);
    let subTitles = document.getElementById("subTitle")
    decreaseFontSizeInternal(subTitles);
}