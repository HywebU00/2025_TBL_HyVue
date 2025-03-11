<template>
  <v-data-table
    class="dataTable"
    v-model:page="page"
    show-select
    :headers="headers"
    :items="desserts"
    item-value="date"
    :items-per-page="itemsPerPage"
  >
    <template v-slot:item.action="{ item }">
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-chevron-down"
            class="ma-2 bg-secondary-gradient downBtn"
            v-bind="props"
            size="x-small"
          >
          </v-btn>
        </template>
        <v-card class="pa-2">
          <v-btn
            variant="outlined"
            class="mb-2"
            block
            color="gray"
            v-bind="activatorProps"
            >查閱</v-btn
          >
          <v-btn variant="outlined" block color="gray">停用</v-btn>
        </v-card>
      </v-menu>
    </template>
    <template v-slot:item.office="{ item }">
      <v-select
        width="160"
        label="下拉式選單"
        single-line
        density="compact"
        hide-details="auto"
        :items="['選項ㄧ', '選項二', '選項三']"
      ></v-select>
    </template>
    <template v-slot:item.status="{ item }">
      <span class="text-no-wrap">
        {{ item.status }}
      </span>
    </template>
    <template v-slot:item.pay="{ item }">
      <v-select
        width="160"
        label="下拉式選單"
        single-line
        density="compact"
        hide-details="auto"
        :items="['選項ㄧ', '選項二', '選項三']"
      ></v-select>
    </template>
    <template v-slot:bottom>
      <div class="d-flex align-center justify-center pagination">
        <span
          >共{{ desserts.length }}筆資料，第1/{{
            pageCount || 1
          }}頁，每頁顯示 </span
        >
        <v-text-field
          :model-value="itemsPerPage"
          class="mx-2"
          max="15"
          density="compact"
          min="1"
          type="number"
          hide-details
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
        <span>筆</span>
      </div>
      <div class="text-center mt-6">
        <v-pagination
          active-color="gray"
          color="gray"
          size="small"
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      selected: [],
      headers: [
        {
          align: "start",
          key: "date",
          sortable: false,
          title: "申請日期",
        },
        { title: "計畫編號", key: "num" },
        { title: "收費項目名稱", key: "name" },
        { title: "單位名稱", key: "office", align: "center" },
        { title: "收費性質", key: "type" },
        { title: "申請項目", key: "project" },
        { title: "狀態", key: "status", sortable: false },
        { title: "動作", key: "action", sortable: false, align: "center" },
        { title: "收費項目", key: "pay", align: "center" },
      ],
      desserts: [
        {
          date: "2024/06/01",
          num: "N1130145",
          name: "113年學生會活動攤販租金",
          type: "一般收費",
          project: "申請新增",
          status: "申請中",
        },
        {
          date: "2024/05/20",
          num: "N1130069",
          name: "汽車停車證",
          type: "一般收費",
          project: "申請停用",
          status: "停用中",
        },
        {
          date: "2024/05/10",
          num: "N1130068",
          name: "羽球場館租借費",
          type: "一般收費",
          project: "申請新增",
          status: "已通過",
        },
        {
          date: "2024/05/30",
          num: "N1130067",
          name: "端午義賣活動捐款",
          type: "捐款",
          project: "申請新增",
          status: "退回",
        },
        {
          date: "2024/04/01",
          num: "N1130066",
          name: "學生宿舍Ａ棟水費",
          type: "一般收費",
          project: "申請停用",
          status: "停用中",
        },
        {
          date: "2024/04/01",
          num: "N1130065",
          name: "112年暑期補修學分費",
          type: "保證金",
          project: "申請新增",
          status: "暫存草稿",
        },
        {
          date: "2024/03/15",
          num: "N1130064",
          name: "學生會籃球賽場地費",
          type: "代收代付",
          project: "申請停用",
          status: "申請停用",
        },
      ],
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.desserts.length / this.itemsPerPage);
    },
  },
};
</script>
