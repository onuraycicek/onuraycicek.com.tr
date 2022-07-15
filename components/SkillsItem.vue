<template>
	<div class="skills-item-container">
				<img 
              :class="dark?'bg-white':''"
				:src="'../assets/'+img" alt="html" title="html">
				{{name}}
				<!-- {{name.includes("_")?name.replaceAll("_"," "):name}} -->
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