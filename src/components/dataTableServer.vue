<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    show-select
    :loading="loading"
    item-value="name"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
  >
    <template v-slot:item.edit="{ item }">
      <v-dialog class="dialogCard" max-width="600" scrollable> </v-dialog>
    </template>
  </v-data-table-server>
</template>
<script>
const desserts = [
  {
    num: "001",
    id: "J 883 6571",
    bookID: "AC0010545",
    name: "屁屁偵探：噗噗！世紀怪盜現身",
    author: "田中陽子，深澤江秀，張東君",
    press: "遠流",
    class: "預約取書櫃",
  },
  {
    num: "002",
    id: "J 883 6572",
    bookID: "AC0010545",
    name: "屁屁偵探：噗噗！世紀怪盜現身１",
    author: "田中陽子，深澤江秀，張東君",
    press: "遠流",
    class: "預約取書櫃",
  },
  {
    num: "003",
    id: "J 883 6572",
    bookID: "AC0010545",
    name: "屁屁偵探：噗噗！世紀怪盜現身2",
    author: "田中陽子，深澤江秀，張東君",
    press: "遠流",
    class: "預約取書櫃",
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    selected: [],
    headers: [
      {
        title: "序號",
        align: "start",
        sortable: false,
        key: "num",
      },
      {
        title: "索書號",
        align: "start",
        sortable: false,
        key: "id",
      },
      {
        title: "書籍條碼",
        align: "start",
        sortable: false,
        key: "bookID",
      },
      {
        title: "標題",
        key: "name",
        align: "start",
        sortable: false,
        minWidth: "200px",
      },
      { title: "作者/譯者", key: "author", align: "start", sortable: false },
      {
        title: "出版者",
        key: "press",
        align: "start",
        sortable: false,
        width: "8%",
      },
      {
        title: "館藏地/室",
        key: "class",
        align: "start",
        sortable: false,
        width: "8%",
      },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
};
</script>
