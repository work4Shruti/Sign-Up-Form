function validateForm(){
  var fname = $(".Firstname").val();
  var lname = $(".Lastname").val();
  var email = $(".Email").val();
  var password = $(".Password").val();
  var formDetails = {"Firstname":fname,"Lastname":lname,"Email":email,"Password":password};

  for (var key in formDetails) {
    var value = formDetails[key];
    if (value =="" || value==null) {
      $("." + key).addClass("form-error-state");
      $("."+key+"-cannot-be-empty").html(key + " cannot be empty");
    }
    else {
      $("."+key+"-cannot-be-empty").html("");
      $("." + key).removeClass("form-error-state");
    }
  }
  if (!$(".form-element").hasClass("form-error-state")) {
    $(".thank-you-for-registering").html("Thank You for Registering...!!!");
  }
}
