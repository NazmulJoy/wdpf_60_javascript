class Validation {
  constructor(data) {
    this.login = data;
  }
  validate() {
    var pattern = /[A-z0-9._]+@[A-z0-9]+\.[A-z]{2,4}$/i;
    if (this.login.search(pattern) == -1) {
      alert("Please enter a valid email address");
    } else {
      document.write("Successful Login");
    }
  }
}
