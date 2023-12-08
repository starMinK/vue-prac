<script>
export default {
  name: 'Modal',
  data() {
    return {
      month : 1,
      date: 20211202,
    }
  },
  /*watch: 감시자
  * month(){}: month의 변수가 변할때마다 실행되는 함수*/
  watch : {
    month(a) {
      console.log(typeof a)
      if (a > 12) {
        alert("값은 12보다 적어야합니다.");
        this.month = 1;
      }else if (a.length > 0 && typeof (a) != "number") {
        alert("숫자만 입력하세요.");
        this.month = 1;
      }
    },
    date() {

    },
  },
  /*props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
  }*/
  props: {
    products: Array,
    click: Number,
    modalStatus: Boolean,
  },
  beforeUpdate() {
    if (this.month === 2) {
      alert("2개월은 상품 구매가 불가능합니다.")
      this.month = 1;
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  }
}
</script>
<template>
  <div class="black-bg" v-if="modalStatus === true">
    <div class="white-bg">
      <h4>{{ products[click].title }}</h4>
      <img :src="products[click].image">
      <p>{{ products[click].content }}</p>
      <p>{{ products[click].price }} 원</p>
<!--      @input: input에 뭔가를 입력 할때마다 실행-->
<!--                  <input @input="month = $event.target.value">-->
      <input v-model.number = "month">
      <p> {{ month }}개월 선택함: {{products[click].price * month}}원</p>
      <button @click="closeModal()">창 닫기</button>
    </div>
  </div>
</template>
<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>