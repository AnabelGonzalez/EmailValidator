let access_key = "ca6bce72ef8f93523dd89773a911bf98";
let email_address = document.getElementById("Email");
let email = email_address;
let score = document.querySelector(".score");
let valid = document.querySelector(".valid");
let role = document.querySelector(".role");
let disposable = document.querySelector(".disposable");
let free = document.querySelector(".free");

$("form").on("submit", function(e) {
  //ajax call here

  $.ajax({
    url:
      "http://apilayer.net/api/check?access_key=" +
      access_key +
      "&email=" +
      email_address.value,
    contentType: "application/json",
    dataType: "jsonp",
    success: function(json) {
      // Access and use your preferred validation result objects
      console.log(json);

      let valid_ = json.format_valid;
      let disposable_ = json.disposable;
      let role_ = json.role;
      let free_ = json.free;
      let score_ = json.score;

      email.textContent = document.getElementById("Email").value;

      if (valid_ == true) {
        valid.innerHTML = '<span class="text-success">True</span>';
      } else {
        valid.innerHTML = '<span class="text-danger">False</span>';
      }

      if (disposable_ == true) {
        disposable.innerHTML = '<span class="text-success">True</span>';
      } else {
        disposable.innerHTML = '<span class="text-danger">False</span>';
      }

      if (role_ == true) {
        role.innerHTML = '<span class="text-success">True</span>';
      } else {
        role.innerHTML = '<span class="text-danger">False</span>';
      }

      if (free_ == true) {
        free.innerHTML = '<span class="text-success">True</span>';
      } else {
        free.innerHTML = '<span class="text-danger">False</span>';
      }

      if (score_ <= 1.0 && score_ >= 0.65) {
        score.innerHTML = '<p class="text-success">Good</p>';
      } else if (score_ <= 0.64 && score_ >= 0.33) {
        score.innerHTML = '<p class="text-warning">Medium</p>';
      } else if (score_ <= 0.33) {
        score.innerHTML = '<p class="text-danger">Low</p>';
      }
    }
  });

  function getEmail() {
    var email_value = email_address.value;
    document.querySelector(".email").innerHTML = email_value;
  }

  getEmail();

  //stop form submission
  e.preventDefault();
});
