function calcular() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    var A2 = document.getElementById('A=');
    var B2 = document.getElementById('B=');
    var C2 = document.getElementById('C=');

    var result = document.getElementById("resultado");

    if (A, B == "" || B, C == "" || C, A == "") {
        alert("Preencha pelo menos dois campos")

    } else if (A, B, C != "") {
        alert("Preencha apenas dois campos")

    } else if (A == "") {
        A2.classList.add("result")
        A2.textContent = "A = " +
            parseFloat((Math.sqrt((B * B) + (C * C)).toFixed(2)));
        B2.textContent = "B = " +
            B;
        C2.textContent = "C = " +
            C;
    } else if (B == "") {
        B2.classList.add("result")
        B2.textContent = "B = " + parseFloat(Math.sqrt((A * A) - (C * C)).toFixed(2));
        C2.textContent = "C = " +
            C;
        A2.textContent = "A = " +
            A;
    } else if (C == "") {
        C2.classList.add("result")
        C2.textContent = "C = " + parseFloat(Math.sqrt((A * A) - (B * B)).toFixed(2));
        B2.textContent = "B = " +
            B;
        A2.textContent = "A = " +
            A;
    }
}