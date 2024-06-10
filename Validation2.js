class Validation {
    constructor (email){
        this.email = email;
    }
    validate(){
        var pattern = /[A-z0-9._]+@[A-z]+\.[A-z]{2,4}$/i;
        if (this.email.search(pattern)==-1){
            document.write("Enter a vaild email address");
        } else {
            document.write("Vaild email address");
        }
    }

}