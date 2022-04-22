<template>
  <div class="vh-100">
    <Header :info="info" />
    <div class="name shadow row w-75 m-0 text-center bg-white">
      <span class="col-6 p-2 clickHover" @click="voice()">
        <i class="fa fa-file-audio-o rounded-lg" aria-hidden="true"></i>
        <small>Audio Learning</small>
      </span>
      <span class="col-6 p-2 border-left clickHover">
        <i class="fa fa-play rounded-lg" aria-hidden="true"></i>
        <small>Visual Learning</small>
      </span>
    </div> 
    <div class="row m-0 mt-5 p-2 pt-2">
      <div class="col-5 mx-auto card-content p-2 mt-4 shadow text-center">
        <div class="card-head">
          <h1 class="headText">1</h1>
        </div>
        <div class="card-body small ">One</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/auth-header'
import data from '../info/data.json'

export default {
  components: {
    Header,
  },
  data() {
    return {
      info: {
        name: 'Dashboard',
        short_name: 'Learn Alphabet',
        details:
          'Tutorials, Visual Learning, Audio Learning and Physical Learning all in one place.',
        icon: 'fa-pencil',
        dashboard: true,
      },
      data,
    }
  },

  methods: {
    voice(text) {
      var msg = new SpeechSynthesisUtterance()
      var voices = window.speechSynthesis.getVoices()
      msg.voice = voices[6]
      msg.volume = 1 // From 0 to 1
      msg.rate = 1 // From 0.1 to 10
      msg.pitch = 0 // From 0 to 2
      msg.text = text
      msg.lang = 'en-US'
      speechSynthesis.speak(msg)
    },
  },
}
</script>
<style>
.small{
  text-decoration:u
}
.headText {
  font-size: 70px;
}
.clickHover:hover,
.clickHover:active,
.clickHover:focus {
  color: var(--primary) !important;
}
small {
  font-size: 11px;
}
.cardimg {
  width: 100%;
  border-radius: 4px;
}
.card-content {
  border-radius: 10px;
}
.card-content:hover {
  background: whitesmoke;
}
.vh-100 {
  height: 100vh;
}
.small {
  font-size: 12px;
}

.card-img,
.card-img-top,
.card-img-bottom {
  height: 100px;
}
.recomended,
.applied {
  display: flex;
  overflow-x: scroll !important;
  width: 100%;
}
.card {
  display: inline-block;
  min-width: 50% !important;
}
.btn-outline-warning {
  color: var(--orange) !important;
  border-color: var(--orange) !important;
  background: white !important;
}
.btn-outline-warning:hover,
.btn-outline-warning:focus,
.hover:hover {
  color: var(--white) !important;
  border-color: var(--primary) !important;
  background: var(--primary) !important;
}
</style>
