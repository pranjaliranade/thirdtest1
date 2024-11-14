/*// Part 1:
var vid = document.querySelector("video");
var last_media_time, last_frame_num, fps;
var fps_rounder = [];
var frame_not_seeked = true;
// Part 2 (with some modifications):
function ticker(useless, metadata) {
  var media_time_diff = Math.abs(metadata.mediaTime - last_media_time);
  var frame_num_diff = Math.abs(metadata.presentedFrames - last_frame_num);
  var diff = media_time_diff / frame_num_diff;
  if (
    diff &&
    diff < 1 &&
    frame_not_seeked &&
    fps_rounder.length < 50 &&
    vid.playbackRate === 1 &&
    document.hasFocus()
  ) {
    fps_rounder.push(diff);
    fps = Math.round(1 / get_fps_average());
    document.querySelector("p").textContent = "FPS: " + fps + ", certainty: " + fps_rounder.length * 2 + "%";
  }
  frame_not_seeked = true;
  last_media_time = metadata.mediaTime;
  last_frame_num = metadata.presentedFrames;
  vid.requestVideoFrameCallback(ticker);
}
vid.requestVideoFrameCallback(ticker);
// Part 3:
vid.addEventListener("seeked", function () {
  fps_rounder.pop();
  frame_not_seeked = false;
});
// Part 4:
function get_fps_average() {
  return fps_rounder.reduce((a, b) => a + b) / fps_rounder.length;
}
<p>The FPS will appear here!</p>
<video id="myVideo" width="320" height="176" controls>
<source src="https://www.w3schools.com/tags/mov_bbb.mp4" type="video/mp4">
</video>*/