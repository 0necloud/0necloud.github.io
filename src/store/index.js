import { createStore } from 'vuex';
import uiModule from './modules/UI/index'

const store = createStore({
  modules: {
    UI: uiModule
  },
});

export default store;