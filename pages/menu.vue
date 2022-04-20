<template>
  <div class="vh-100">
    <Header :info="info" />
    <div class="name shadow w-75 p-2 text-center bg-white">
      <span
        ><input
          type="text"
          class="w-100 border-none"
          placeholder="🍳 Dashboard Search"
        />
      </span>
    </div>

    <div class="row m-0 mt-5 p-2 pt-2">
      <div class="col-5 card-content mx-auto p-2 shadow text-center" @click="$router.push('/dashboard/alphabet')">
        <div class="card-head">
          <img src="~assets/kidteachers/alphabet.jpg" class="cardimg" />
        </div>
        <div class="card-body small">Alphabet</div>
      </div>

      <div class="col-5 mx-auto card-content p-2 shadow text-center" @click="$router.push('/dashboard/number')">
        <div class="card-head">
          <img src="~assets/kidteachers/number.jpg" class="cardimg" />
        </div>
        <div class="card-body small">Numbers</div>
      </div>

      <div class="col-5 mx-auto card-content p-2 mt-4 shadow text-center" @click="$router.push('/dashboard/romanfigure')">
        <div class="card-head">
          <img src="~assets/kidteachers/romanfigure.png" class="cardimg" />
        </div>
        <div class="card-body small">Romanfigure</div>
      </div>

      <div class="col-5 mx-auto card-content p-2 mt-4 shadow text-center" @click="$router.push('/dashboard/basic')">
        <div class="card-head">
          <img src="~assets/kidteachers/basic.jpg" class="cardimg" />
        </div>
        <div class="card-body small">Basic</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/auth-header'
import Loader from './Loader'
export default {
  components: {
    Header,
    Loader,
  },
  data() {
    return {
      info: {
        name: 'Dashboard',
        short_name: 'Learn without a teacher',
        details:
          'Tutorials, Visual Learning, Audio Learning and Physical Learning all in one place.',
        icon: 'fa-pencil',
        dashboard: true,
      },
    }
  },

  mounted() {},

  methods: {},
}
</script>
<style>
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
.btn-outline-warning:focus {
  color: var(--white) !important;
  border-color: var(--orange) !important;
  background: var(--orange) !important;
}
</style>
