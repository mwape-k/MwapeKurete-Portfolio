<script>
export default {
  name: "TheNavBar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<template>
  <div class="navbar" data-aos="fade-down">
    <!-- Burger Icon (Mobile Only) -->
    <button class="burger" @click="toggleMenu" aria-label="Toggle menu">
      <span :class="{ 'line-1': true, open: isMenuOpen }"></span>
      <span :class="{ 'line-2': true, open: isMenuOpen }"></span>
      <span :class="{ 'line-3': true, open: isMenuOpen }"></span>
    </button>

    <!-- Navigation Items -->
    <div :class="{ 'nav-items': true, open: isMenuOpen }">
      <div class="nav-item home" @click="closeMenu">
        <a href="/">Home</a>
      </div>
      <div class="nav-item work" @click="closeMenu">
        <a href="/ui-work">UX/UI Work</a>
      </div>
      <div class="nav-item work" @click="closeMenu">
        <a href="/dev-work">Dev Work</a>
      </div>
    </div>
  </div>
</template>

<style>
/* Base Styles */
.navbar {
  position: relative;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center; /* Changed from space-between */
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  background: #1e1e1e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-items {
  display: flex;
  gap: clamp(15px, 3vw, 50px);
  max-width: 1200px; /* Or your preferred max width */
  margin: 0 auto;
}

.nav-item {
  font-weight: 600;
  font-size: clamp(18px, 4vw, 24px);
  font-family: "Just Me Again Down Here";
  padding: 10px 0;
}

.nav-item a {
  text-decoration: none;
  color: #cf9048;
  transition: all 0.3s ease;
}

.home a {
  color: #d8675f;
}

.nav-item a:hover {
  transform: scale(1.05);
  text-shadow: 0 0 5px rgba(207, 144, 72, 0.3);
}

/* Burger Menu (Hidden by Default) */
.burger {
  display: none;
  position: absolute; /* Added */
  left: 20px; /* Added */
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.burger span {
  display: block;
  width: 100%;
  height: 3px;
  background: #d8675f;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.line-1.open {
  transform: translateY(8px) rotate(45deg);
}
.line-2.open {
  opacity: 0;
}
.line-3.open {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .navbar {
    justify-content: flex-start; /* Changed for mobile */
  }

  .burger {
    display: flex;
  }

  .nav-items {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background: #1e1e1e;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    transform: translateY(-150%);
    transition: transform 0.5s ease;
    z-index: 9;
  }

  .nav-items.open {
    transform: translateY(0);
  }

  .nav-item {
    opacity: 0;
    transition: opacity 0.3s ease 0.3s;
  }

  .nav-items.open .nav-item {
    opacity: 1;
  }
}
</style>
