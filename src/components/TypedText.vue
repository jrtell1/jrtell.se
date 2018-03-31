<template>
    <span>{{ typedText }}<span class="blinking-cursor" :class="{ 'blink': blinkToggle }">_</span></span>
</template>

<script>
  export default {
    name: 'TypedText',

    props: {
      text: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        typedText: '',
        blinkToggle: false
      }
    },

    computed: {
      blink() {
      }
    },

    mounted() {
      let i = 0;
      const interval = setInterval(function () {
        this.typedText += this.text[i];

        i++;
        if (i === this.text.length) {
          clearInterval(interval);
          this.startBlinkUnderline();
        }
      }.bind(this), 80);

    },

    methods: {
      startBlinkUnderline() {
        setInterval(function () {
          this.blinkToggle = !this.blinkToggle;
        }.bind(this), 500);
      }
    }
  }
</script>
