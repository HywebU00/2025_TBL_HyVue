<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <div class="d-flex justify-end">
      <v-btn class="backBtn" variant="flat" color="secondary"> 回前頁 </v-btn>
    </div>
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
                    <!-- 新增class text-wrap start -->
                    <v-card-title class="mt-3 text-wrap"
                      >慰問品發放 慰問品發放
                      肉父皮開下都呢有個穴八許葉久貓有發且免，各有木乍往急共帶
                    </v-card-title>
                    <!-- 新增class text-wrap end -->
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
          <h3 class="mb-5"><span class="text-primary"> 授權管理</span></h3>
          <v-row class="cardGrp">
            <v-col md="6" cols="12" v-for="i in 3" :key="i">
              <v-card class="authCard" v-for="i in 1" :key="i">
                <div class="cardContainer">
                  <div class="info">
                    <v-card-text class="">
                      <div class="title"><span>王小明</span></div>
                      <v-btn variant="flat" color="primary"> 重新授權 </v-btn>
                      <div class="status">
                        <span>已簽收</span><span>10人</span>
                      </div>
                    </v-card-text>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col md="6" sm="6" cols="12" v-for="i in 1" :key="i">
              <v-card class="addAuthCard">
                <div class="cardContainer">
                  <div class="info">
                    <v-card-text class="">
                      <div class="title"></div>
                      <v-dialog
                        class="dialogCard qrCodeCard"
                        max-width="500"
                        :fullscreen="dialogFull"
                        transition="dialog-bottom-transition"
                      >
                        <template v-slot:activator="{ props: activatorProps }">
                          <v-btn
                            variant="flat"
                            color="primary"
                            v-bind="activatorProps"
                            @click="dialogWidth"
                          >
                            新增授權
                          </v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card title="">
                            <div class="d-flex justify-end px-4">
                              <v-btn
                                class="closeBtn"
                                variant="text"
                                icon="mdi-close"
                                color="secondary"
                                @click="isActive.value = false"
                              ></v-btn>
                            </div>
                            <v-card-text class="px-4">
                              <div class="">
                                <v-img
                                  aspect-ratio="1/1"
                                  class="mr-auto ml-auto"
                                  cover
                                  src="~@/assets/images/qrCode.png"
                                ></v-img>
                                <div class="text">
                                  <span>有效時間：</span>02:59
                                </div>
                              </div>
                            </v-card-text>
                            <v-card-actions class="d-block">
                              <div class="d-flex justify-center pa-4 pt-2">
                                <v-btn
                                  text="關閉"
                                  class="btn mx-2"
                                  variant="flat"
                                  @click="isActive.value = false"
                                ></v-btn>
                              </div>
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
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
export default {
  data: () => ({
    dialogFull: false,
  }),
  methods: {
    dialogWidth() {
      window.innerWidth <= 600
        ? (this.dialogFull = true)
        : (this.dialogFull = false);
    },
  },
  mounted() {},
};
</script>
<style scoped></style>
