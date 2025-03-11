// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
// import { fa } from "vuetify/iconsets/fa4";
import { md3 } from "vuetify/blueprints";
// import { VDataTableServer } from "vuetify/labs/VDataTable";
export default createVuetify({
  blueprint: md3, //藍圖樣式
  theme: {
    defaultTheme: "default",
    themes: {
      default: {
        dark: false,
        colors: {
          primary: "#3d1f1f",
          secondary: "#4c4c4c",
          textColor: "#000000",
          error: "#ef6714",
          gray: "#4c4c4c",
          darkprimary: "#604c3f",
          thead: "#e5e5e3",
        },
      },
      front: {
        dark: false,
        colors: {
          primary: "#006db2",
          secondary: "#4c4c4c",
          textColor: "#000000",
          error: "#ef6714",
          gray: "#4c4c4c",
          thead: "#e5e5e3",
        },
      },
    },
  },
  components: {
    // VDataTableServer,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
