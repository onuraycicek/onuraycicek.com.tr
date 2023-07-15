<template>
  <div>
    <div class="background-logo"></div>
    <div class="top-line"></div>
    <div>
      <h1>{{ title }}</h1>
      <hr style="width: 13rem" />
    </div>
    <h2>Onur Ayçiçek</h2>
    <div class="content-container">
      <div class="p-100">
        <p v-html="description"></p>
      </div>

      <div class="skills-and-projects">
        <div
          v-for="(
            skillsAndProjectItem, skillsAndProjectItemName
          ) in skillsAndProjects"
          :key="skillsAndProjectItemName"
        >
          <h5>{{ skillsAndProjectItem.info.title }}</h5>
          <div :class="camelToSnake(skillsAndProjectItemName) + '-container'">
            <template v-if="skillsAndProjectItemName == 'skills'">
              <div
                v-for="(skill, skillName) in skillsAndProjectItem.content"
                :key="skillName"
                class="skills-group"
              >
                <skills-item
                  v-for="(skillContent, skillContentName) in skill"
                  :key="skillContentName"
                  :name="
                    skillContent.name ? skillContent.name : skillContentName
                  "
                  :dark="skillContent.dark"
                  :img="skillContent.img"
                ></skills-item>
              </div>
            </template>
            <template v-else>
              <github-item
                v-for="(project, projectName) in skillsAndProjectItem.content"
                :key="projectName"
                :dark="project.dark"
                :img="project.img"
                :url="project.url"
                :title="project.title"
              ></github-item>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="projects">
      <h2>Web Projeleri</h2>
      <project-item
        v-for="(project, projectName) in projects"
        :key="projectName"
        :dark="project.dark"
        :img="project.img"
        :url="project.url"
        :title="project.title"
        :description="project.description"
        :badges="project.badges"
        :github="project.github"
        :technologies="project.technologies"
        :color="project.color"
      ></project-item>
    </div>
    <div class="social-media-container">
      <social-media-item
        :class="socialMediaName.toLowerCase()"
        v-for="(socialMedia, socialMediaName) in socialMedias"
        :key="socialMediaName"
        :name="socialMediaName"
        :url="socialMedia.url"
      ></social-media-item>
    </div>
  </div>
</template>

<script>
import ProjectItem from "../components/ProjectItem.vue";
import SkillsItem from "../components/SkillsItem.vue";
export default {
  components: { SkillsItem, ProjectItem },
  methods: {
    camelToSnake(str) {
      return str
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase();
    },
  },
  data() {
    return {
      title: "WEB GELİŞTİRİCİSİ",
      description:
        "Sektörde 6 yıllık deneyime sahibim. HTML, CSS, SCSS, JS, NodeJS, VueJS, Laravel, PHP ve Python dil/frameworklerine hakimim. Mysql, MongoDB ve Redis ile çalışma yaptım. Daha önceki projelerimde Google Cloud Run, Heroku, Vercel, Github Pages ve özel sunucu ortamlarına deployment gerçekleştirdim. RabbitMQ deneyimim mevcut. Ci/cd süreçleri için aktif olarak Circleci, Unit testler için Mocha kullanıyorum. Git komutlarına hakimim. Mikroservis mimarisi hakkında deneyim sahibiyim. Rest api ile aktif geliştirdiğim uygulamalar mevcut.",
      skillsAndProjects: {
        skills: {
          info: {
            title: "Deneyimler",
          },
          content: {
            basic: {
              HTML: {
                img: "html.png",
              },
              CSS: {
                img: "css.png",
              },
              SCSS: {
                img: "sass.png",
              },
              Bootstrap: {
                img: "bootstrap.png",
              },
              Tailwind: {
                img: "tailwindcss.png",
              },
            },
            languages: {
              Php: {
                img: "php.png",
              },
              Laravel: {
                img: "laravel.png",
              },
              Python: {
                img: "python.png",
              },
              Javascript: {
                img: "js.png",
              },
              VueJS: {
                img: "vuejs.png",
              },
              NodeJS: {
                img: "nodejs.svg",
              },
              ElectronJS: {
                img: "electronjs.png",
              },
            },
            databases: {
              MySQL: {
                img: "mysql.png",
              },
              MongoDB: {
                img: "mongodb.png",
              },
              Redis: {
                img: "redis.png",
              },
            },
            deployment: {
              Heroku: {
                img: "heroku.png",
              },
              Google_Cloud_Run: {
                name: "Google<br>Cloud Run",
                img: "google-cloud-run.png",
              },
              AWS_S3: {
                name: "AWS S3",
                img: "aws-s3.svg",
              },
              Vercel: {
                img: "vercel.svg",
                dark: true,
              },
              Github_Pages: {
                name: "Github<br>Pages",
                img: "github-pages.png",
              },
              Server: {
                img: "server.png",
              },
            },
            Web_Architecture: {
              Rest: {
                img: "rest.png",
              },
              Mikroservis: {
                img: "microservice.png",
                dark: true,
              },
            },
            Modern_Web_Technologies: {
              Git: {
                img: "git.png",
              },
              Mocha: {
                img: "mocha.png",
              },
              CircleCI: {
                img: "Circleci.png",
              },
              RabbitMQ: {
                img: "rabbitmq.svg",
              },
            },
          },
        },
        githubAccounts: {
          info: {
            title: "Github Hesapları",
          },
          content: [
            {
              img: "https://www.kozmonos.com/favicon/apple-touch-icon.png",
              title: "Kozmonos Github",
              url: "https://github.com/kozmonos",
            },
            {
              img: "./assets/logo.svg",
              title: "Onur Ayçiçek Github",
              url: "https://github.com/onuraycicek",
              dark: true,
            },
            {
              img: "https://avatars.githubusercontent.com/u/118129437?s=200&v=4",
              title: "DoNotEffort Github",
              url: "https://github.com/DoNotEffort",
            },
            {
              img: "https://avatars.githubusercontent.com/u/118991692?s=200&v=4",
              title: "World2Space Github",
              url: "https://github.com/world2space",
            },
          ],
        },
      projects: [
        {
          img: "kozmonos.com.png",
          title: "Kurumsal Web Sitesi",
          description:
            "Otomasyon ve web yazılımları üreten, yaptığım işlerim kurumsullağını korumak amacıyla açtığım web sitesi.",
          url: "https://www.kozmonos.com",
          badges: ["web"],
          technologies: [
            "laravel",
            "tailwindcss",
            "mysql",
            "mongodb",
            "aws-s3",
          ],
          color: "#ff6308",
        },
        {
          img: "social.donoteffort.com.png",
          title: "Sosyal Medya Yönetim Paneli",
          description:
            "Birden fazla sosyal medya platformunu tek bir yerde toplayan, sosyal medya platformları arasında paylaşım yapmayı sağlayan web sitesi.",
          url: "https://social.donoteffort.com",
          github: "https://github.com/DoNotEffort/donoteffort.com-social",
          badges: ["web"],
          technologies: ["vuejs", "nuxtjs"],
          color: "#9271e7",
        },
        {
          img: "canaycicek.com.tr.png",
          title: "Beat Projesi",
          description:
            "Müzik üreticileri ve müzik severleri bir araya getiren, müzik üreticilerinin ürettiği müzikleri yayınlayabildiği, müzik severlerin ise müzikleri dinleyebileceği web sitesi.",
          url: "https://www.canaycicek.com.tr",
          badges: ["web"],
          technologies: ["vuejs", "nuxtjs", "bootstrap"],
          color: "#80ff00",
          dark: true,
        },
        {
          img: "dijitalinmerkezi.com.png",
          title: "Dijitalin Merkezi",
          description:
            "Dijitalde bulunan gruplar, freelance iş ilanları, ücretsiz udemy kurslarını içeren web sitesi.",
          url: "https://www.dijitalinmerkezi.com",
          badges: ["web"],
          technologies: ["vuejs", "nuxtjs"],
          color: "#7b64fb",
        },
        {
          img: "onuraycicek.com.tr.png",
          title: "Portfolyo Web Sitesi",
          description:
            "Kendi işlerimi ve yaptığım işleri sergilediğim portfolyo web sitesi.",
          url: "https://www.onuraycicek.com.tr",
          badges: ["web"],
          technologies: ["vuejs", "nuxtjs"],
          color: "white",
          dark: true,
        },
      ],
      socialMedias: {
        Twitter: {
          url: "https://twitter.com/OnurAycicek",
        },
        linkedin: {
          url: "https://www.linkedin.com/in/onur-aycicek",
        },
        telegram: {
          url: "https://t.me/kozmonos",
        },
        github: {
          url: "https://github.com/onuraycicek",
        },
      },
    };
  },
};
</script>
