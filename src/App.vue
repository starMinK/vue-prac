<script>
import products from "./assets/oneroom";
/*import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue"*/
import modal from "@/components/Modal.vue";

export default {
  name: 'App',
  computed: {
    modal() {
      return modal
    }
  },
  data() {
    return {
      showDiscount: true,
      click: 0,
      modalStatus: false,
      reportNum: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      originalProducts: [...products],
      products: products,
      discount: 30,
    }
  },
  methods: {
    priceSort() {
      this.products.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    priceDescSort() {
      this.products.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    ascending() {
      this.products.sort(function (a, b) {
        return (a.title < b.title) ? -1 : (a === b) ? 0 : 1;
      });
    },
    sortBack() {
      this.products = [...this.originalProducts];
    },
  },
  /*Vue LifeCycle:
  생성(Creation) -> 마운트(Mounting) -> 업데이트(Updating) -> 소멸(Destruction)

  Creation: <template></template>를 생성한다.
  Mounting: <template></>template> 안의 코드를 실제 Html파일로 컴파일한다.
  Updating: 데이터가 변할때 재렌더링(re-render) 및 패치(patch)를 한다.
  Destruction: 소멸
  */
  mounted() {
    setTimeout(() => {
      this.showDiscount = false;
    }, 30000);
    setInterval(() => {
      if (this.discount >= 0) {
        this.discount--;
      }
    }, 1000);
  },
  /*components: {
    Discount,
    Modal,
    Card,
  }*/
}
</script>

<template>
  <router-view></router-view>
<!--
  <div class="menu">
    <a v-for="aTag in menus" :key="aTag"> {{ aTag }}</a>
  </div>
  <Discount v-if="showDiscount === true" :discount="discount"></Discount>
  <button @click="priceSort()">가격 오름차순 정렬</button>
  <button @click="priceDescSort()">가격 내림차순 정렬</button>
  <button @click="ascending()">이름 알파벳순 정렬</button>
  <button @click="sortBack()">되돌리기</button>
  <Transition name="fade">
    <Modal :products="products" :click="click" :modalStatus="modalStatus" @closeModal="modalStatus = false"></Modal>
  </Transition>
  <Card v-for="(product,i) in products" :key="product" :product="products[i]"
        @openModal="modalStatus = true; click =$event"></Card>
  -->
</template>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu > a {
  color: white;
  padding: 10px;
  height: ;
}

.fade-enter-from {
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  transform: translateY(0);
}

.fade-leave-from {
  transform: translateY(0);
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  transform: translateY(1000px);
}
</style>