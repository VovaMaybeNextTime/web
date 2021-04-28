
function displayLab1()
{
    document.getElementById("lab").innerHTML = "ПОСТАНОВКА ЗАДАЧІ Лабораторної роботи №"+ "1"
}

function displayLab2()
{
    document.getElementById("lab").innerHTML = "ПОСТАНОВКА ЗАДАЧІ Лабораторної роботи №"+ "2"
}

function displayLab3()
{
    document.getElementById("lab").innerHTML = "ПОСТАНОВКА ЗАДАЧІ Лабораторної роботи №"+ "3"
}

function displayLab4()
{
    document.getElementById("lab").innerHTML = "ПОСТАНОВКА ЗАДАЧІ Лабораторної роботи №"+ "4"
}

function displayLab5()
{
    document.getElementById("lab").innerHTML = "ПОСТАНОВКА ЗАДАЧІ Лабораторної роботи №"+ "5"
}

$("#horizontal-list li a").click(function() {
    alert(this.id); 
    console.log(this.id)
});