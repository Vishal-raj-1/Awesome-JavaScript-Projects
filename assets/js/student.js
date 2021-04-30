(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();
var usersList=JSON.parse(localStorage.getItem("users") || "[]");
if(usersList.length > 0)
{
  for(let i=0;i<usersList.length;i++)
  {
    $('.userlists').append("<div style='border:1px solid #558000;' class='row users-item'><div style='padding:5px 5px' class='col-md-8'><span style='font-size: 15px;font-weight: 600'>"+usersList[i].name+"</span><br><span style='font-size: 15px;'>"+usersList[i].gender+"</span><br><span style='font-size: 15px;'>"+usersList[i].email+"</span><br><a style='font-size: 15px;' href='"+usersList[i].website+"'>"+usersList[i].website+"</a><br><span style='font-size: 15px;'>"+usersList[i].skills+"</span></div><div style='padding:10px 10px;border-left:1px solid #558000' class='col-md-4'><img style='width:100%;height:100%' src='"+usersList[i].imagelink+"'></div></div>");
  }
  
}
$('#button-clear').click(function(){
  $('input[type="checkbox"]').each(function() {
      this.checked = false;
    });
  $('input[type="radio"]').each(function() {
      this.checked = false;
    });
  $('#inputName3').val('');
  $('#inputEmail3').val('');
  $('#inputWebsite3').val('');
  $('#inputImageLink3').val('');
})
$('#button-submit').click(function(){
  if($('input[type=checkbox]:checked').length <= 0)
  {
    $('#check-feed').css('display','block');
  }
  var name=$('#inputName3').val();
  var email=$('#inputEmail3').val();
  var website=$('#inputWebsite3').val();
  var imagelink=$('#inputImageLink3').val();
  var arr=[];
  var skills='';
    $('input[type=checkbox]:checked').each(function() {
   arr.push(this.value);
  });
    for(let i=0;i<arr.length;i++)
    {
      if(i == arr.length-1)
      {
        skills=skills+arr[i];
        break;
      }
      skills=skills+arr[i]+',';
    }
    console.log(validateEmail(email));
  var gender=$('input[type=radio]:checked').attr('value');
  if($('input[type=checkbox]:checked').length > 0 && name!='' && email!='' && validateEmail(email) && website!='' && imagelink!='' && $('input[type=radio]:checked').length == 1)
  {
    var b=[
    {
      name:name,
      email:email,
      website:website,
      imagelink:imagelink,
      gender:gender,
      skills:skills
    }
    ]
    var users=users = JSON.parse(localStorage.getItem("users") || "[]");
    if(users.length > 0)
    {
      users.push(b[0]);
      localStorage.setItem('users',JSON.stringify(users));
    }
    else{
      localStorage.setItem('users',JSON.stringify(b));
    }
    
  }
});
function checkRequired() {
    if ($('input[type=checkbox]:checked').length > 0) {  // the "> 0" part is unnecessary, actually
        $('input[type=checkbox]').prop('required', false);
        $('#check-feed').css('display','none');
    } else {
        $('input[type=checkbox]').prop('required', true);
        $('#check-feed').css('display','block');
    }

}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}