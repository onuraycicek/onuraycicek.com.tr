<template>
 <div>
  <div class="background-logo"></div>
	<div class="top-line"></div>
	<div>
		<h1>{{title}}</h1>
		<hr style="width: 13rem;">
	</div>
	<h2>Onur Ayçiçek</h2>
	<div class="content-container">
			<div class="p-100">
		  	<p v-html="description"></p>
			</div>

			<div class="skills-and-projects">
			<div v-for="(skillsAndProjectItem,skillsAndProjectItemName) in skillsAndProjects" :key="skillsAndProjectItemName">
				<h5>{{skillsAndProjectItem.info.title}}</h5>
				<div :class="skillsAndProjectItemName+'-container'">
          <template v-if="skillsAndProjectItemName=='skills'">
           	<div v-for="(skill,skillName) in skillsAndProjectItem.content" :key="skillName" class="skills-group">
	            <skills-item v-for="(skillContent,skillContentName) in skill" 
              :key="skillContentName" :name="skillContent.name?skillContent.name:skillContentName" 
              :dark="skillContent.dark"
              :img="skillContent.img"></skills-item>
            </div>
          </template>
          <template v-else>
            <projects-item v-for="(project,projectName) in skillsAndProjectItem.content" :key="projectName"
            :dark="project.dark"
            :img="project.img"
            :url="project.url"
             :title="project.title"></projects-item>
          </template>
				
			</div>
			</div>
			
		</div>
		<div class="social-media-container">
      <social-media-item :class="socialMediaName.toLowerCase()" v-for="(socialMedia,socialMediaName) in socialMedias" :key="socialMediaName" :name="socialMediaName" :url="socialMedia.url"></social-media-item>
		</div>
 </div>
 </div>
</template>

<script>
import SkillsItem from '../components/SkillsItem.vue'
export default {
  components: { SkillsItem },
  data() {
    return {
      title:"WEB GELİŞTİRİCİSİ",
      description:"Sektörde 5 yıllık deneyime sahibim. HTML, CSS, SCSS, JS, NodeJS, VueJS, PHP ve Python dil/frameworklerine hakimim. Mysql, MongoDB ve Redis ile çalışma yaptım. Daha önceki projelerimde Google Cloud Run, Heroku, Vercel, Github Pages ve özel sunucu ortamlarına deployment gerçekleştirdim. RabbitMQ deneyimim mevcut. Ci/cd süreçleri için aktif olarak Circleci, Unit testler için Mocha kullanıyorum. Git komutlarına hakimim. Mikroservis mimarisi hakkında deneyim sahibiyim. Rest api ile aktif geliştirdiğim uygulamalar mevcut.<br><br>Kozmonos.com ve Dijitalinmerkezi.com sitelerinin sahibiyim.",
      skillsAndProjects:{
        skills:{
            info:{
              title:"Deneyimler",
            },
          content:{
            languages:{
                HTML:{
                  img:"html.png",
                },
                CSS:{
                  img:"css.png",
                },
                Javascript:{
                  img:"js.png",
                },
                vuejs:{
                  img:"vuejs.png",
                },
                nodejs:{
                  img:"nodejs.svg",
                },
                php:{
                  img:"php.png",
                },
                python:{
                  img:"python.png",
                },
              },
            databases:{
              MySQL:{
                img:"mysql.png",
              },
              MongoDB:{
                img:"mongodb.png",
              },
              Redis:{
                img:"redis.png",
              },
          },
          deployment:{
            Heroku:{
              img:"heroku.png",
            },
            Google_Cloud_Run:{
              name:"Google<br>Cloud Run",
              img:"google-cloud-run.png",
            },
            Vercel:{
              img:"vercel.svg",
              dark:true,
            },
            Github_Pages:{
              name:"Github<br>Pages",
              img:"github-pages.png",
            },
            Server:{
                img:"server.png",
              },
          },
              Web_Architecture:{
              Rest:{
                img:"rest.png",
              },
                 Mikroservis:{
                img:"microservice.png",
              dark:true,
              },
          },
          Modern_Web_Technologies:{
              Git:{
                img:"git.png",
              },
              Mocha:{
                img:"mocha.png",
              },
              CircleCI:{
                img:"Circleci.png",
              }, 
              RabbitMQ:{
                img:"rabbitmq.svg",
              },
          },
        },
      },
      projects:{
        info:{
          title:"Projeler",
        },
        content:[
          {
            img:"https://www.kozmonos.com/android-chrome-512x512.png",
            title:"Kozmonos",
            url:"https://kozmonos.com",
          },
          {
            img:"https://www.kozmonos.com/android-chrome-512x512.png",
            title:"Kozmonos Github",
            url:"https://github.com/kozmonos"
          },
          {
            img:"./assets/logo.svg",
            title:"Onur Ayçiçek Github",
            url:"https://github.com/onuraycicek",
            dark:true
          }
        ]
      },
    },
      socialMedias:{
          Twitter:{
            url:"https://twitter.com/OnurAycicek",
          },
          linkedin:{
            url:"https://www.linkedin.com/in/onur-aycicek",
          },
          telegram:{
            url:"https://t.me/kozmonos",
          },
          github:{
            url:"https://github.com/onuraycicek"
          },
        },
      }
    },
  }
</script>
