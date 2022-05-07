$(".img-video-container").mouseenter(function() {
  var childVideo = $(this).find("video")[0];
  $(".img-video-container").addClass("blur");
  $(this).removeClass("blur");
  setTimeout(function() {childVideo.play();} ,875);

}).mouseleave(function() {
    var childVideo = $(this).find("video")[0];
    $(".img-video-container").removeClass("blur");
    childVideo.pause();
    setTimeout(function() {childVideo.currentTime = 0;} ,400);
    childVideo.muted = true;
  });

$(".img-video-container").click(function() {
  $(this).find("video")[0].muted = false;
});

// fadeinouteffect
// $(this).children(".img-fluid").stop(true, true).delay(200).fadeTo(400, 0.01);
// $(this).children(".img-fluid").stop(true, true).fadeTo(400, 1);
