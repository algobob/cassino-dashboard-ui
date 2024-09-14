<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import { useRoute } from 'vue-router'

import setNavPills from "@/assets/js/nav-pills";
// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import VueTableLite from "vue3-table-lite";

onMounted(() => {
  document.title = `Value Bets`
  setNavPills();
});

const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "PROFIT",
      field: "profit",
      width: "3%",
      sortable: true,
    },
    {
      label: "SCHEDULE",
      field: "schedule",
      width: "10%",
    },
    {
      label: "EVENT",
      field: "event",
      width: "15%"
    },
    {
      label: "MARKET",
      field: "market",
      width: "15%",
    },
    {
      label: "BETS",
      field: "bets",
      width: "15%",
    },
    {
      label: "BOOKIES",
      field: "bookies",
      width: "15%",
    },
  ],
  rows: [],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});

const doSearch = (offset, limit, order, sort) => {
  table.isLoading = true;

  // Start use axios to get data from Server
  let url = 'https://www.example.com/api/some_endpoint?offset=' + offset + '&limit=' + limit + '&order=' + order + '&sort=' + sort;
  axios.get(url)
    .then((response) => {
      // Point: your response is like it on this example.
      //   {
      //   rows: [{
      //     id: 1,
      //     name: 'jack',
      //     email: 'example@example.com'
      //   },{
      //     id: 2,
      //     name: 'rose',
      //     email: 'example@example.com'
      //   }],
      //   count: 2,
      //   ...something
      // }

      // refresh table rows
      table.rows = response.rows;
      table.totalRecordCount = response.count;
      table.sortable.order = order;
      table.sortable.sort = sort;
    });
  // End use axios to get data from Server
};
</script>
<template>
  <!-- <BaseLayout :title="`Value Bets`"> -->
    <div class="container">
      <VueTableLite :is-loading="table.isLoading" :columns="table.columns" :rows="table.rows"
        :total="table.totalRecordCount" :sortable="table.sortable" :messages="table.messages" @do-search="doSearch"
        @is-finished="table.isLoading = false" />
    </div>
  <!-- </BaseLayout> -->
</template>