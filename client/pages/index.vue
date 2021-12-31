<template>
  <main
  components: { FeaturedProduct },ain class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
          <!-- Sidebar -->
        </div>

        <!-- Main content -->
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8"></div>
        <FeaturedProduct />
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedProduct from '~/components/FeaturedProduct.vue';
export default {
  components: {
    FeaturedProduct
  }
}
</script>
