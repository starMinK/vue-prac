<script>
export default {
  data() {
    return {
      whiteBoxCss :
          'background-color: white; ' +
          'border: 1px solid black;' +
          'width: 100px;' +
          'height: 50px;' +
          'margin: 10px 0 0 10px;' +
          'text-align: center;'
    }
  }
}
</script>

<template>
  <div class="white-box" :style="whiteBoxCss">
    <p>안녕하세요.</p>
  </div>
</template>