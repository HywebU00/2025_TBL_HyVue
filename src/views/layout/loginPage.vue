<template>
  <div class="h-screen w-100 d-flex justify-center loginPage">
    <div class="loginCard">
      <v-sheet class="">
        <div class="logo">
          <v-img
            :width="320"
            aspect-ratio="1/1"
            class="mr-auto ml-auto mt-5"
            cover
            src="~@/assets/images/logo.png"
          ></v-img>
          <span class="text"> 後台管理系統 </span>
        </div>
        <v-form>
          <v-text-field
            density="compact"
            hide-details="auto"
            prepend-inner-icon="mdi-account"
            placeholder="請輸入帳號"
          ></v-text-field>
          <v-text-field
            class="elevation-0"
            placeholder="請輸入密碼"
            hide-details="auto"
            prepend-inner-icon="mdi-lock"
            :type="visible ? 'text' : 'password'"
            density="compact"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <div class="text-end">
            <div class="showPassword" @click="visible = !visible">
              <v-icon
                class="mr-2"
                :icon="visible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              ></v-icon>
              <span v-if="!visible">隱藏密碼</span>
              <span v-else>顯示密碼</span>
            </div>
          </div>
          <div class="d-flex align-center list">
            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || '']"
              label="記住我？"
              required
              color="primary"
              hide-details=""
            ></v-checkbox>
            <v-btn class="forget" color="textColor" variant="text"
              >忘記密碼</v-btn
            >
          </div>
          <v-btn
            type="submit"
            block
            color="primary"
            class="mt-2 elevation-0 loginBtn"
            >登入</v-btn
          >
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    checkbox: false,
  }),

  methods: {},
  mounted() {},
};
</script>
