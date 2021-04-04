// check off specific todos by clickin
$("ul").on("click" ,"li" , function(){
	$(this).toggleClass("completed");
});
//click on x to delete
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500 , function(){
$(this).remove();
  });
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
if(event.which === 13){
	//grabbing new todo text from input
	var todotext = $(this).val();
	//create new li and add to ul
$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+ todotext + "</li>");
	}
});

$(".fa fa-plus").click(function(){
	$("input[type='text']").remove();
});
