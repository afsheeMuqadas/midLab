
document.addEventListener("DOMContentLoaded", function () {
    const sbottles = document.querySelectorAll(".cup-small");    //declare const type variables
    const remained = document.getElementById("remained");
    const liters = document.getElementById("liters");
    const percentage = document.getElementById("percentage");
  
    let totalLiters = 0;                                //declare let type variables
    let percentageFilled = 0;
  
    sbottles.forEach((cup) => {
      cup.addEventListener("click", () => {
        if (!cup.classList.contains("full")) {
          cup.classList.add("full");
          totalLiters += 0.25;
          updateCup();
        }
      });
    });
  
    function updateCup() {
      liters.innerText = `${totalLiters} L`;
      percentageFilled = (totalLiters / 2) * 100;
      percentage.style.height = `${percentageFilled}%`;
      percentage.innerText = `${percentageFilled}%`;
      remained.style.transform = `translateY(-${100 - percentageFilled}%)`;
    }
  });



