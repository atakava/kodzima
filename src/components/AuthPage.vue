<script>
export default {
  name: "AuthPage"
}
</script>

<template>
  <div class="card" v-motion-slide-left>
    <img src="/img/6.jpg" class="img-auth">
    <div class="info-auth">
      <h1 class="title">Хидэо Кодзима</h1>
      <div class="short-info">
        <p class="text">24 августа 1963</p>
        <div class="slesh"></div>
        <p class="text">Япония</p>
        <div class="slesh"></div>
        <p class="text">геймдизайнер</p>
      </div>
      <p class="long-text">
        Кодзима известен своеобразным авторским подходом к созданию игр, ещё до прихода в игровую индустрию он увлекался
        литературой и кинематографом и позже рассматривал разработку игр как новую возможность для художественного
        творчества. Кодзима на протяжении многих лет работал в компании Konami Digital Entertainment, в том числе как
        руководитель внутренней студии Kojima Productions, и некоторое время был вице-президентом Konami. После разрыва
        с Konami в 2015 году Кодзима воссоздал и возглавил Kojima Productions уже как независимую студию.
      </p>
      <button class="btn">
        <router-link to="/bio">
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="38" viewBox="0 0 82 38" fill="none">
            <path
                d="M80.7678 20.7678C81.7441 19.7915 81.7441 18.2085 80.7678 17.2322L64.8579 1.32233C63.8816 0.34602 62.2986 0.34602 61.3223 1.32233C60.346 2.29864 60.346 3.88155 61.3223 4.85786L75.4645 19L61.3223 33.1421C60.346 34.1184 60.346 35.7014 61.3223 36.6777C62.2986 37.654 63.8816 37.654 64.8579 36.6777L80.7678 20.7678ZM0 21.5H79V16.5H0V21.5Z"
                fill="white"/>
          </svg>
        </router-link>
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>

.card {
  width: 100%;
  height: 100vh;
  background: #222831;
  overflow: hidden;
  padding: 0 65px 0 65px;
  display: flex;
  justify-content: center;

  img {
    width: 570px;
    margin-right: 50px;
  }

  .info-auth {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
      font-size: 50px;
    }

    .short-info {
      display: flex;
      align-items: center;
      margin-top: 42px;
      font-size: 25px;

      .slesh {
        width: 2.5px;
        height: 50px;
        background: #393E46;
        transform: rotate(20deg);
        margin: 0 15px 0 15px;
      }
    }

    .long-text {
      margin-top: 44px;
      font-size: 25px;
      text-align: justify;
    }

    .btn {
      background: #393E46;
      border: 0;
      padding: 15px 55px;
      border-radius: 15px;
      margin-top: 70px;
    }
  }
}
</style>