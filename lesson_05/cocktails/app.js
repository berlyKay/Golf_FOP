document.querySelector("button").addEventListener("click", getDrink)

function getDrink () {
  const newDrink = document.querySelector("input").value
  // console.log(drinkName)
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newDrink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks[0])
    document.querySelector("img").src = data.drinks[0].strDrinkThumb
    document.querySelector(".drnkName").innerText = data.drinks[0].strDrink
    document.querySelector(".instructions").innerText = data.drinks[0].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}
