$(document).ready(function(){
  $("#formId").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var born = $("#born").val();
    var type = $("#type").val();
    var language = $("input:radio[name=language]:checked").val();
    var music = $("#genre").val()
    var favoriteColor = $("#color").val();
    console.log("Name: " + name + " born: " + born + " type " + type + " language " + language + " music " + music + " color " + favoriteColor);
  });
});
