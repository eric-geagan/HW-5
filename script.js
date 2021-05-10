class Show {
  constructor(name, type, status, rating) {
    this.name = name
    this.type = type
    this.status = status
    this.rating = rating
  }

  getAll() {
    return 'some string'
  }
}

let list = []

function formSubmitEvent() {
  // Get name of movie and rating
  let showName = $('#showName').val();
  let type = $('#type').val();
  let status = $('#status').val();
  let rating = $('#rating').val();
  let show = new Show(showName, type, status, parseInt(rating))
  // Validate the object values?
  let result = true
  if (result) {
    // Add object to list
    list.push(show)
    // Set fields to blank string
  $('#showName').val('');
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