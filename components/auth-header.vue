<template>
  <div>
    <div class="header bg-primary shadow pt-5 p-2">
      <span @click="$router.back()" class="navbar-brand">
        <i class="fa fa-arrow-left text-white" aria-hidden="true"></i>
      </span>
      <nuxt-link
        to="/"
        class="btn btn-outline-light shadow btn-sm l-0"
        v-if="info.dashboard"
        >Home <i class="fa fa-home" aria-hidden="true"></i
      ></nuxt-link>

      <h5 class="text-white">{{ info.short_name }}</h5>
      <p class="text-white">{{ info.details }}</p>
      <div
        class="name shadow w-75 p-2 text-center text-dark"
        v-if="!info.dashboard"
      >
        {{ info.name }} <i :class="`fa  ml-2 ${info.icon}`"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
}
</script>
<style>
.l-0 {
  position: absolute;
  right: 3px;
  top: 10px;
}
.header {
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  height: 200px;
}
.navbar-brand > .fa {
  position: absolute;
  top: 5px;
  padding: 4px;
}
.name {
  position: absolute;
  top: 180px;
  align-self: center !important;
  background: #fff;
  border-radius: 10px;
  left: 12.5%;
}
</style>
