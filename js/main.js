
//type item into input
//user clicks on "add to list" to add item into array
//item is stored in array
//it is displayed
//user has ability to edit and deleted item on list
// user has the ability to cross out completed todo's
//user has ability to clear all completed tasks
//user has ability to clear all items on list

$(document).ready(function(){
	$("#add").on("click",function(){
  	var entered = $("#bar").val()

    $("#bar").val("");
    $("#items").append("<li>"+entered+'<button class="edit">Edit</button> <button class="gone">Delete</button></li>');
      $(".edit").on("click",function(){

        //open li and edit text

        $("li").append("remove text");

      });
      $(".gone").on("click",function(){

        //target individual and delete it

        //$(li)

      });
  });
    $("#cList").on('click', function(){
//items on ul will be deleted on click
      $("li").remove();

    });

    $("#comp").on("click", function(){
//items will be crossed out on click
      $('li').css('textDecoration', 'line-through');




    });

});


console.log("working");
