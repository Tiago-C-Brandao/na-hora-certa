<template>
    <div>
      <div class="container">
        <div class="login">
          <label>Username</label>
          <input class="input-form" v-model="username" type="text" />
          <label>Password</label>
          <input class="input-form" v-model="password" type="text" />
          <button class="btn-send-form" @click="addUser()">CADASTRAR</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({store}) {
        return{
            users: await store.dispatch('users/getUsers')
        }
    },

    data() {
      return {
          username: '',
          password: '',
      }
    },
  
    methods: {
      addUser() {
        const data = {
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('users/addUser', data)
        .then((response) => {
          this.users.push(response);
          this.username = '',
          this.password = ''
        })
      }
    },
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
    height: 60%;
    left: 35%;
    top: 150px;
    border-radius: 20px;
  }
  .login {
    position: relative;
    margin-top: 15%;
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
  .btn-send-form {
    display: block;
    height: 55px;
    width: 400px;
    border-radius: 15px;
    border: none;
    margin-top: 55px;
    cursor: pointer;
    background: #114b5f;
    color: #fff;
    font-size: large;
  }
  </style>