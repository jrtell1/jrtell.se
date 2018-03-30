<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link :to="{ name: 'home' }" class="navbar-item">JRTell</router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <router-link :to="{ name: 'home' }" class="navbar-item">Home</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'NavigationBar'
  }
</script>
