document.querySelector('#check').addEventListener('click', checkDay)

function checkDay() {

  let valid_days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  const day = document.querySelector('#day').value

  if (!(valid_days.includes(day.toLowerCase()))) {
    document.querySelector('#placeToSee').innerText = "Please enter valid day."
  } else {
    answer = day[0].toLowerCase() === 's' ? "Weekend" : "Weekday"
    document.querySelector('#placeToSee').innerText = answer
  }

}


