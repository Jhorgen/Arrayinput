$(document).ready(function() {
  console.log("hi");
  $("#form1").submit(function(event) {
    event.preventDefault();
    var favorite1 = $('#fav1').val();
    var favorite2 = $('#fav2').val();
    var favorite3 = $('#fav3').val();
    var arr = [];
    arr.push(favorite1,favorite2,favorite3);
    $("#1").append(arr[0]);
    $("#2").append(arr[1]);
    $("#3").append(arr[2]);
    console.log(arr);
  });
});
