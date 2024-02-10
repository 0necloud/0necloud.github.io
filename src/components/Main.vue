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
      <div class="card">
        <img src="layout/images/aris.gif" style="width: 100%" />
      </div>
      <div class="card">
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

    <div class="col-12 lg:col-12 xl:col-8">
      <transition name="slide-fade">
        <div v-if="is_home()" class="card mb-0 col-12 pt-0">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-900 font-medium mb-3 mt-4">About Me</span>
              <div class="text-500 font-medium text-xl">
                A young cyber security enthusiast whom graduated from Singapore
                Polytechnic's Diploma in Infocomm Security and Management
                course. Interests include programming, hacking and
                capture-the-flag (CTF) competitions. Aspire to attain a
                Bachelor's degree in Computer Science while continuing to
                participate actively in hackathons, CTFs, and volunteering
                activities. Currently serving National Service and will be
                matriculating into the National University of Singapore's
                Computer Science Degree Programme in the year 2025.
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div class="grid mt-0">
        <!-- RESUME -->
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeContent == 'resume'" class="col-12 pt-0">
            <div class="card">
              <div v-if="is_resume()">
                <div
                  class="flex flex-wrap justify-content-between align-items-center mb-3"
                >
                  <h4 class="sm:m-0 mb-4">Resume</h4>
                  <span>
                    <Button
                      label=""
                      type="button"
                      icon="pi pi-chevron-left"
                      @click="decreasePage()"
                      class="mr-2 p-button-outlined"
                    ></Button>
                    <Button
                      label=""
                      type="button"
                      icon="pi pi-chevron-right"
                      @click="increasePage()"
                      class="mr-2 p-button-outlined"
                    ></Button>
                  </span>
                </div>

                <pdf
                  src="docs/resume.pdf"
                  :page="pageNumber"
                  class="overflow-scroll"
                >
                  loading content here...
                </pdf>
              </div>
            </div>
          </div>
        </transition>

        <experience-info v-if="showInfo" :description="'aaaaa'" @close="closeInfo()"/>

        <!-- EDUCATION -->
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeContent == 'education'" class="col-12 pt-0">
            <div class="card" :style="education_background_img">
              <div v-if="is_education()">
                <div
                  class="flex flex-wrap justify-content-between align-items-center mb-3"
                >
                  <h4 class="sm:m-0 mb-4" :style="textshadow_color">
                    Education
                  </h4>
                </div>
                <!-- CONTENT -->
                <ul class="list-none m-0 p-0">
                  <li
                    v-for="data in educationData"
                    :key="data.institute"
                    class="card flex flex-wrap col-12"
                    style="
                      background-color: rgba(255, 255, 255, 0.2);
                      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                      backdrop-filter: blur(5px) brightness(85%);
                      border: 1px solid rgba(255, 255, 255, 0.3);
                    "
                    @click="openInfo()"
                  >
                    <div class="col-12 sm:col-3 flex justify-content-center">
                      <img
                        :src="data.image"
                        style="height: 175px; width: 175px; object-fit: cover"
                      />
                    </div>
                    <div class="col-12 sm:col-9">
                      <div
                        class="col-12 flex flex-wrap"
                        style="
                          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                        "
                      >
                        <h3 class="col-12 lg:col-7 p-0 mt-1">
                          {{ data.institute }}
                        </h3>
                        <h4 class="col-12 lg:col-5 p-0 mt-1">
                          {{ data.grade }}
                        </h4>
                      </div>
                      <div class="col-12 flex flex-wrap">
                        <h5 class="col-12 lg:col-2 p-0 mt-1">Attended:</h5>
                        <p class="col-12 lg:col-10 p-0 mt-1">
                          {{ data.attended }}
                        </p>
                        <h5 class="col-12 lg:col-1 p-0 mt-1 mb-0">CCA(s):</h5>
                        <div class="col-12 lg:col-11 p-0 mt-1">
                          <ul class="list-none">
                            <li v-for="cca in data.cca" :key="cca">
                              ➣ {{ cca }}
                            </li>
                          </ul>
                        </div>

                        <h5 class="col-12 lg:col-2 p-0 mt-3">Awards:</h5>
                        <div class="col-12 lg:col-10 p-0 mt-3">
                          <ol>
                            <li v-for="award in data.awards" :key="award">
                              {{ award }}
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>

        <!-- EXPERIENCE -->
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeContent == 'experience'" class="col-12 pt-0">
            <div
              class="card"
              style="
                background-color: rgba(0, 0, 0, 0.1);
                border-top: 1px solid purple;
              "
            >
              <div v-if="is_experience()">
                <div
                  class="flex flex-wrap justify-content-between align-items-center mb-3"
                >
                  <h4 class="sm:m-0 mb-4">Experience</h4>
                </div>
                <!-- CONTENT -->
                <div class="card col-12"></div>
              </div>
            </div>
          </div>
        </transition>

        <!-- ACHIEVEMENTS -->
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeContent == 'achievements'" class="col-12 pt-0">
            <div class="card">
              <div v-if="is_achievements()">
                <div
                  class="flex flex-wrap justify-content-between align-items-center mb-3"
                >
                  <h4 class="sm:m-0 mb-4">Achievements</h4>
                </div>
                <!-- CONTENT -->
                <div class="card col-12"></div>
              </div>
            </div>
          </div>
        </transition>

        <!-- NO ACTIVE CONTENT -->
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeContent == 'home'" class="col-12">
            <div
              class="card"
              style="width: 100%; text-align: center"
              @click="startFlashing()"
            >
              Select content to load segment
            </div>
          </div>
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
import educationData from "../../public/data/education.json";
import pdf from "pdfvuer";
import ExperienceInfo from "./ExperienceInfo.vue";

export default {
  data() {
    return {
      pageNumber: 1,
      activeContent: "home",
      isFlashing: false,
      educationData: educationData.data,
      showInfo: false
    };
  },
  computed: {
    education_background_img() {
      return "background-image: url('layout/images/education_bg.jpg'); background-size:cover; background-position:center; border-top: 1px solid blue;";
    },
    textshadow_color() {
      return this.$appState.darkTheme
        ? "text-shadow: 2px 2px black"
        : "text-shadow: 2px 2px white";
    },
  },
  methods: {
    openInfo() {
      this.showInfo = true;
    },
    closeInfo(){
      this.showInfo = false;
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
    increasePage() {
      if (this.pageNumber + 1 < 3) {
        this.pageNumber++;
      }
    },
    decreasePage() {
      if (this.pageNumber - 1 > 0) {
        this.pageNumber--;
      }
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
  components: {
    pdf,
    ExperienceInfo
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1.5s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 1s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(600px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-200px);
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

@media (min-width: 768px) {
  .wrapper * {
    /* display: inline-block; */
    height: 3rem;
    margin-right: 10px;
  }
}
@media (max-width: 767px) {
  .wrapper * {
    display: inline-block;
    width: 100%;
    height: 3rem;
    margin-right: 10px;
    margin-bottom: 10px;
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