let paragrafo = document.getElementsByClassName("parag");
for(let index = 0; index < paragrafo.length; index += 1){
    console.log(paragrafo[index]);
}
paragrafo[0].innerText = "Test";

document.getElementsByTagName("h4")[0].style.color = "red";