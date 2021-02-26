<template >
  <div>
    <p>m3u8视频加密</p>
    <video
      id="myVideo"
      class="video-js vjs-default-skin vjs-big-play-centered"
      controls
    ></video>
  </div>
</template>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.myVideo = videojs("myVideo", {
        bigPlayButton: true,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
        hls: {
          withCredentials: true
        }
      });
      this.myVideo.src({
        // src: "http://172.16.3.7:7481/new-bucket-fd47fd81/8b5fb021a1c949b1b011a74397264916_5629_1614322083881/8b5fb021a1c949b1b011a74397264916_5629_1614322083881.m3u8",
        src: "http://172.16.3.7:7481/new-bucket-fd47fd81/8b5fb021a1c949b1b011a74397264916_9846_1614326027324/8b5fb021a1c949b1b011a74397264916_9846_1614326027324.m3u8",
        type: "application/x-mpegURL"
      })
      this.myVideo.play()
    }
  },
}
</script>