<template>
	<div class="skills-item-container">
				<img 
              :class="dark?'bg-white':''"
				:src="'../assets/'+img" alt="html" title="html">
				<span v-html="nameManipulation()">
				</span>
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
	},
	methods: {
		changeUnderlineToSpace(name){
			return name.includes("_")?name.replace(/_/g," "):name;
		},
		nameManipulation(){
			return this.changeUnderlineToSpace(this.name);
		}
	},
}
</script>