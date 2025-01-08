<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar />

    <div class="layout-main-container" :style="backgroundOpacity">
      <div class="grid">
        <div class="col-12 xl:col-2">
          <div class="card flex">
            <img id="pfp" src="layout/images/aris.gif" />
            <ScrollPanel
              v-if="isMidScreen"
              class="ml-4 text-500 font-medium text-l"
              style="width: 100%; height: 250px"
              >{{ aboutText }}</ScrollPanel
            >
          </div>

          <!-- Navbar -->
          <div class="card mb-0">
            <router-link :to="'/resume'" style="position:sticky; top: 5px;">
              <Button
                icon="pi pi-id-card"
                :class="contentButtonStyle('resume')"
                label="Resume"
                style="text-align: left"
              />
            </router-link>
            <router-link :to="'/education'">
              <Button
                icon="pi pi-book"
                :class="contentButtonStyle('education')"
                label="Education"
                style="text-align: left"
              />
            </router-link>
            <router-link :to="'/projects'">
              <Button
                icon="pi pi-list"
                :class="contentButtonStyle('projects')"
                label="Projects"
                style="text-align: left"
              />
            </router-link>
            <router-link :to="'/experience'">
              <Button
                icon="pi pi-file-o"
                :class="contentButtonStyle('experience')"
                label="Experience"
                style="text-align: left"
              />
            </router-link>
            <router-link :to="'/achievements'">
              <Button
                icon="pi pi-star"
                :class="contentButtonStyle('achievements')"
                label="Achievements"
                style="text-align: left"
              />
            </router-link>
          </div>
        </div>

        <div class="col-12 xl:col-8">
          <div class="grid mt-0">
            <!-- Content -->

            <div class="layout-main" style="width: 100%">
              <router-view v-slot="{ Component, route }">
                <transition name="slide-fade" mode="out-in">
                  <component :is="Component" :key="route.fullPath" />
                </transition>
              </router-view>
            </div>
          </div>
        </div>

        <!-- Right -->

        <div class="col-12 xl:col-2">
          <div class="card">
            <h5 class="mb-3">Quick Links</h5>
            <ScrollPanel class="p-0 m-0" style="width: 100%; height: 250px">
              <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                <li
                  class="flex align-items-center py-2 border-bottom-1 surface-border"
                >
                  <div>
                    <i class="pi pi-linkedin mr-2" style="font-size: 2rem"></i>
                    <a
                      href="https://www.linkedin.com/in/hewyiyun/"
                      target="_blank"
                      class="text-xl"
                      >LinkedIn</a
                    >
                  </div>
                </li>
                <li
                  class="flex align-items-center py-2 border-bottom-1 surface-border"
                >
                  <div>
                    <i class="pi pi-github mr-2" style="font-size: 2rem"></i>
                    <a
                      href="https://github.com/0necloud"
                      class="text-xl"
                      target="_blank"
                      >GitHub</a
                    >
                  </div>
                </li>
              </ul>
            </ScrollPanel>
          </div>
        </div>
      </div>
      <ScrollTop
        class="custom-scrolltop"
        target="window"
        icon="pi pi-chevron-up"
        :threshold="1300"
      />
      <AppFooter />
      <!-- Footer component -->
    </div>

    <transition name="layout-mask">
      <div
        class="layout-mask p-component-overlay"
        v-if="mobileMenuActive"
      ></div>
    </transition>
  </div>
</template>

<script>
import aboutMe from "../public/res/data/aboutme.json";
import AppTopBar from "./AppTopbar.vue";
import AppFooter from "./AppFooter.vue";

export default {
  emits: ["change-theme"],
  data() {
    return {
      windowWidth: window.innerWidth,
      aboutText: aboutMe.bio,
      layoutMode: "static",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
    };
  },
  watch: {
    $route() {
      this.menuActive = false;
      this.$toast.removeAllGroups();
    },
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },

    changeContent(content) {
      this.activeContent = content;
    },
    contentButtonStyle(content) {
      if (this.$route.name === content) {
        return "p-button-outlined mr-2 mb-2";
      } else {
        return "p-button-text mr-2 mb-2";
      }
    },
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }

      this.menuClick = false;
    },
    onMenuToggle() {
      // hamburger icon
      this.menuClick = true;

      if (this.isDesktop()) {
        if (this.layoutMode === "overlay") {
          if (this.mobileMenuActive === true) {
            this.overlayMenuActive = true;
          }

          this.overlayMenuActive = !this.overlayMenuActive;
          this.mobileMenuActive = false;
        } else if (this.layoutMode === "static") {
          this.staticMenuInactive = !this.staticMenuInactive;
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive;
      }

      event.preventDefault();
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode;
    },
    addClass(element, className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    },
    removeClass(element, className) {
      if (element.classList) element.classList.remove(className);
      else
        element.className = element.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
    },
    isDesktop() {
      return window.innerWidth >= 992;
    },
  },

  computed: {
    isMidScreen() {
      return this.windowWidth < 1200 ? true : false;
    },
    backgroundOpacity() {
      return this.$appState.darkTheme
        ? "background-color: rgba(18, 18, 18, 0.7);"
        : "background-color: rgba(239, 243, 248, 0.5  );";
    },
    containerClass() {
      return [
        "layout-wrapper",
        {
          "layout-overlay": this.layoutMode === "overlay",
          "layout-static": this.layoutMode === "static",
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false,
        },
      ];
    },
    logo() {
      return this.$appState.darkTheme
        ? "images/logo-light.svg"
        : "images/logo.svg";
    },
  },
  beforeUpdate() {
    if (this.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  },
  components: {
    AppTopBar: AppTopBar,
    // 'AppMenu': AppMenu,
    // 'AppConfig': AppConfig,
    AppFooter: AppFooter,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss">
@import "./App.scss";
body {
  background-image: url("/layout/images/app.gif"); //https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal overflow */
}

.container {
  max-width: 1200px; /* Adjust the value based on your preference */
  margin: 0 auto; /* Center the container */
}

// @media screen and (min-width: 1024px) {
//   /* Apply styles for laptops and larger devices */
//   body {
//     max-height: 100vh; /* Set a maximum height of 100% viewport height */
//     overflow-y: hidden; /* Add vertical scrollbar if necessary */
//   }
// }
#pfp {
  width: 30%;
  height: 10%;
}

@media (min-width: 600px) {
  #pfp {
    width: 20%;
  }
}

@media (min-width: 1200px) {
  #pfp {
    width: 100%;
  }
}

.slide-fade-enter-active {
  transition: all 1.5s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.7s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(200px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s ease;
}

.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.flash {
  animation: flashAnimation 0.5s infinite alternate;
}

@keyframes flashAnimation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.custom-scrolltop {
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  background-color: var(--primary-color) !important;
}

.custom-scrolltop:hover {
  background-color: var(--primary-color);
}

.custom-scrolltop .p-scrolltop-icon {
  font-size: 1rem;
  color: var(--primary-color-text);
}

/* Chrome, Safari, Edge, Opera */
#displayRow::-webkit-outer-spin-button,
#displayRow::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
#displayRow[type="number"] {
  -moz-appearance: textfield;
}

.greenBar:deep(.p-progressbar-value) {
  background: rgb(136, 221, 136) !important;
}
</style>
