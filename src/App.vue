<template>
  <div id="app">
    <div class="headers">
      <div>
        <h1>Employees</h1>
      </div>
      <div>
        <h1>Details</h1>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
img {
  border-radius: 100%;
  max-width: 50px;
}
.headers {
  height: 100%;
  display: flex;
  justify-content: space-around;
  div {
    width: 100%;
    text-align: center;
  }
  div:nth-child(1) {
    background: gainsboro;
  }
}

#app {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10vh auto;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  * {
    padding: 0;
    margin: 0;
  }
  a {
    color: black;

    &:link,
    &:visited {
      color: inherit;
    }
  }

  // background-color: rgb(93, 93, 93);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
