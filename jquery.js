$(document).ready(function () {
  //   Make a profile with the click of the submit button

  $("#submit").click(function () {
    if (
      $("#username").val() === "" ||
      $("#password").val() === "" ||
      $("#phone").val() === ""
    ) {
      $(".error").text("Please fill out all the required form fields");
    } else {
      //     Get the input values of the form fields
      var username = $("#username").val();
      var password = $("#password").val();
      var phone = $("#phone").val();
      var bio = $("#bio").val();

      //     Create the user information
      var edit = $("<button></button>").text("edit").addClass("button edit");
      var close = $("<button></button>").text("close").addClass("button close");
      var usernameValue = $("<div></div>").text(username);
      var passwordValue = $("<div></div>").text(password);
      var phoneValue = $("<div></div>").text(phone);
      var bioValue = $("<div></div>").text(bio);

      //     Clicking on edit will fill the form fields with relevent values to update the same
      edit.click(function () {
        $("#username").val(usernameValue.text());
        $("#password").val(passwordValue.text());
        $("#phone").val(phoneValue.text());
        $("#bio").val(bioValue.text());

        

        $("#submit").hide();
        var update = $("<button></button>")
          .text("Update your profile")
          .addClass("button update after-update");

        $("#username, #password, #phone, #bio").css(
          "border",
          "1px dotted blue"
        );
        $("#form>.container.submit").append(update);
        $("body").on("click", ".update", function (e) {
          e.preventDefault();
          
// NEW UPDATED VALUES START

        var updatedUsername = $("#username").val();
        var updatedPassword = $("#password").val();
        var updatedPhone = $("#phone").val();
        var updatedBio = $("#bio").val();
        $(this).parent().children("div:eq(1)").text(updatedUsername);
        $(this).parent().children("div:eq(2)").text(updatedPassword);
        $(this).parent().children("div:eq(3)").text(updatedPhone);
        $(this).parent().children("div:eq(4)").text(updatedBio);

        // NEW UPDATED VALUES END
            
          // Remove all input borders
          $("#username, #password, #phone").css({
            "border": "2px solid #999",
            "border-top": "none",
            "border-left": "none",
            "border-right": "none"
          });
          $("#bio").css("border", "1px solid darkgrey");

          //     Clear all input values after updating user profile
          $("#username").val("");
          $("#password").val("");
          $("#phone").val("");
          $("#bio").val("");


          $(".update").hide();
          $("#submit").show();
        });
      });

      //     Close the profile on clicking close
      close.click(function () {
        $(close).parent().fadeOut();
      });

      //     Create the user profile container and append to it all user info / updated info
      var profile = $("<div></div>").addClass("profile");
      var profileInfo = $(profile).append(
        edit,
        close,
        usernameValue,
        passwordValue,
        phoneValue,
        bioValue
      );
      //     Append the profile to body element
      $(".body").after(profileInfo);

      //     Clear all input values after creating user profile
      $("#username").val("");
      $("#password").val("");
      $("#phone").val("");
      $("#bio").val("");

      //       Remove the error at last
      $(".error").text("");
    }
  });
});
