<template>
  <div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import JSConfetti from 'js-confetti';

export default {
  name: 'confetti',
  setup() {
    const jsConfetti = new JSConfetti();

    const fireConfetti = () => {
      jsConfetti.addConfetti({
        confettiNumber: 100,
        emojis: ['🎊', '🥳', '🎉'],
        emojiSize: 50,
      });
    };

    onMounted(() => {
      const handleScroll = () => {
        const triggerPoint = 3300; 
        if (window.scrollY >= triggerPoint) {
          fireConfetti();
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);
    });
  },
};
</script>
