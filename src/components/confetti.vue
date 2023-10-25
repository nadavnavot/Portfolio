<template>
  <div>
    <!-- Your confetti effect code here -->
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
        const triggerPoint = 3200; // Adjust this value based on where you want the trigger point to be
        if (window.scrollY >= triggerPoint) {
          fireConfetti();
          // Remove the scroll event listener after firing the confetti
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);
    });
  },
};
</script>
