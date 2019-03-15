$(document).ready(function(){
  $("#btn").on("click",function(){
  var value=document.getElementById("id");
var query=value.value;
    $.ajax({   url:"https://en.wikipedia.org/w/api.php?action=opensearch&search="+query+"&limit=10&namespace=0&format=json",
dataType:"jsonp",
//jsonpCallback:"renderhtml",
success: function (data){
  var html="";
  for(var i=0;i<data[1].length;i++)
  {
   html += "<h3>"+ data[1][i]+"</h3>"+data[2][i]+"<br><a href="+data[3][i]+">"+data[3][i]+"</a><br><br><br>";}
  $("#main").html(html);
}
});
});    
  });