<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Projects</h1>
            <article class="media" v-for="project in projects">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ project.title }}</strong>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Projects',

    data() {
      return {
        projects: [
          { title: 'AirsoftEvents' }
        ]
      }
    },

    created() {
      this.setPageData({
        title: 'Projects',
        metaDescription: 'Projects I\'ve worked on lately'
      });
    }
  }
</script>
