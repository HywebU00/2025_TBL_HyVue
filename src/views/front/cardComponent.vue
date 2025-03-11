<template>
  <v-container class="container">
    <div class="d-flex justify-end loginName">
      <div class="mt-2 title"><span>志工</span>王小明</div>
      <v-btn class="mb-4">登入</v-btn>
    </div>
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <h2>簽收作業</h2>
    <div class="">
      <v-row class="">
        <!-- 左側選單start -->
        <v-col cols="12" md="4">
          <div class="position-sticky stickyBlock">
            <v-card class="itemCard" v-for="i in 1" :key="i">
              <div class="cardContainer">
                <div class="info">
                  <v-card-item>
                    <v-card-title class="mt-3">慰問品發放</v-card-title>
                  </v-card-item>
                  <v-card-text>
                    <v-divider class="mb-2"></v-divider>
                    <ul>
                      <li><span>類型</span>物資發放</li>
                      <li><span>規則</span>每戶每人領取一份</li>
                      <li><span>區域</span>內湖區西康里</li>
                      <li><span>已簽收/上線人數</span>32/無</li>
                      <li><span>審核</span>已通過</li>
                      <li><span>發放日期</span>2024/9/10</li>
                    </ul>
                  </v-card-text>
                  <v-card-actions class="d-flex justify-center mb-6 btnGrp">
                    <router-link to="/front/auth">
                      <v-btn variant="flat" color="primary"> 授權管理 </v-btn>
                    </router-link>
                    <router-link to="/front/method">
                      <v-btn variant="flat" color="primary"> 簽收作業 </v-btn>
                    </router-link>
                    <router-link to="/front/card">
                      <v-btn variant="flat" color="primary"> 簽收紀錄 </v-btn>
                    </router-link>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
        <!-- 左側選單end -->
        <!-- 右側選單start -->
        <v-col cols="12" md="8" class="">
          <h3 class="mb-5 d-sm-block d-none">
            <span class="text-primary"> 指定名單</span>
          </h3>
          <v-card class="pa-3 pa-md-6 card d-sm-block d-none">
            <dataTableServer class="dataTable" />
          </v-card>
          <h3 class="my-5 d-flex align-center">
            <span class="text-primary d-flex align-center">
              簽收紀錄
              <v-btn class="ml-3" variant="flat" color="primary">
                匯出名單
              </v-btn></span
            >
            <div class="ml-auto formGrp">
              <v-select
                color="secondary"
                label="下拉式選單"
                single-line
                density="compact"
                hide-details="auto"
                :items="['選項ㄧ', '選項二', '選項三']"
              ></v-select>
            </div>
          </h3>
          <v-row class="cardGrp">
            <v-col md="6" sm="6" cols="12" v-for="i in 3" :key="i">
              <v-card class="itemCard" v-for="i in 1" :key="i">
                <div class="cardContainer">
                  <div class="info">
                    <v-card-item>
                      <v-card-title class="mt-3">王０明</v-card-title>
                    </v-card-item>
                    <v-card-text>
                      <v-divider class="mb-2"></v-divider>
                      <ul>
                        <li><span>戶號</span>EXXXX500</li>
                        <li><span>身份證</span>FXXXXXX789</li>
                        <li><span>登記人</span>AXXXXXX789</li>
                        <li><span>登記時間</span>2024/09/10</li>
                        <li><span>名單來源</span>系統</li>
                        <li><span>登記方式</span>台北卡</li>
                        <li><span>簽收人</span>志工一號</li>
                        <li><span>備註</span></li>
                      </ul>
                    </v-card-text>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <!-- 右側選單end -->
      </v-row>
    </div>
  </v-container>
</template>

<script>
import dataTableServer from "@/components/dataTableServer.vue";
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";
export default {
  data: () => ({}),
  methods: {},
  mounted() {},
  components: {
    dataTableServer,
    datepickerModalVue,
  },
};
</script>
<style scoped></style>
