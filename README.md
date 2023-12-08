
# 🍎인스타그램을 만들며 배워보는 Vue.js 3 완벽 가이드
> **tutor**: 코딩애플  
> link: [coding apple](https://codingapple.com/course/vue-js/)
---  
  <p align="center"><img src="https://codingapple.com/wp-content/uploads/2021/05/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-44.png" height="600px" width="1000px"></p>
  
## 목차  
---  
1. PART1  
1-1. [Vue의 데이터바인딩](#1\-1-Vue의-데이터바인딩)  
1-2. [Vue의 반복문 v-for](#1\-2-Vue의-반복문-v\-for)  
1-3. [Vue 이벤트 핸들러](#1\-3-Vue의-이벤트-핸들러)  
1-4. [Vue의 조건문 v-if](#1\-4-Vue의-조건문-v\-if)  
1-5. [import/export](#1\-5-import\/export)  
1-6. [모달창 만들기](#1\-6-모달창-만들기)  
1-7. [컴포넌트(Component)](#1\-7-컴포넌트\(Component\))  
1-8. [Props](#1\-8-Props)  
1-9. [Custom Event](#1\-9-Custom-Event)  
1-10. [Vue에서 사용자의 데이터 받기 v-model](#1\-10-Vue에서-사용자의-데이터-받기-v\-model)  
1-11. [감시자 Watcher](#1\-11-감시자-Watcher)  
1-12. [Vue에서 UI 애니메이션 주기](#1\-12-Vue에서-UI-애니메이션-주기)  
1-13. [상품정렬기능, 데이터 원본 보존](#1\-13-상품정렬기능-데이터-원본-보존)  
1-14. [Vue의 라이프사이클과 후크](#1\-14-Vue의-라이프사이클과-후크)  
2. PART2

# 1-1. Vue의 데이터바인딩
**데이터바인딩**이란 자바스크립트 변수나 데이터를 HTML에 꽂아넣는 것을 말합니다.  
<br/>
> **자바스크립트**의 데이터 바인딩  
1. document.getElementBy()와 같은 js문법을 사용하여 class 혹은 id 값을 입력합니다.
2. innerHtml을 사용하여 선택된 HTML 안에 값을 대입합니다.
```
<html>
    <script>
        document.getElementBy(".title").innerHtml = 제목입니다.;
    </script>
    
    <body>
        <h1 class="title"></h1>
    </body>
</html>
```
<br/>  

> **Vue**의 데이터바인딩  
1. 데이터를 먼저 보관하고  
2. {{ 데이터 }} <- 이런식의 문법으로 HTML 태그 사이에 끼워넣습니다.
```
<script>
export default {
    data(){
        return {
            title : '제목입니다.',
        }
    }
}
</script>

<template>
    <div>{{ data }}</div>
</template>
```  
<br/>  

> HTML의 **속성**도 데이터바인딩이 가능합니다.  
```
<script>
    export default {
        data() {
            return {
                whiteBoxCss : 'background-color :white; weight: 500px; height: 300px;'
            }
        }
    }
</script>

<template>
    <div class="white-box" :style="whiteBoxCss">
        <p>안녕하세요.</p>
    </div>
<template>
```
# 1-2. Vue의 반복문 v-for

# 1-3. Vue의 이벤트 핸들러

# 1-4. Vue의 조건문 v-if

# 1-5. import/export

# 1-6. 모달창 만들기

# 1-7. 컴포넌트(Component)

# 1-8. Props

# 1-9. Custom Event

# 1-10. Vue에서 사용자의 데이터 받기 v-model

# 1-11. 감시자 Watcher

# 1-12. Vue에서 UI 애니메이션 주기

# 1-13. 상품정렬기능, 데이터 원본 보존

# 1-14. Vue의 라이프사이클과 후크
