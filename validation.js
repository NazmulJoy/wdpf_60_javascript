class Validation {
    constructor(email) {
        this.email= email;
    }
    validate(){
         var pattern =/[A-z0-9._]+@[A-z0-9]+\.[A-z]{2,4}$/i;
         if(this.email.search(pattern)==-1){
            alert("Please enter a valid email address");
         } 
         else {
            alert("valid email Address");
         }
    }
}