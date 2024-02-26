const valueInput = document.getElementById("value");
const warningmsg = document.getElementById("warning");
const counterOutput5 = document.querySelector(".num5");
const counterOutput4 = document.querySelector(".num4"); 
const counterOutput3 = document.querySelector(".num3");
const counterOutput2 = document.querySelector(".num2");
const counterOutput1 = document.querySelector(".num1");

valueInput.addEventListener("input", function() {
    const value = parseInt(this.value);
    if (value < 1 || value > 99999) {
        warningmsg.style.display = "block";
    } else {
        warningmsg.style.display = "none";
    }
});

function startCounter() {
    let count = 1;

    function updateCounter() {
        const value = parseInt(valueInput.value);
        if (count <= value) {
            let s = count.toString();
            if (s.length === 1) {
                counterOutput5.innerHTML = s[0];
                counterOutput4.innerHTML = "0";
                counterOutput3.innerHTML = "0";
                counterOutput2.innerHTML = "0";
                counterOutput1.innerHTML = "0";
            } else if (s.length == 2) {
                counterOutput5.innerHTML = s[1];
                counterOutput4.innerHTML = s[0];
                counterOutput3.innerHTML = "0";
                counterOutput2.innerHTML = "0";
                counterOutput1.innerHTML = "0";
            } else if (s.length == 3) {
                counterOutput5.innerHTML = s[2];
                counterOutput4.innerHTML = s[1];
                counterOutput3.innerHTML = s[0];
                counterOutput2.innerHTML = "0";
                counterOutput1.innerHTML = "0";
            } else if (s.length == 4) {
                counterOutput5.innerHTML = s[3];
                counterOutput4.innerHTML = s[2];
                counterOutput3.innerHTML = s[1];
                counterOutput2.innerHTML = s[0];
                counterOutput1.innerHTML = "0";
            } else if (s.length == 5) {
                counterOutput5.innerHTML = s[4];
                counterOutput4.innerHTML = s[3];
                counterOutput3.innerHTML = s[2];
                counterOutput2.innerHTML = s[1];
                counterOutput1.innerHTML = s[0];
            }
            count++;
        } else {
            clearInterval(counterInterval);
        }
    }
    counterOutput5.innerHTML = "";
    counterOutput4.innerHTML = "";
    counterOutput3.innerHTML = "";
    counterOutput2.innerHTML = "";
    counterOutput1.innerHTML = "";
    const counterInterval = setInterval(updateCounter, 1000);
}

document.getElementById("btn").addEventListener(
    "click",
    startCounter
);
