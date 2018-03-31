<template>
    <div>
        <section class="hero is-fullheight startpage-bg">
            <div v-if="false" class="hero-head">
                <navigation-bar/>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered has-text-centered">
                        <div class="column is-narrow startpage-title-container">
                            <h1 class="title">
                                John-Robin Tell
                            </h1>
                            <h2 class="subtitle">
                                <typed-text text="Fullstack Developer from Sweden"/>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-foot has-text-centered">
                <div class="startpage-arrow">
                    <i class="fas fa-angle-double-down"></i>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h1 class="title">Projects</h1>
                <h2 class="subtitle">asdffasdfasdfsad asdasf sadfasf asdfasfasd asdf</h2>
            </div>
        </section>
    </div>
</template>

<script>
  import NavigationBar from './../components/NavigationBar'

  export default {
    name: 'Home',

    components: { NavigationBar }
  }
</script>
