<template>
    <div>
        <section class="hero is-medium hero-bg">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered has-text-centered">
                        <div class="column is-narrow startpage-title-container">
                            <h1 class="title is-size-1">
                                <typed-text text="Projects"/>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-4" v-for="project in projects">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image">
                                    <img :src="project.image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-4">{{ project.name }}</p>
                                <div class="content">
                                    {{ project.description }}
                                </div>
                                <div class="tags">
                                    <span class="tag" v-for="tag in project.tags" :class="tag.class">{{ tag.text }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
  import ProjectsList from '../projects';

  export default {
    name: 'Projects',

    data() {
      return {
        projects: []
      }
    },

    created() {
      this.projects = ProjectsList;

      this.setPageData({
        title: 'Projects',
        metaDescription: 'Projects I\'ve worked on lately'
      });
    }
  }
</script>
