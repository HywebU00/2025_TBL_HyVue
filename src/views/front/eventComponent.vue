<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>

    <h2>報名紀錄</h2>
    <div class="">
      <v-row class="">
        <!-- 左側選單start -->
        <v-col cols="12" md="4">
          <div class="position-sticky stickyBlock">
            <v-card class="itemCard" v-for="i in 1" :key="i">
              <div class="cardContainer">
                <div class="info">
                  <v-card-item>
                    <v-card-title class="mt-3"
                      >里民環保1日旅遊活動</v-card-title
                    >
                  </v-card-item>
                  <v-card-text>
                    <v-divider class="mb-2"></v-divider>
                    <ul>
                      <li><span>類型</span>報名</li>
                      <li><span>是否收費</span>是</li>
                      <li><span>額度上限(里民/非里民)</span>600(100/500)</li>
                      <li><span>報名人數(里民/非里民)</span>10(5/5)</li>
                      <li><span>審核</span>已通過</li>
                      <li><span>發放日期</span>2024/9/10</li>
                    </ul>
                  </v-card-text>
                  <v-card-actions class="d-flex justify-center mb-6 btnGrp">
                    <router-link to="">
                      <v-btn variant="flat" color="primary"> 授權管理 </v-btn>
                    </router-link>
                    <router-link to="/front/form">
                      <v-btn variant="flat" color="primary"> 報名作業 </v-btn>
                    </router-link>
                    <router-link to="/front/event">
                      <v-btn variant="flat" color="primary"> 報名紀錄 </v-btn>
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
            <span class="text-primary d-flex align-center"> 報名紀錄 </span>
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
                      <v-card-title class="mt-3"
                        >王０明

                        <v-btn
                          elevation="0"
                          color="primary"
                          class="deleteBtn"
                          variant="text"
                          v-bind="activatorProps"
                          icon="mdi-trash-can-outline"
                        ></v-btn>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text>
                      <v-divider class="mb-2"></v-divider>
                      <ul>
                        <li><span>身份證</span>FXXXXXX789</li>
                        <li><span>生日</span>1988/04/24</li>
                        <li><span>電話</span>0900123456</li>
                        <li><span>所在區里</span>本里</li>
                        <li><span>繳納金額</span>100</li>
                        <li><span>登記時間</span>2024/09/25</li>
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
