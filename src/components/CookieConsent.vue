<template>
  <div class="cookieConsent" v-if="!isAccepted">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe deserunt labore aliquam consequuntur, iure ratione veritatis iusto neque asperiores vero.</p>
    <button @click="accept()">Ok, I consent!</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAccepted: sessionStorage.getItem("cookie-consent") ? true : false
    };
  },
  methods: {
    accept() {
      console.log("Jag accepterar");
      sessionStorage.setItem("cookie-consent", "true");
      this.isAccepted = true;
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.cookieConsent {
  background-color: rgba($color: #000000, $alpha: 0.9);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>