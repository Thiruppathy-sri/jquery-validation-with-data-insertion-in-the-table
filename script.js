$('#register-form').on('submit', function(e){
    e.preventDefault();
    const first_name = $('#first_name').val();
    const last_name = $('#last_name').val();
    const email = $('#email').val();
    const country = $('#country').val();
    const check = $('#check');
    const count = $('#myTable tr').length;
    if (first_name != "" && last_name != "" && last_name.length > 5 && email != "" && country != "" && check.is(":checked")) {
       $('#myTable tbody').append('<tr class="child"><td>' + count + '</td><td>' + first_name + '</td><td>' + last_name + '</td><td>' + email + '</td><td>' + country + '</td></tr>');
    }
 });

 $(document).ready(function ($) {
    $("#register-form").validate({
       rules: {
          firstname: "required",
          lastname: {
             required: true,
             minlength: 6
          },
          email: "required",
          country: "required",
          check: "required"
       },
       messages: {
          firstname: "Please enter your Name",
          lastname: {
             required: "Please enter your Name",
             minlength: "Your name must be at least 6 characters long"
          },
          email: "Please enter your Email",
          country: "Please select your country",
          check: "This field is required"
       },
       errorPlacement: function (error, element) {
          if (element.is(":radio")) {
             error.appendTo(element.parents('.form-group'));
          }
          else { // This is the default behavior 
             error.insertAfter(element);
          }
       },
       submitHandler: function (form) {
          form.submit();
       }
    });
 });