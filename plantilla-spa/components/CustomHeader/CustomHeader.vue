<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pageTitle: String
});
</script>

<template>
    <!-- Header Start -->
    <div class="jumbotron jumbotron-fluid bg-jumbotron" style="margin-bottom: 90px;">
      <div class="container text-center py-5">
        <h3 class="text-white display-3 mb-4">{{ pageTitle }}</h3>
        <div class="d-inline-flex align-items-center text-white">
          <p class="m-0"><a class="text-white" href="/">Home</a></p>
          <font-awesome-icon icon="far fa-circle" class="px-3" />
          <p class="m-0">{{ pageTitle }}</p>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </template>