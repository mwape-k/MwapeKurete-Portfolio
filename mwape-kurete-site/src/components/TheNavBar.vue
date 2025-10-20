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
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-item work" @click="closeMenu">
        <router-link to="/ui-work">UX/UI Work</router-link>
      </div>
      <div class="nav-item work" @click="closeMenu">
        <router-link to="/dev-work">Dev Work</router-link>
      </div>
    </div>
  </div>
</template>

<style>
/* Base Styles */
.navbar {
  position: relative;
  width: 100%;
  min-height: 60px;
  min-height: 60px;
  display: flex;
  justify-content: center; /* Changed from space-between */
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  background: rgba(33, 33, 33, 0.528);
  color: #fff !important;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.3px);
  -webkit-backdrop-filter: blur(10.3px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-items {
  display: flex;
  gap: clamp(10px, 3vw, 120px);
  max-width: 1200px; /* Or your preferred max width */
  margin: 0 auto;
}

.nav-item {
  font-weight: 600;
  font-size: clamp(12px, 4vw, 16px);
  font-family: "Darker Grotesque", sans-serif;
  color: #fff !important;
  font-weight: 100;
  padding: 10px 0;
  transition: all 3ms ease-in;
}

.nav-item router-link {
  text-decoration: none;
  color: #fff !important;
  transition: all 0.3s ease;
}

.home router-link {
  color: #fff !important;
}

.nav-item a {
  text-decoration: none;
  color: #fff !important;
  transition: all 0.3s ease;
}

.nav-item a:hover {
  font-weight: 600;
  background-color: #e9a701;
  color: #212121 !important;
  padding: 0.2rem 0.6rem;
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
  background: #e9a701;
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
