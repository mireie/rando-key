function keyPick() {
  const keyList = ["A", "A\u266F/B\u266D", "B", "C", "C\u266F/D\u266D", "D", "D\u266F/E\u266D", "E", "F", "F\u266F/G\u266D", "G", "G\u266F/A\u266D"];
  return keyList[Math.floor((Math.random() * 12))];
}

$(document).ready(function () {
  $("#random-key").text(keyPick());
  $("body").click(function () {
    $("#random-key").text(keyPick());
  });
});
