
# 🍎인스타그램을 만들며 배워보는 Vue.js 3 완벽 가이드
> **tutor**: 코딩애플  
> link: [coding apple](https://codingapple.com/course/vue-js/)   
> > 해당 글은 전부 **코딩애플**님의 강의를 보며 정리한 글입니다.   
> > 일부분 강좌와 동일하게 작성된 부분이 있을 수 있음을 미리 알려드립니다.
---
  <p align="center"><img src="https://codingapple.com/wp-content/uploads/2021/05/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84-44.png" height="500px" width="1000px"></p>  
  
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

<p align="left"><img src="src/assets/readme/result1-1-2.png"></p>  

<br/>

---

<br/>

# 1-2. Vue의 반복문 v-for  

<details>
<summary>😎 내용 보기</summary>

```html
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
'3' 부분에 반복할 수 또는 List와 같은 배열을 넣을 수 있습니다.  
<br/>
따라서 반복되는 수 '3'를 넣은 경우 들어간 데이터([작명])가 3번 반복되며
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

</details>

<br/>  

---

<br/>  

# 1-3. Vue의 이벤트 핸들러

<details>
<summary>😎 내용 보기</summary>

### 버튼을 누르면 기능을 실행하고 싶은 경우

> **자바스크립트**의 경우

```html
<script>
function hello() {
    alert("안녕하세요");
}
</script>

<body>
    <button onclick="hello()">Say Hello!!</button>
</body>
```
   
<br/>   
   
> **Vue**의 경우

```html
<div>
  <button @click="alert('안녕하세요.')">Say Hello!!</button>
</div>
```

<br/>

클릭했을때 실행되는 **@click**이외에 마우스를 올렸을때 실행되는 **@mouseover**   
인풋값에 값을 입력할때마다 실행되는 **@input** 등 많은 이벤트 핸들러도 만들 수 있습니다.   
   
또한 실행되어야 하는 코드가 길 경우 함수로 만들어서 사용할 수도 있습니다.   

<br/>

> 예제

```html
<script>
export default {
    data(){
      return {
        reportCount : 0,
      },
    },
    methods : { 
      increase(){ 
        <!--methods에서 선언된 함수에서 data()에 선언된 변수를 사용하려면 꼭 this.을 앞에 붙여야합니다.-->
        this.reportCount += 1 
      } 
    }
}

</script>
<template>
    <div>
      <button @click="increase()")">REPORT!</button>
      <span>신고수: {{ reportCount }}</span>
    </div>
</template>
```

</details>

<br/>

---

<br/>

# 1-4. Vue의 조건문 v-if

<details>
<summary>😎 내용 보기</summary>

Vue에서의 조건문은 태크안에 속성으로 들어갑니다.
```html
<div class="modal" v-if="modalStatus == true">
```
   
   만약 조건식의 반환값이 true라면 해당 태그는 노출되고 그렇지 않다면 아예 보이지 않습니다.
   
   <br/>
   
   > 실제 사용 예제
   ```html
    <script>
        export default(){
            data() {
                return{
                    modalStatus: true,
                }
            }
        }
    </script>
    
    <template>
        <div class="black-bg" v-if="modalStatus == true">
          <div class="white-bg">
            <h4>상세페이지</h4>
            <p>상세페이지내용임</p>
            <button @click="modalStatus = false">모달창 닫기</button>
          </div>
        </div>
    </template>
   ```
   
   </details>
   
   <br/>
   
   ---
   
   <br/>
   
# 1-5. import/export
<details>
<summary>😎내용 보기</summary>  

Html에서는 보편적으로 html, css, js가 전부 들어가면 코드가 너무 길어지기 때문에 파일을 분리합니다.   
그럴때 쓰이는것이 import(불러오기)/export(내보내기)입니다.   
<br/>
자바스크립트에서 사용법과 Vue에서의 차이점을 알아봅시다.   

<br/>

> 자바스크립트에서의 import / export
```js
//선언부 앞에 export 붙이기

// 📁 say.js
export function sayHi() { ... }
export function sayBye() { ... }
export function becomeSilent() { ... }

// 📁 main.js
import {sayHi, sayBye} from './say.js';
```

<br/>

> Vue에서의 import / export
```js
//📁 say.js
export default sayHi() { ... }
```

```html
<!--📁 App.vue-->
<script>
import [작명] from './say.js';
</script>
```

<br/>

Vue는 export default 옆에 내보낼 변수나 자료형을 입력하면 됩니다.   
1. export default는 파일 맨마지막에 딱 한번 사용가능하고   
2. import시 작명은 자유롭게 가능합니다.   


> Vue에서의 import / export{} 문법
```js
// 📁 apple.js
let apple = 10;
let apple2 = 100;
export {apple, apple2}
```
```html
<!--📁 App.vue-->
import [작명] from './apple.js';
</script>
```

1. export는 원하는 만큼 사용할 수 있습니다.   
2. export{}문법으로 받아올 시에는 작명이 불가능하고 export 했던 변수 혹은 함수명을 그래도 적어야합니다.

### import로 받아온 데이터 사용하는 법
```html
<!--📁 App.vue-->
<script>
import data from './oneroom.js파일경로'

data(){
  return {
    data : data //data는 방 정보가 담겨있는 배열이라고 생각해봅시다.
  }
}
</script>

<template>
    <div>
      <h4>{{data[0].title}}</h4>
      <p>{{data[0].price}}</p>
    </div>
</template>
```

</details>

<br/>

---

<br/>

# 1-6. 모달창 만들기

<details>
<summary>😎 내용 보기</summary>

저희는 예전에 [1-4. Vue의 조건문 v-if](#1\-4-Vue의-조건문-v\-if) 에서 간단히 모달창을 만들어 본적이 있습니다.   

<br/>

> 이전 코드 예제

```
 <script>
     export default(){
         data() {
             return{
                 modalStatus: true,
             }
         }
     }
 </script>
 
 <template>
     <div class="black-bg" v-if="modalStatus == true">
       <div class="white-bg">
         <h4>상세페이지</h4>
         <p>상세페이지내용임</p>
         <button @click="modalStatus = false">모달창 닫기</button>
       </div>
     </div>
 </template>
```

<br/>

위 코드를 **첫째 상품을 누르면 첫째 상품의 제목, 가격, 설명**   
**둘째 상품을 누르면 둘째 상품의 제목, 가격, 설명**
이런식으로 코드를 변경해 봅시다.   

<br/>

```html
 <script>
     export default(){
         /*
         data() : 코드에서 쓰일 변수들을 선언 및 저장해놓는 공간입니다.   
            modalStatus: 모달창이 열려야하는지 확인하기 위해 필요한 변수입니다.   
            products: 상품 정보 데이터를 저장시켜 놓은 2차원 배열입니다.
            <!--데이터같이 많은 코드를 필요로 하는 코드는 따로 분리하여 import를 해오면 좋습니다.-->
            modalSelect: 어떤 상품을 선택했는지 구분하기 위해 필요한 변수입니다.
        */
         data() {
             return{
                 modalStatus: true,
                 products: {
                     [id: 0, title: "sweet home", price: 10000, content: "스위트홈. 귀신 출몰 주의", image: "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg"],
                     [id: 1, title: "goat home", price: 850000, content: "-GOAT-", image: "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg"],
                     [id: 2, title: "faker home", price: NaN, content: "감히 범접하려 들지 말라", image: "https://upload3.inven.co.kr/upload/2023/11/12/bbs/i15093764331.png?MW=800"]
                 },
                 modalSelect: 0,
             }
         }, 
     }
 </script>
 
 <template>
    <!-- 모달 창-->
  <div class="black-bg" v-if="modalStatus == true">
    <div class="white-bg">
      <h4>{{ products[].title }}</h4>
      <p>{{ products[].content }}</p>
      <p>{{ products[].price }}원</p>
      <button @click="modalStatus = false">모달창 닫기</button>
    </div>
  </div>
 
  <!--product_card가 products.length만큼 생성됩니다.-->
  <div class="product_card" v-for="(product,i) in products" :key="product" :product="products[i]">
    <img :src="product.image" alt="상품 이미지입니다." class="roomImg">
    <!--@click 이벤트리스터를 통해 클릭했을때 modalStatus가 true, modalSelect에 i(인덱스)가 들어가게 됩니다.-->
    <h4 @click = "modalStatus = true; modalSelect = i")>{{ product.title }}</h4>
    <p>{{ product.price }}원</p>
  </div>
 </template>
```
    
> 결과

<p align="center"><img src="src/assets/readme/result1-6-1.gif"></p>  

<br/>

</details>

<br/>

---

<br/>

# 1-7. 컴포넌트(Component)
<details>

<summary>😎 내용 보기</summary>

### 컴포넌트란
**원하는 HTML 덩어리를 한 글자로 축약**할 수 있게 도와주는 문법입니다.   
<br/>

컴포넌트를 만드는 방법은 html에서 css와 js를 파일을 분리시켜 import, export 해오는 것과 같은 원리입니다.   
example.vue 파일을 아무데너 만든 후 축약할 HTML을 붙여넣어주면 됩니다.   

<br/>

앞서 작성한 모달창과 카드를 같이 가지고 있는 코드를 들고와 컴포넌트를 적용시켜 봅시다.   

<br/>

> 앞서 작성한 모달창 코드

```html
 <script>
     export default(){
         data() {
             return{
                 modalStatus: true,
                 products: {
                     [id: 0, title: "sweet home", price: 10000, content: "스위트홈. 귀신 출몰 주의", image: "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg"],
                     [id: 1, title: "goat home", price: 850000, content: "-GOAT-", image: "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg"],
                     [id: 2, title: "faker home", price: NaN, content: "감히 범접하려 들지 말라", image: "https://upload3.inven.co.kr/upload/2023/11/12/bbs/i15093764331.png?MW=800"]
                 },
                 modalSelect: 0,
             }
         }, 
     }
 </script>
 
 <template>
  <div class="black-bg" v-if="modalStatus == true">
    <div class="white-bg">
      <h4>{{ products[].title }}</h4>
      <p>{{ products[].content }}</p>
      <p>{{ products[].price }}원</p>
      <button @click="modalStatus = false">모달창 닫기</button>
    </div>
  </div>

  <div class="product_card" v-for="(product,i) in products" :key="product" :product="products[i]">
    <img :src="product.image" alt="상품 이미지입니다." class="roomImg">
    <h4 @click = "modalStatus = true; modalSelect = i")>{{ product.title }}</h4>
    <p>{{ product.price }}원</p>
  </div>
 </template>
```

<br/>

> 컴포넌트를 적용한 모달창 코드

```html
<!--📁 App.vue-->
<script>
//import [작명] from "/경로";
import Modal from "./components/Modal.vue";
import products from "./assests/oneroom";

export default {
    name: 'App',
},
data() {
    return {
        // ./assests/oneroom.js를 import해온 products를 선언한 변수 products에 넣는다.
        products: products
    }
}
</script>

<template>
    <Modal :products="products" :click="click" :modalStatus="modalStatus" @closeModal="modalStatus = false"></Modal>
    
</template>
```

<details>
<summary> 📁 Modal.vue </summary>

```html

<br/>

<!--📁 Modal.vue-->
<script>
export default {
  name: 'Modal',
  //props는 자식 객체에서 부모 객체를 사용하기 위해 사용됩니다.
  //더 자세한 내용은 1-8 Props챕터에서 다뤄보도록 합시다.
  props: {
    products: Array,
    click: Number,
    modalStatus: Boolean,
  },
}
</script>
<template>
  <div class="black-bg" v-if="modalStatus === true">
    <div class="white-bg">
      <h4>{{ products[click].title }}</h4>
      <img :src="products[click].image">
      <p>{{ products[click].content }}</p>
      <p>{{ products[click].price }} 원</p>
      <!--
      아래 코드는 에러가 날 테니 잠시 주석처리를 해놓도록 합시다.
      자식 객체에서 부모 객체의 값을 수정할 수 없습니다.
      자세한 내용은 1-9 Custom Event챕터에서 다뤄집니다.
      -->
      <!--<button @click:modalStatus = false>창 닫기</button>-->
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

```

</details>

<details>
<summary> 📁 oneroom.js </summary>
  
```js
const products = [{
    id: 0,
    title: "Sinrim station 30 meters away",
    image: "https://codingapple1.github.io/vue/room0.jpg",
    content: "18년 신축공사한 남향 원룸 ☀️, 공기청정기 제공",
    price: 340000
},
    {
        id: 1,
        title: "Changdong Aurora Bedroom(Queen-size)",
        image: "https://codingapple1.github.io/vue/room1.jpg",
        content: "침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능",
        price: 450000
    },
    {
        id: 2,
        title: "Geumsan Apartment Flat",
        image: "https://codingapple1.github.io/vue/room2.jpg",
        content: "금산오거리 역세권 아파트입니다. 애완동물 불가능 ?",
        price: 780000
    },
    {
        id: 3,
        title: "Double styled beds Studio Apt",
        image: "https://codingapple1.github.io/vue/room3.jpg",
        content: "무암동인근 2인용 원룸입니다. 전세 전환가능",
        price: 550000
    },
    {
        id: 4,
        title: "MyeongIl Apartment flat",
        image: "https://codingapple1.github.io/vue/room4.jpg",
        content: "탄천동 아파트 월세, 남향, 역 5분거리, 허위매물아님",
        price: 680000
    },
    {
        id: 5,
        title: "Banziha One Room",
        image: ("https://codingapple1.github.io/vue/room5.jpg"),
        content: "반지하 원룸입니다. 비올 때 물가끔 새는거 빼면 좋아요",
        price: 370000
    }];

export default products;

```

</details>
</details>

<br/>

---

<br/>

# 1-8. Props
<details>

<summary>😎 내용 보기</summary>

### Props란 
componet를 import해올 때 자식이 부모가 가진 데이터를 쓰기위한 문법입니다.   
Props를 사용할려면 3가지 규칙을 지켜야합니다.   
1. 보내고   
2. 등록하고   
3. 사용하면 됩니다.   

<br/>

3번은 생략해도 에러는 나지 않습니다.    

> 1. 보내기
```html
<!--📁 App.vue -->
<script>
    import products from "./assests/oneroom.js";

    export default {
        name: App,
        data() {
            return {
                products: products,
            }
        }
    }
</script>

<template>
    <Modal :products="products"></Modal>
</template>
```
 <br/>
 
 이런식으로 데이터바인딩 문법을 사용하면 <Modal>로 products 데이터를 보낼 수 있습니다.   
 콜론( : )은 데이터바인딩과 props전송 2가지 역할이 가능합니다.   
 
 <br/>
 
 > 2. 등록하기
 App.vue(부모)에서 데이터를 보내주었으니 이제 Modal.vue(자식)에서 데이터를 받아 등록해 줄 차례입니다.   
 ```html
 <script>
  export default {
    name : 'Modal',
    props : {
      원룸들 : Array,
    }
  }
</script>
 ```
 
 porps: {}를 열고 [부모객체에서 정해준 데이터명] :[자료형]의 형태로 적어주시면 됩니다.   
 여기서 자료형을 적을 적는 이유는 단순히 정확성때문입니다.   
 1. 자식 컴포넌트에서 props에 대한 자료형을 선언해 놓으면, 부모 컴포넌트에서 넘어오는 props 변수들의 자료형과 비교합니다.   
 2. 만약 자식 컴포넌으틔 props 자료형과 부모 컴포넌트의 props 자료형이 일치하지 않는다면, 콘솔창에서 경고 메세지로 알려줍니다.   

 <br/>

참고로 props에서 적는 자료형은 아래와 같습니다.   

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```
 
 <br/>
 
 > 3. props로 등록한 것들은 HTML안에서 데이터바인딩으로 자유롭게 사용이 가능합니다.   
 > > 하지만 props로 등록된것은 사용만 가능할 뿐, 데이터 조작은 불가능합니다.   
 > > 다음 챕터에서는 props로 등록된 데이터를 수정하기 위해 Custom Event를 알아봅시다.
</details>

<br/>

---

<br/>


# 1-9. Custom Event
<details>

<summary>😎 내용 보기</summary>

> props의 데이터를 수정하지 못하는 이유가 뭘까?

(Vue 공식 문서 왈)
모든 prop는 부모와 자식 사이에 **단방향 바인딩**을 형성합니다.   
즉, 부모의 데이터가 업데이트 되면 자식에게도 영향을 끼치지만 반대 방향은 그렇지 않습니다.   
이렇게 하면 하위 구성 요소(자식)이 실수로 상위 구성 요소(부모)의 상태를 변경하여 앱의 데이터 흐름을 이해하기 어렵게 만드는 것을 방지할 수 있습니다.   
<br/>
하지만 저희는 자식 컴포넌트에서 부모 속성을 건드리고 싶기떄문에 **custom event**라는 문법을 사용할겁니다.   
1. 자식은 **$emit(작명, 전달할자료)** 이렇게 부모에게 메세지를 보낼 수 있습니다. 부모까지 자료를 전달하고 싶으면 선택적으로 기입이 가능합니다.   
2. 부모는 @작명="데이터변경하는JS코드" 이렇게 메세지를 수신해서 원하는 데이터를 변경하도록 코드를 짭니다.  

<br/>

> 그럼 이제 컴포넌트화된 모달창의 닫기 버튼을 살려봅시다.

```html
<!--📁 App.vue-->
<!--
@[작명] = [데이터변경하는 JS코드]
@[자식 컴포넌트에서 $emit('closeModal') 이라는 요청을 보내면] = ["modalStatus = flase 로 만들어라."]
-->
<Modal @closeModal="modalStatus = false"  />

```

<details>
<summary>📁 Modal.vue</summary>

```html
<!--📁 Modal.vue-->
<script>
export default {
  name: 'Modal',
  props: {
    products: Array,
    click: Number,
    modalStatus: Boolean,
  },
}
</script>
<template>
  <div class="black-bg" v-if="modalStatus === true">
    <div class="white-bg">
      <h4>{{ products[click].title }}</h4>
      <img :src="products[click].image">
      <p>{{ products[click].content }}</p>
      <p>{{ products[click].price }} 원</p>
      <!--V 이 부분 보시면 됩니다. V-->
      <button @click=$emit('closeModal')>창 닫기</button>
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

```

</details>

</details>

<br/>

---

<br/>


# 1-10. Vue에서 사용자의 데이터 받기 v-model
<details>

<summary>😎 내용 보기</summary>

앱은 사용자에게 값을 입력하게하고 해당 값을 가지고 여러가지 일을 수행해내야 합니다.   
그럴려면 우선 사용자의 데이터를 받아 값을 저장해놓아야합니다.   

<br/>

data()에 데이터를 담을 변수를 선언해놓고 담으면 되겠죠?

> 예제입니다.
```html
<template>
  <input @input="month = $event.target.value">
</template>
<script>
export default {
  data(){
    return {
      month : 0
    }
  }
}
</script>
```
<br/>

1. **@input**은 input에 뭔가 __입력할 때 마다 동작__ 하는 이벤트핸들러입니다.   
2. **$event**는 Vue가 제공하는 특별한 변수입니다. event object를 뜻합니다.   
2-1. JS 이벤트리스너에서 __addEcentListener('click', function(e){});__ 이런 문법을 사용하는데 여기서의 **e**와 같은 의미입니다.   
2-2. 따라서 **@event.target.value**는 input의 값(value)을 가져올 수 있게됩니다.   

<br/>

하지만 이것보다 쉬운 v-model 문법이 있습니다.   
해당 속성은 input 외에 select, textarea, checkbox 등에도 사용할 수 있습니다.   
```html
<script>
export default {
    data() {
        return {
            month : 0,
            checkYN: false,
        }
    }
}
</script>
<!--입력된값이 month에 저장됩니다.-->
<input v-model="month"> 

<input type="checkbox" v-model="checkYN">

<select v-model="month>
<option value = 1>1</option>
<option value = 2>2</option>
<option value = 3>3</option>
<!--(생략)-->
<option value = 12>12</option>
</select>

<textarea v-model="month" placeholder="여기에 값을 입력하시오."></textarea>
```

</details>

<br/>

---

<br/>


# 1-11. 감시자 Watcher
<details>

<summary>😎 내용 보기</summary>

### Watcher(감시자)란
말 그래도 데이터를 감시하는 감시자입니다.
watch:{} 라는 항목을 신설해서 거기다가 작성하게 되면 어떤 데이터를 계속 감시하고   
**변경될 때 마다 실행되는 코드**를 작성할 수 있게 됩니다.   

> 예제
```html
<script>
export default {
    data{} {
        return {
            month: 1,
            modalStatus : false,
        }
    },
    watch : {
        month() {
            // month가 변경될때 마다 실행되는 코드
        },
        modalStatus() {
            // modalStatus가 변경될때 마다 실행되는 코
        }
    }
}
</script>
```
</details>

<br/>

---

<br/>


# 1-12. Vue에서 UI 애니메이션 주기
<details>

<summary>😎 내용 보기</summary>

## Transition
<Transition>는 Vue가 제공하는 애니메이션 태그입니다.

> 쌩 css로 애니메이션 제작
```html
<script>
    export default {
        data() {
            return {
                modalStatus: false;
            }
        }
    }
</script>

<template>
<!-- :class 이벤트핸들러를 통해 modalStatus가 true이면 end라는 클래스명을 추가-->
    <div class="start" :class ="{end : modalStatus}"> </div>
</template>

<style>
    .start {
        opacity: 0; //투명도
        transition: all 1s; //애니메이션 시간
    }
    
    .end {
        opacity: 1; //투명도도
    }
</style>
```

<br/>

> Trasition을 사용했을 때
```html
<template>
    <Transition name="modal"> 
        <!--(생략)-->
    </Transition>
</template>

<style>
    <!--.[클래스명]-enter-form-->
    .modal-enter-form {
        <!--애니메이션 동작 전 상태-->
        opacity: 0;
    }
    
    <!--.[클래스명]-active-->
    .modal-active {
        <!--
        애니메이션 동작 중 상태. 대부분 transition과 같은 것이 들어갑니다.-->
        transition: all 1s;
    }
    
    <!--.[클래스명]-enter-to-->
    .modal-enter-to {
        <!--애니메이션 동작 후 상태-->
        opacity: 1;
    }
</style>
    
```
</details>

<br/>

---

<br/>


# 1-13. 상품정렬기능, 데이터 원본 보존
<details>

<summary>😎 내용 보기</summary>

웹에서는 여러가지 항목을들 가나다 오름차순, 내림차순, abc순, 가격순, 랭킹순등 다양한 정렬 기능이 필요할 때가 있습니다.   
이번에는 가격순으로 항목을 나열하고 원상복구까지 하는 버튼들을 만들어 봅시다.   

```html
<button @click="priceSort()">가격순정렬</button>
```

```js
method : {
<!--가격순 정렬-->
    priceSort() {
        this.products.sort();
    },
    <!--가나다 내림차순-->
    koreanSort() {
        this.products.sort(function(a,b) {
            return a-b;
        }
    },
    <!--가나다 오름차순순-->
    koreanSortReverse() {
        this.products.sort(function(a,b) {
            return b-a;
        }
    }
}
```

이런식으로 간단한 js 함수를 사용하여 상품 나열이 가능하게 됩니다.   
그럼 순서를 원래대로 할려면 어떡하면 좋을까요?   

> 단순하게 데이터를 복제해놓으면 될까요?
```html
data() {
    return {
        productsOriginal: data,
        products: data
    }
},
methods : {
    sortBack(){
        this.products = this.productsOriginal;
    }
}
```

<br/>

❌ 하지만 이것은  틀렸습니다.
Array나 Object에다가 =로 무언가를 대입하면   
등호 왼쪽 오른쪽에 있는 array/object는 서로 값을 공유해달라는 뜻을 가지기 때문입니다.   

<br/>
그래서 우리는 array나 object 자료를 복사하거나 아니면 값공유가 일어나지 않게 집어넣고 싶으면   
**[...array자료]** 이렇게 사용합니다.

> 예제

```html
data(){
  return {
    productsOriginal : [...data],
    products : [...data]
  }
}
methods : { 
  sortBack(){ 
    this.products = [...this.productsOriginal]
  } 
}
```
</details>

<br/>

---

<br/>


# 1-14. Vue의 라이프사이클과 후크
<details>

<summary>😎 내용 보기</summary>


### 생명 주기(Life Cycle)표
<p align="center"><img src="https://ko.vuejs.org/assets/lifecycle.P7awcnoo.png" height="900px" width="500px"></p>

<br/>

위의 lifeCycle표는 컴포넌트될때의 과정을 나타낸 표입니다.
<br/>
1. Creation: 컴포넌트 초기화   
1-1. **컴포넌트들을 초기화**하는 단계입니다.   
1-2. 해당 단계에서 실행되는 훅들이 라이프사이클 중에서 **가장 처음 실행**됩니다.   
1-3. 서버렌더링에서 지원되는 단계   
1-4. 클라이언트나 서버 렌더 단에서 처리해야 할 일이 있으면 이 단계에서 진행됩니다.   
1-5. 아직 Component가 DOM에 추가되기 전이므로 **DOM에 접근되지 않습니다.**   
2. Mounting: DOM 삽입 단계   
2-1. Mounting 단계는 초기 렌더링 직전에 **컴포넌트에 직접 접근**할 수 있습니다.   
2-2. 초기 렌더링 직전에 돔을 변경하고자 한다면 이 단계에서 활용할 수 있습니다.   
3. Updating: 컴포넌트에서 사용되는 **반응형 속성들이 변경되거나 어떠한 이유로 재렌더링 발생 시 실행**됩니다.    
디버깅이나 프로파일링 등을 위해 컴포넌트 재 렌더링 시점을 알고 싶을 때 사용하면 됩니다.   
4. Unmount: 해체 단계 (종료)   
<br/>
LifeCycle Hook이란 위 라이프사이클이 돌아가는 도중 중간중간에 코드를 실행시키고 싶을 때 사용됩니다.

> lifecycle hook의 종류
```js
beforeCreate() //Create 전 실행
created()   //Create 후 실행
beforeMount() //Mount 전 실행
mounted()   // Mount 후 실행
beforeUpdate()  //Update 전 실행
updated()   //Update 후 실행
beforeUnmount() //Unmount 전 실행
unmounted() //Unmount후 실행
```

</details>

<br/>

---

<br/>
