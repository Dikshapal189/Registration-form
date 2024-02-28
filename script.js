function RegistrationForm(){
    const userName= document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const place = document.getElementById("place").value;
    const hobby = document.getElementById("hobby").value;

    if(userName == "" || userName == null||age == "" || age == null||place == "" || place == null ||hobby == "" || hobby == null){
      document.getElementById("username-error").innerHTML = "username is mendatory";
      return false;
    }
  if(userName.length < 7) {
      document.getElementById("username-error").innerHTML = "character atleast more than 7 ";
      return false;
  }

  if(isNaN(age)){
    document.getElementById("age-error").innerHTML ="only takes number";
    return false;
  }
}