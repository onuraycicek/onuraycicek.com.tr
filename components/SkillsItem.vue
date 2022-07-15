<template>
	<div class="skills-item-container">
				<img 
              :class="dark?'bg-white':''"
				:src="'../assets/'+img" alt="html" title="html">
				{{name.includes("_")?name.replace(/_/g," "):name}}
	</div>
</template>
<script>
export default {
	props:{
		name:{
			type:String,
		},
		img:{
			type:String,
		},
		dark:{
			type:Boolean
		}
	}
}
</script>