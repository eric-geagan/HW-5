let promise = import('class.js')
let list = []

function formSubmitEvent() {
  // Get name of movie and rating
  let movie = document.getElementById('movieName').value
  let rating = document.getElementById('rating').value
  let review = new Movie(movie, parseInt(rating))
  // Validate the object values
  let result = review.validate()
  if (result) {
    // Add object to list
    list.push(review)
    // Set fields to blank string
    document.getElementById('movieName').value = ''
    document.getElementById('rating').value = ''
  } else {
    // Alert of bad values
    alert("Please fill in the fields with a valid entry.")
  }
}

function showEntries() {
    let parent = document.getElementById('listId')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    list.forEach(item => {
      let text = item.getAll()
      let list = document.createElement('li')
      let node = document.createTextNode(text)
      list.appendChild(node)
      parent.appendChild(list)
    })
}