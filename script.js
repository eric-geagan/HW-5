class Show {
  constructor(name, type, status, rating) {
    this.name = name
    this.type = type
    this.status = status
    this.rating = rating
  }

  getAll() {
    return this.status + ' ' + this.type + ': "' + this.name + '" Rating: ' + this.rating
  }
}

let list = []
$(document).on("pagebeforeshow","#list",function() {
  showEntries()
});

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
  let parent = $('#listId')
  parent.empty()
  list.forEach(item => {
    let text = item.getAll()
    parent.append("<li>" + text + "</li>");
  })
}