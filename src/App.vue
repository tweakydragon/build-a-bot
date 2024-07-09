<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png"  alt="logo">
          Build a Bot!
        </li>
      </ul>
    </nav>
  </header>
  <main>
  <!-- <HomePage msg="Welcome to Your Vue.js App"/> -->
   <RobotBuilder />
</main>
</template>

<script>
// import HomePage from './home/HomePage.vue';

import RobotBuilder from './build/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  background-attachment: fixed;
  background: linear-gradient(to bottom, #555, #999);
}

main {
  margin: 0 auto;
  width: 1400px;
  padding: 30px;
  background-color: white;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1460px;
  margin: 0 auto;
}

ul {
  display: flex;
  padding: 3px;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
