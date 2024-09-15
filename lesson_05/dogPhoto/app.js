function getDog() {
  console.log('hello')
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector("img").src = data.message
      console.log(data.message)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
  
  document.querySelector(".new_dog").addEventListener("click", getDog)