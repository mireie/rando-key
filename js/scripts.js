function keyPick() {
  const keyList = ["A", "A<span class=\"tiny\">\u266F</span>/B<span class=\"tiny\">\u266D</span>", "B", "C", "C<span class=\"tiny\">\u266F</span>/D<span class=\"tiny\">\u266D</span>", "D", "D<span class=\"tiny\">\u266F</span>/E<span class=\"tiny\">\u266D</span>", "E", "F", "F<span class=\"tiny\">\u266F</span>/G<span class=\"tiny\">\u266D</span>", "G", "G<span class=\"tiny\">\u266F</span>/A<span class=\"tiny\">\u266D</span>"];
  return keyList[Math.floor((Math.random() * 12))];
}

$(document).ready(function () {
  $("#random-key").html(keyPick());
  $("body").click(function () {
    $("#random-key").html(keyPick());
  });
});
