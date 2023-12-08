
# 🍎인스타그램을 만들며 배워보는 Vue.js 3 완벽 가이드
> **tutor**: 코딩애플  
> link: [coding apple](https://codingapple.com/course/vue-js/)
---
  <p align="center"><img src="https://codingapple.com/wp-content/uploads/2021/05/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-44.png" height="600px" width="1000px"></p>  
  
## 목차  
1. PART1  
1-1. [Vue의 데이터바인딩](#1\-1-Vue의-데이터바인딩)  
1-2. [Vue의 반복문 v-for](#1\-2-Vue의-반복문-v\-for)  
1-3. [Vue 이벤트 핸들러](#1\-3-Vue의-이벤트-핸들러)  
1-4. [Vue의 조건문 v-if](#1\-4-Vue의-조건문-v\-if)  
1-5. [import/export](#1\-5-importexport)  
1-6. [모달창 만들기](#1\-6-모달창-만들기)  
1-7. [컴포넌트(Component)](#1\-7-컴포넌트component)  
1-8. [Props](#1\-8-Props)  
1-9. [Custom Event](#1\-9-Custom-Event)  
1-10. [Vue에서 사용자의 데이터 받기 v-model](#1\-10-Vue에서-사용자의-데이터-받기-v\-model)  
1-11. [감시자 Watcher](#1\-11-감시자-Watcher)  
1-12. [Vue에서 UI 애니메이션 주기](#1\-12-Vue에서-UI-애니메이션-주기)  
1-13. [상품정렬기능, 데이터 원본 보존](#1\-13-상품정렬기능-데이터-원본-보존)  
1-14. [Vue의 라이프사이클과 후크](#1\-14-Vue의-라이프사이클과-후크)  
2. PART2  
<br/>

  ---  
  
<br/>  

# 1-1. Vue의 데이터바인딩
**데이터바인딩**이란 자바스크립트 변수나 데이터를 HTML에 꽂아넣는 것을 말합니다.  
  
<br/>  
  
> **자바스크립트**의 데이터 바인딩  
1. document.getElementBy()와 같은 js문법을 사용하여 class 혹은 id 값을 입력합니다.
2. innerHtml을 사용하여 선택된 HTML 안에 값을 대입합니다.  

```Html
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

```html
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
    <div>{{ title }}</div>
</template>
```  
<br/>

> 결과

<p align="left"><img src="src/assets/readme/result1-1-1.png" height="500px" width="700px"></p>  

<br/>

> HTML의 **속성**도 데이터바인딩이 가능합니다.  

```html
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
```

> 결과

<p align="left><img src="src/assets/readme/result1-1-2.png" height="500px" width="700px"></p>

<br/>

---

<br/>

# 1-2. Vue의 반복문 v-for  
```
<div class="menu">
    <a v-for="[작명] in 3" :key="[작명]">Home</a>
</div>
```
<br/>
이해를 돕기위해 Java의 for-eatch문과 같이 설명해보겠습니다.

v-for문은 Java의 for-eatch문과 비슷하게 작동한다고 생각하면 좋을것 같습니다.  

> Java의 향상된 for문(for-eatch)  
```Java
List<String> itemList = new ArrayList<>(){
    add("Hello")
    add("World")
    add("!!!!")
};

for(item : itemList) {
    System.out.println(item);
}

//출력:
//Hello
//World
//!!!!
```  
<br/>
Java의 향상된 for문(for-eatch)은 item이라는 변수를 for문과 같이 작성하고  
itemList라는 list의 값을 하나씩 item에 대입하여 반복문 내부의 코드를 실행시키는 구조입니다.  
<br/>
item과 itemList는 변수명, 리스트명이며 마음대로 작명할 수 있습니다.  
<br/>
<br/>
Vue의 반복문 v-for도 이와 같은 원리로 [작명] 부분이 변수를 선언하는 부분이며  
'3' 부분에 반복할 수 혹은 List를 넣을 수 있습니다.  
<br/>
따라서 반복되는 수 '3'를 넣은 경우 들어간 데이터([작명])가 3번 똑같이 반복되며
List를 넣은경우는 데이터에 List안의 값이 순서대로 들어가며 List.length() 만큼 반복됩니다.

```html
<script>
export default {
  data() {
    return {
      itemList: ['item1', 'item2', 'item3'],
    }
  }
}
</script>

<template>
  <br/>
  <div class="item-box">
    <a style="width: 100px; height: 50px; border: 1px solid black; padding: 10px; margin: 10px;"
      v-for="item in itemList" :key="item">{{ item }}</a>
  </div>
</template>

<style>

</style>
```  

> 결과

<p align="left"><img src="src/assets/readme/result1-2-1.png" height="100px" width="400px"></p>  

<br/>

<br/>  

---

<br/>  

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
