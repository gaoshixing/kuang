<template>
	<div class="yeheng">
		<p>用户名: <input type="text" v-model="userN"></p>
		<p>　密码: <input type="text"  v-model="passW" ></p>
		<button @click="install">注册</button> 
		<button @click="login">登录</button>

	</div>
</template>

<script>
import valid, {
		errors,
		LOGIN
	} from "../lib/request.js";
	import {mapMutations} from 'vuex'

export default {
	data () {
		return {
			userN: '',
			passW: '',
		}
	},
	
	methods: {
		...mapMutations(['updateUserInfo']),
		install() {
			if(!this.userN||!this.passW) {
				alert('填写用户名或密码')
				return
			}
			this.loginF('reg')
		},

		login() {
			if(!this.userN||!this.passW) {
				alert('填写用户名或密码')
				return
			}
			this.loginF('login')
		},

		loginF(act) {
			let obj = {
				act : act,
				user: this.userN,
				pass: this.passW
			}
			LOGIN.login(obj).then(
				res => {
					if(res.data.msg) {
						this.updateUserInfo(res.data)
						this.$router.push({
							name: 'succ'
						})
					}
				}
			)
        
		}

	}
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
