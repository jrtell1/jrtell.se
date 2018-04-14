<template>
    <div>
        <section class="hero is-fullheight startpage-bg">
            <!--<div v-if="false" class="hero-head">-->
                <!--<navigation-bar/>-->
            <!--</div>-->
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered has-text-centered">
                        <div class="column is-narrow startpage-title-container">
                            <h1 class="title is-size-1-mobile">
                                John-Robin Tell
                            </h1>
                            <h2 class="subtitle is-size-4-mobile">
                                <typed-text text="Fullstack Developer from Sweden"/>
                            </h2>
                            <router-link class="button is-dark is-medium is-inverted is-outlined" to="projects">Projects</router-link>
                            <a class="button is-dark is-medium is-inverted is-outlined" href="https://github.com/jrtell1" target="_blank" rel="noopener noreferrer">
                                <span class="icon">
                                    <i class="fab fa-github"></i>
                                </span>
                                <span>Github</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="hero-foot has-text-centered">-->
                <!--<div class="startpage-arrow">-->
                    <!--<i class="fas fa-angle-double-down"></i>-->
                <!--</div>-->
            <!--</div>-->
        </section>
    </div>
</template>

<script>
  import NavigationBar from './../components/NavigationBar'
  import Projects from './Projects'

  export default {
    name: 'Home',

    components: { NavigationBar, Projects },

    created() {
      this.setMetaDescription('John-Robin Tell - Fullstack Developer from Sweden');
    }
  }
</script>
