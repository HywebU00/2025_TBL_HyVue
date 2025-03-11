<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <h2>報名作業</h2>
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
          <h3 class="mb-5"><span class="text-primary">戶政資料查核</span></h3>
          <v-row class="cardGrp">
            <v-col cols="4">
              <v-card class="methodCard">
                <div class="cardContainer">
                  <div class="info">
                    <v-card-text>
                      <div class="icon">
                        <img src="~@/assets/images/idcard.svg" alt="" />
                      </div>
                      <v-dialog
                        class="dialogCard methodDialog"
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
                            讀取身分證
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
                                <div class="idBlock"></div>
                                <div class="text">
                                  請出示「身份證」 以進行掃描登記
                                </div>
                              </div>
                            </v-card-text>
                            <v-card-actions class="d-block">
                              <div class="d-flex justify-center pa-4 pt-2">
                                <v-btn
                                  text="取消"
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
            <v-col cols="4">
              <v-card class="methodCard">
                <div class="cardContainer">
                  <div class="info">
                    <v-card-text class="">
                      <div class="icon">
                        <img src="~@/assets/images/EasyCard.svg" alt="" />
                      </div>
                      <v-dialog
                        class="dialogCard methodDialog"
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
                            重讀取台北通虛擬卡
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
                                <div class="idBlock"></div>
                                <div class="text">
                                  請出示「台北通」 以進行掃描登記
                                </div>
                              </div>
                            </v-card-text>
                            <v-card-actions class="d-block">
                              <div class="d-flex justify-center pa-4 pt-2">
                                <v-btn
                                  text="取消"
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
            <v-col cols="4" class="pcMethod">
              <v-card class="methodCard">
                <div class="cardContainer">
                  <div class="info">
                    <v-card-text>
                      <div class="icon">
                        <img src="~@/assets/images/yoyocard.svg" alt="" />
                      </div>

                      <v-dialog
                        class="dialogCard methodDialog"
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
                            讀取悠遊卡敬老卡
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
                                <div class="idBlock"></div>
                                <div class="text">
                                  請出示「敬老卡」 以進行掃描登記
                                </div>
                              </div>
                            </v-card-text>
                            <v-card-actions class="d-block">
                              <div class="d-flex justify-center pa-4 pt-2">
                                <v-btn
                                  text="取消"
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
            <v-col cols="4" class="pcMethod">
              <v-card class="methodCard">
                <div class="cardContainer">
                  <div class="info">
                    <v-card-text>
                      <div class="icon">
                        <img src="~@/assets/images/Bluetooth.svg" alt="" />
                      </div>
                      <v-dialog
                        class="dialogCard methodDialog"
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
                            連線藍芽讀卡機.健保卡
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
                                <div class="idBlock">
                                  <img
                                    class="bluetoothImg"
                                    src="~@/assets/images/blue_.png"
                                    alt=""
                                  />
                                </div>
                                <div class="text">
                                  請連線藍芽機，並插入健保卡
                                </div>
                              </div>
                            </v-card-text>
                            <v-card-actions class="d-block">
                              <div class="d-flex justify-center pa-4 pt-2">
                                <v-btn
                                  text="讀取卡片"
                                  class="btn mx-2"
                                  variant="flat"
                                  @click="isActive.value = false"
                                ></v-btn>
                                <v-btn
                                  text="取消"
                                  class="btn mx-2"
                                  color="secondary"
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
            <v-col cols="4">
              <v-card class="methodCard">
                <div class="cardContainer">
                  <div class="info">
                    <v-card-text>
                      <div class="icon">
                        <img src="~@/assets/images/Manual.svg" alt="" />
                      </div>
                      <v-dialog
                        scrollable
                        class="dialogCard methodDialog"
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
                            手動新增名單
                          </v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card>
                            <v-card-text class="px-4">
                              <div class="">
                                <v-form>
                                  <v-container>
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >請輸入身分證字號
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <v-text-field
                                          label="文字標準表單"
                                          density="compact"
                                          single-line
                                          hide-details="auto"
                                        ></v-text-field>
                                      </v-col>
                                    </v-row>
                                    <!-- 拍照區塊 start -->
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >拍照存証
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <div class="">
                                          <v-row class="photoBlock">
                                            <v-col cols="6">
                                              <div class="box">
                                                <v-btn
                                                  class="deleteBtn"
                                                  variant="flat"
                                                  color="error"
                                                  icon="mdi-trash-can"
                                                ></v-btn>
                                                <div class="img">
                                                  <v-img
                                                    class="logo"
                                                    src="~@/assets/images/logo.png"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                            </v-col>
                                            <v-col cols="6">
                                              <div class="box"></div>
                                            </v-col>
                                          </v-row>
                                        </div>
                                      </v-col>
                                    </v-row>
                                    <!-- 拍照區塊 end -->
                                    <!-- 電子簽名區塊 start -->
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                        >
                                          電子簽名</label
                                        >
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <div class="signBlock">
                                          <div class="box">
                                            <v-dialog
                                              max-width="500"
                                              class="fullscreenDialog signDialog"
                                              :fullscreen="dialogFull"
                                              transition="dialog-bottom-transition"
                                            >
                                              <template
                                                v-slot:activator="{
                                                  props: activatorProps,
                                                }"
                                              >
                                                <v-btn
                                                  class="fullBtn"
                                                  variant="text"
                                                  v-bind="activatorProps"
                                                  @click="dialogWidth"
                                                >
                                                </v-btn>
                                              </template>
                                              <template
                                                v-slot:default="{ isActive }"
                                              >
                                                <v-card title="">
                                                  <div
                                                    class="d-flex justify-end px-4"
                                                  >
                                                    <v-btn
                                                      class="closeBtn"
                                                      variant="text"
                                                      icon="mdi-close"
                                                      color="secondary"
                                                      @click="
                                                        isActive.value = false
                                                      "
                                                    ></v-btn>
                                                  </div>
                                                  <v-card-text class="px-4">
                                                    <div class="">
                                                      <div class="text"></div>
                                                    </div>
                                                  </v-card-text>
                                                  <v-card-actions
                                                    class="d-block"
                                                  >
                                                    <div
                                                      class="d-flex justify-center pa-4 pt-2"
                                                    >
                                                      <v-btn
                                                        text="刷掉重簽"
                                                        class="btn mx-2"
                                                        color="secondary"
                                                        variant="flat"
                                                        @click="
                                                          isActive.value = false
                                                        "
                                                      ></v-btn
                                                      ><v-btn
                                                        text="完成簽名"
                                                        class="btn mx-2"
                                                        variant="flat"
                                                        @click="
                                                          isActive.value = false
                                                        "
                                                      ></v-btn>
                                                    </div>
                                                  </v-card-actions>
                                                </v-card>
                                              </template>
                                            </v-dialog>
                                          </div>
                                        </div>
                                      </v-col>
                                    </v-row>
                                    <!-- 電子簽名區塊 end -->
                                    <!-- 個人同意區塊 start -->
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >個人同意
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <v-switch
                                          color="primary"
                                          inset
                                          @click="model2 = !model2"
                                          :label="
                                            model2
                                              ? `上傳名單當事人備註為同意`
                                              : `上傳名單當事人備註為不同意`
                                          "
                                        ></v-switch>
                                      </v-col>
                                    </v-row>
                                    <!-- 個人同意區塊 end -->
                                    <!-- alert start -->
                                    <v-alert
                                      icon="mdi-alert-outline"
                                      text=" 請注意！本筆簽收紀錄因戶政連線逾時，改採用無戶政查核方式完成簽收"
                                      variant="tonal"
                                      color="error"
                                      class="mb-6"
                                    ></v-alert>
                                    <!-- alert end -->

                                    <v-row class="formGrp">
                                      <v-col cols="12" class="text-primary">
                                        <h3 class="ml-2">驗證成功</h3>
                                      </v-col>
                                    </v-row>
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >身分證字號
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <p class="ml-2">A234567890</p>
                                      </v-col>
                                    </v-row>
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >姓名
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <p class="ml-2">王O明</p>
                                      </v-col>
                                    </v-row>
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >戶號
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <p class="ml-2">EXXXXX500</p>
                                      </v-col>
                                    </v-row>

                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >簽收狀態
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <p
                                          class="ml-2 text-primary font-weight-bold"
                                        >
                                          尚未領取(允許簽收)
                                        </p>
                                      </v-col>
                                    </v-row>
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >簽收狀態
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <p
                                          class="ml-2 text-error font-weight-bold"
                                        >
                                          非里民，不符合領取資格(不允許簽收)
                                        </p>
                                      </v-col>
                                    </v-row>
                                    <v-row class="formGrp">
                                      <v-col class="pb-2" cols="12" lg="">
                                        <label
                                          class="text-gray font-weight-bold"
                                          for=""
                                          >已領取數
                                        </label>
                                      </v-col>
                                      <v-col cols="12" class="pt-0">
                                        <p class="ml-2">1</p>
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </v-form>
                              </div>
                            </v-card-text>
                            <v-card-actions class="d-block">
                              <div class="d-flex justify-center pa-4 pt-2">
                                <v-btn
                                  text="取消"
                                  class="btn mx-2"
                                  color="secondary"
                                  variant="flat"
                                  @click="isActive.value = false"
                                ></v-btn>
                                <v-btn
                                  text="完成簽收"
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
          <h3 class="my-5 d-flex align-center">
            <span class="text-primary d-flex align-center"> 報名作業 </span>
          </h3>
          <v-row>
            <v-col>
              <v-card>
                <v-form>
                  <v-container>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for="">
                          姓名<abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-text-field
                          placeholder="文字標準表單"
                          density="compact"
                          single-line
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >生日
                          <abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <datepickerModalVue> </datepickerModalVue>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >電話
                          <abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-text-field
                          placeholder="文字標準表單"
                          density="compact"
                          single-line
                          details="文字標準表單"
                          error-messages="錯誤錯誤錯錯誤"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >是否為里民
                          <abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-select
                          placeholder="文字標準表單"
                          single-line
                          density="compact"
                          hide-details="auto"
                          :items="['是', '否']"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >詳細地址
                          <abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-text-field
                          placeholder="請輸入完整地址"
                          density="compact"
                          single-line
                          details="文字標準表單"
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >應繳納金額
                          <abbr
                            class="necessary"
                            title="為必填(選)欄位,不能為空白。"
                            >*</abbr
                          ></label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-text-field
                          placeholder="文字標準表單"
                          density="compact"
                          single-line
                          details="文字標準表單"
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >用餐
                        </label>
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-select
                          placeholder="文字標準表單"
                          single-line
                          density="compact"
                          hide-details="auto"
                          :items="['葷', '素']"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >房型
                        </label>
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <v-select
                          placeholder="文字標準表單"
                          single-line
                          density="compact"
                          hide-details="auto"
                          :items="['單人房', '雙人房']"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <!-- 拍照區塊 start -->
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for=""
                          >拍照存証
                        </label>
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <div class="">
                          <v-row class="photoBlock">
                            <v-col cols="6">
                              <div class="box">
                                <v-btn
                                  class="deleteBtn"
                                  variant="flat"
                                  color="error"
                                  icon="mdi-trash-can"
                                ></v-btn>
                                <div class="img">
                                  <v-img
                                    class="logo"
                                    src="~@/assets/images/logo.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </v-col>
                            <v-col cols="6">
                              <div class="box"></div>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                    <!-- 拍照區塊 end -->
                    <v-row class="formGrp">
                      <v-col class="pb-2" cols="12" lg="">
                        <label class="text-gray font-weight-bold" for="">
                          電子簽名</label
                        >
                      </v-col>
                      <v-col cols="12" class="pt-0">
                        <div class="signBlock">
                          <div class="box">
                            <v-dialog
                              max-width="500"
                              class="fullscreenDialog signDialog"
                              :fullscreen="dialogFull"
                              transition="dialog-bottom-transition"
                            >
                              <template
                                v-slot:activator="{ props: activatorProps }"
                              >
                                <v-btn
                                  class="fullBtn"
                                  variant="text"
                                  v-bind="activatorProps"
                                  @click="dialogWidth"
                                >
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
                                      <div class="text"></div>
                                    </div>
                                  </v-card-text>
                                  <v-card-actions class="d-block">
                                    <div
                                      class="d-flex justify-center pa-4 pt-2"
                                    >
                                      <v-btn
                                        text="刷掉重簽"
                                        class="btn mx-2"
                                        color="secondary"
                                        variant="flat"
                                        @click="isActive.value = false"
                                      ></v-btn
                                      ><v-btn
                                        text="完成簽名"
                                        class="btn mx-2"
                                        variant="flat"
                                        @click="isActive.value = false"
                                      ></v-btn>
                                    </div>
                                  </v-card-actions>
                                </v-card>
                              </template>
                            </v-dialog>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
                <v-card-actions class="d-flex justify-center mb-6 btnGrp">
                  <v-btn variant="flat" color="secondary" class="btnWidth"
                    >取消</v-btn
                  >
                  <v-btn color="primary" variant="flat"> 完成報名 </v-btn>
                </v-card-actions>
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
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";
export default {
  data: () => ({
    dialogFull: false,
    model2: true,
  }),
  methods: {
    dialogWidth() {
      window.innerWidth <= 600
        ? (this.dialogFull = true)
        : (this.dialogFull = false);
    },
  },
  mounted() {},
  components: {
    datepickerModalVue,
  },
};
</script>
<style scoped></style>
