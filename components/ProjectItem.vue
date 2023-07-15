<template>
  <div class="project">
    <img
      class="project-image"
      :class="dark ? 'black-bg' : ''"
      :src="'/assets/projects/' + img"
      width="300"
      :alt="title"
      :title="title"
      :style="
        'border-image-source: linear-gradient(165deg,' +
        color +
        ',transparent,transparent,transparent,' +
        color +
        ');'
      "
    />
    <div class="project-body">
      <div class="project-header">
        <div>
          <h4>{{ title }}</h4>
          <div class="badges">
            <span
              v-if="github"
              :class="dark ? 'black-bg' : ''"
              class="badge open-source"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#ff0000"
              >
                <path
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
              Açık Kaynak
            </span>
            <span
              v-for="(badge, index) in badges"
              :key="index"
              :class="badge"
              class="badge"
            >
              {{ badge }}
            </span>
          </div>
        </div>
        <div>
          <project-item-button
            v-if="url"
            :dark="dark"
            :url="url"
            :color="color"
          ></project-item-button>
          <project-item-button
            v-if="github"
            :url="github"
            color="black"
            text="Github"
            icon="github"
          ></project-item-button>
        </div>
      </div>
      <p>{{ description }}</p>
      <div class="technologies">
        <span>Kullanılan Teknolojiler:</span>
        <div class="technologies-images">
          <img
            v-for="(technology, index) in technologies"
            :key="index"
            width="25"
            :src="'/assets/' + projectImage[technology]"
            :alt="technology"
            :title="technology"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    dark: {
      type: Boolean,
    },
    url: {
      type: String,
    },
    badges: {
      type: Array,
    },
    github: {
      type: String,
    },
    technologies: {
      type: Array,
    },
    color: {
      type: String,
    },
  },
  data() {
    return {
      projectImage: {
        laravel: "laravel.png",
        nuxtjs: "nuxtjs.png",
        tailwindcss: "tailwindcss.png",
        vuejs: "vuejs.png",
        mysql: "mysql.png",
        mongodb: "mongodb.png",
        redis: "redis.png",
        nodejs: "nodejs.png",
        "aws-s3": "aws-s3.svg",
        bootstrap: "bootstrap.png",
      },
    };
  },
};
</script>
