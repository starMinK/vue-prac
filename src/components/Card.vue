<script>
export default {
  props: {
    product: Object
  },
  methods: {
    openModal(){
      this.$emit('openModal', this.product.id);
    }
  }
}
</script>

<template>
  <div class="product_card">
    <img :src="product.image" alt="상품 이미지입니다." class="roomImg">
    <h4 @click = openModal()>{{ product.title }}</h4>
    <p>{{ product.price }}원</p>
  </div>
</template>

<style>
.product_card {
  text-align: center;
}

.roomImg {
  width: 100%;
  margin: 40px;
}
</style>