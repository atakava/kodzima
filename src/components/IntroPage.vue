<script>
export default {
  name: "IntroPage"
}
</script>

<template>
  <div class="intro">
    <img class="bg-img" src="/img/1.jpg">
    <div class="overlay"></div>
    <div class="content">
      <h1 class="title">Хидэо Кодзима</h1>
      <p class="text">японский гемдизайнер</p>
      <button class="btn">
        <router-link to="auth">
          <svg xmlns="http://www.w3.org/2000/svg" width="99" height="38" viewBox="0 0 99 38" fill="none">
            <path
                d="M97.7863 17.2509C98.7523 18.2375 98.7356 19.8203 97.7491 20.7863L81.6726 36.5278C80.686 37.4938 79.1032 37.4772 78.1372 36.4906C77.1713 35.5041 77.1879 33.9213 78.1745 32.9553L92.4647 18.9628L78.4722 4.67258C77.5062 3.68604 77.5229 2.10322 78.5094 1.13724C79.4959 0.171259 81.0787 0.18792 82.0447 1.17445L97.7863 17.2509ZM1.02631 15.5001L96.0263 16.5001L95.9737 21.4999L0.973686 20.4999L1.02631 15.5001Z"
                fill="white"/>
          </svg>
        </router-link>
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.intro {
  width: 100%;
  height: 100vh;

  .bg-img {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

  .overlay {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #000;
    opacity: .27;
    z-index: 2;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    .title {
      margin: 0;
      padding: 0;
      font-size: 90px;
    }

    .text {
      margin: 0;
      padding: 0;
      font-size: 35px;
    }

    .btn {
      background: transparent;
      border: 0;
      margin-top: 25px;
      cursor: pointer;
    }

    .btn:active {
      transform: translateX(5px);
    }
  }
}
</style>