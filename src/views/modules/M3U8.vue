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
import * as API from "@/api/api.video.js"
import Hls from "hls.js"
export default {
  data () {
    return {
    }
  },
  mounted () {
    // this.init()
    this.initHls()
  },
  methods: {
    async init () {
      await this.getVideoKeys()
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
        src: this.m3u8Key,
        // src: "http://172.16.3.7:7481/new-bucket-fd47fd81/8b5fb021a1c949b1b011a74397264916_5629_1614322083881/8b5fb021a1c949b1b011a74397264916_5629_1614322083881.m3u8",
        // src: "http://172.16.3.7:7481/new-bucket-fd47fd81/8b5fb021a1c949b1b011a74397264916_9846_1614326027324/8b5fb021a1c949b1b011a74397264916_9846_1614326027324.m3u8",
        type: "application/x-mpegURL"
      })
      console.log(this.myVideo)
      // this.myVideo.play()
    },
    async getVideoKeys () {
      const response = await API.getVideoKey({
        fileName: "地球脉动2-01.mkv",
        fileNo: "5629",
        flag: "m3u8",
      })
      if (response.resultCode === 200) {
        this.m3u8Key = response.data
      }
    },
    async initHls () {
      await this.getVideoKeys()
      var video = document.getElementById('myVideo');
      var videoSrc = this.m3u8Key
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
      }
    }
  },
}
</script>
<style lang="less">
.video-js {
  width: 800px;
  height: 400px;
}
</style>