<template>
	<a :href="url" class="project">
					<img :class="dark?'black-bg':''" :src="img" :alt="title" :title="title">
					<div class="projects-hover-item"></div>
					{{title}}
		</a>
</template>
<script>
export default {
	props:{
		img:{
			type:String,
		},
		title:{
			type:String,
		},
		dark:{
			type:Boolean
		},
		url:{
			type:String
		}
	}
}
</script>