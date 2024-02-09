<!-- Dialog box to hold form content -->

<template>
  <teleport to="body">
      <div @click="$emit('close')"></div>      
      <dialog open :style="this.$appState.darkTheme ? 'background-color:#121212; color:white;' : 'background-color:white; color:black;'"> <!-- Change background color based on theme -->
        <header :style="headerBg" class="flex justify-content-between">
          <slot name="header" >
              <h2 class="px-3">{{ title }}</h2> <!-- Title passed in from parent -->
          </slot>
          <Button type="button" icon="pi pi-times" class="p-button-text p-0 m-0 text-white" @click="$emit('close')" />
        </header>
        <section>
          <slot></slot>
        </section>
      </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: { // title
      type: String,
      required: false,
    },
    headerColor: { // color of header
      type: String,
      required: false,
    }
  },
  computed: {
    headerBg() {
      return this.headerColor ? `background-color: ${this.headerColor};` : "background-color: #6200a3;"
    }
  },
  emits: ['close']
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 99;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: auto;
  max-height: 70vh;
}

header {
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
  font-size: 1.5em;
}

section {
  padding: 1rem;
}
</style>