<template>
    <div>
        <section class="hero is-fullheight startpage-bg">
            <div class="hero-head">
                <navigation-bar/>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns is-centered">
                        <div class="column is-narrow startpage-title-container">
                            <h1 class="title">
                                John-Robin Tell
                            </h1>
                            <h2 class="subtitle">
                                Fullstack Developer
                            </h2>
                            <i class="fas fa-code icon"></i>
                        </div>
                    </div>
                </div>
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
