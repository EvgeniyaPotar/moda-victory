<template>
    <div class="user-login-content"
         @click="closeModal"
    >

      <form action="action_page.php"
            v-bind:style="{display:display}"
            id="modal"
      >
        <div class="header-container">
          <span @click="closeModal" class="close" title="Close">&times;</span>
          <div><i class="fa-solid fa-right-to-bracket"></i></div>
        </div>

        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>

        <div class="container" style="background-color:#f1f1f1">
          <button @click="$emit('close')"  type="button" class="cancel-btn">Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props:{
   show: Boolean
  },

  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #888888;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancel-btn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.header-container {
  text-align: center;
  margin: 24px 0 12px 0;
}

.avatar {
  text-align: center;
  font-weight: bold;
}

/* Кнопка закрытия (x) */
.close {
  position: absolute;
  right: 25px;
  top: 22px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancel-btn {
    width: 100%;
  }
}
</style>