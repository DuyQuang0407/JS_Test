let animals = ['cat', 'rabbit', 'dog', 'fox', 'fish', 'racoon', 'tiger', 'bear', 'parrot', 'snake']
animals.reverse();

const btn = document.getElementById("myBtn")

function showButton() {
    let xBtn = '<button class="demoBtn" style="width: 100px; height: 50px; margin: 10px;"></button>'
    let arr = []
    for (let i = 0; i < animals.length; i++) {

        btn.insertAdjacentHTML("afterend", xBtn);
        let getBtnItem = document.querySelector(".demoBtn");
        getBtnItem.innerText = animals[i];

        getBtnItem.addEventListener("click", function () {
            document.getElementById("container").innerHTML = document.querySelector(".demoBtn").innerText;
        });


        arr.push(getBtnItem)
    }
    arr.forEach(item => {
        item.addEventListener("click", function () {
            document.getElementById("container").innerHTML = item.innerText;
            console.log(item.innerText)
        });

    })
    btn.remove()

} 