import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FAF3F3', 
        secondary: '#E0E0E0', 
        accent: '#F3F3FA',
        basic: '#1E1A3E', 
        danger: '#FF6683',
        dark: '#181C43',
        blue: '#3E4462',
        gray: '#E5E5E5'
      },
    },
  },
});
