<template>
  <div>
    <div class="container">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
        class="logo"
      />
      <div class="login">
        <label>Username</label>
        <input class="input-form" v-model="login.username" type="text" />
        <label>Password</label>
        <input class="input-form" v-model="password" type="text" />
        <a class="forget" href="">Esqueceu a senha?</a>
        <button class="btn-send-form" @click="handleForm()">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },

  methods: {
    handleForm(){
      console.log(this.login.username)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #114b5f;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.container {
  position: absolute;
  background: #028090;
  width: 30%;
  height: 100%;
  left: 70%;
}
.logo {
  position: relative;
  top: 10%;
  left: 35%;
  border-radius: 50%;
}
.login {
  position: relative;
  margin-top: 25%;
  margin-left: 16%;
  color: #114b5f;
  font-size: 23px;
}
.input-form {
  display: block;
  height: 55px;
  width: 400px;
  border-radius: 15px;
  border: none;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 20px;
}
.forget {
  position: relative;
  text-decoration: none;
  color: #114b5f;
  margin-left: 190px;
  top: -15px;
}
.btn-send-form {
  display: block;
  height: 55px;
  width: 400px;
  border-radius: 15px;
  border: none;
  margin-top: 20px;
  margin-bottom: 100px;
  cursor: pointer;
  background: #114b5f;
  color: #fff;
  font-size: large;
}
</style>