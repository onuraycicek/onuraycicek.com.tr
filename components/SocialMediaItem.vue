<template>
<a :href="url" class="social-media-item">
				<component :is="'social-media-icon-'+name"/>
		</a>
</template>
<script>
export default {
	props:{
		name:{
			type:String,
		},
		url:{
			type:String,
		}
	}
}
</script>