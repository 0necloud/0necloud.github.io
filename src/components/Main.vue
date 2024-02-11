<!-- 

  OVERVIEW
  Main dashboard page to allow users to skim through the most important information, such as the plant growth and pH values, with a quick glance

-->
<template>
  <!-- Right-side popup notification upon successful/erroneous event -->
  <Toast position="bottom-right" group="cache" />
  <Toast position="top-right" />

  <!-- Top overview section (Total Racks, Running, Ready for Harvest, Errors) -->
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
      <div class="card mb-0">
        <div :class="{ flash: isFlashing }">
          <!-- <img src="layout/images/sms.png" style="width: 100%" /> -->
          <Button
            icon="pi pi-list"
            :class="contentButtonStyle('resume')"
            @click="changeContent('resume')"
            label="Resume"
            style="text-align: left"
          />
          <Button
            icon="pi pi-book"
            :class="contentButtonStyle('education')"
            @click="changeContent('education')"
            label="Education"
            style="text-align: left"
          />
          <Button
            icon="pi pi-book"
            :class="contentButtonStyle('projects')"
            @click="changeContent('projects')"
            label="Projects"
            style="text-align: left"
          />
          <Button
            icon="pi pi-file-o"
            :class="contentButtonStyle('experience')"
            @click="changeContent('experience')"
            label="Experience"
            style="text-align: left"
          />
          <Button
            icon="pi pi-star"
            :class="contentButtonStyle('achievements')"
            @click="changeContent('achievements')"
            label="Achievements"
            style="text-align: left"
          />
        </div>
      </div>
    </div>

    <div class="col-12 xl:col-8">
      <transition name="slide-fade">
        <div v-if="is_home()">
          <div v-if="!isMidScreen" class="card mb-0 col-12 pt-0 flex">
            <div class="flexwrap justify-content-between mb-3">
              <div>
                <span class="block text-900 font-medium mb-3 mt-4"
                  >About Me</span
                >
                <div class="text-500 font-medium text-xl">
                  {{ aboutText }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 px-0">
            <div
              class="card"
              style="width: 100%; text-align: center"
              @click="startFlashing()"
            >
              Select content to load segment
            </div>
          </div>
        </div>
      </transition>

      <div class="grid mt-0">
        <!-- RESUME -->
        <transition name="slide-fade" mode="out-in">
          <Resume v-if="activeContent == 'resume'" />
        </transition>

        <!-- EDUCATION -->
        <transition name="slide-fade" mode="out-in">
          <Education v-if="activeContent == 'education'" />
        </transition>

        <!-- PROJECTS -->
        <transition name="slide-fade" mode="out-in">
          <Projects v-if="activeContent == 'projects'" />
        </transition>

        <!-- EXPERIENCE -->
        <transition name="slide-fade" mode="out-in">
          <Experience v-if="activeContent == 'experience'" />
        </transition>

        <!-- ACHIEVEMENTS -->
        <transition name="slide-fade" mode="out-in">
          <Achievements v-if="activeContent == 'achievements'" />
        </transition>
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
                <a href="https://www.linkedin.com/in/hewyiyun/">LinkedIn</a>
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
</template>

<script>
// import Serve from "../service/serve";
import Resume from "./Resume.vue";
import Education from "./Education.vue";
import Projects from "./Projects.vue";
import Experience from "./Experience.vue";
import Achievements from "./Achievements.vue";

export default {
  data() {
    return {
      activeContent: "home",
      isFlashing: false,
      windowWidth: window.innerWidth,
      aboutText: `A young cyber security enthusiast whom graduated from
                  Singapore Polytechnic's Diploma in Infocomm Security and
                  Management course. Interests include programming, hacking and
                  capture-the-flag (CTF) competitions. Aspire to attain a
                  Bachelor's degree in Computer Science while continuing to
                  participate actively in hackathons, CTFs, and volunteering
                  activities. Currently serving National Service and will be
                  matriculating into the National University of Singapore's
                  Computer Science Degree Programme in the year 2025.`,
    };
  },
  computed: {
    isMidScreen() {
      return this.windowWidth < 1200 ? true : false;
    },
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    is_home() {
      if (this.activeContent === "home") {
        return true;
      }
      return false;
    },
    is_resume() {
      if (this.activeContent === "resume") {
        return true;
      }
      return false;
    },
    is_education() {
      if (this.activeContent === "education") {
        return true;
      }
      return false;
    },
    is_experience() {
      if (this.activeContent === "experience") {
        return true;
      }
      return false;
    },
    is_achievements() {
      if (this.activeContent === "achievements") {
        return true;
      }
      return false;
    },
    changeContent(content) {
      this.activeContent = content;
    },
    contentButtonStyle(content) {
      if (this.activeContent === content) {
        return "p-button-outlined mr-2 mb-2";
      } else {
        return "p-button-text mr-2 mb-2";
      }
    },
    startFlashing() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.isFlashing = true;
      setTimeout(() => {
        this.isFlashing = false;
      }, 2000); // Adjust the duration as needed
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  components: {
    Resume,
    Education,
    Projects,
    Experience,
    Achievements
  },
};
</script>

<style scoped>
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