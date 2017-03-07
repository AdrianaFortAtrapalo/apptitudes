<template>
  	<div>
	  	{{ msg }}
		<span class="hello" v-on:click="sss">ssss</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'Hello world!'
			}
		},
		methods:{
			sss: ()=>{
				alert("click");
			}
		}
	}
</script> 