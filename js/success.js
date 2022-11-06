$(document).ready(function{
$("form").submit(function(event){
    let myAnswers=$(this).serialize();
    console.log(myAnswers);
    event.preventDefault();

});

    

