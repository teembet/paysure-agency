<template>
  <div>
    <Loader v-show="loader" />
    <div class="login-block">
      <div class="row">
        <div class="col-lg-5">
          <router-link to="/">
            <img class="img-abs" src="../assets/paysure_White.png" />
          </router-link>

          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <carousel :autoplay="true" :nav="true" :items="1">
              <img src="../assets/caro1.png" style="height:100vh !important" />
            </carousel>
          </div>
        </div>
        <div
          class="col-lg-7 d-flex justify-content-center align-items-center  "
          style="overflow:auto;height:100vh"
        >
          <div class="container">
               <div class="success-container d-flex flex-column">
              <span class="icon"><i class="fas fa-check"></i></span>
              <h2 class="col-lg-8 mt-4 text-center" style="color:#5323D7">
                Please Input Token
              </h2>
              <main> 
          <div class="pin-wrapper">
        <div class="digits">
            <input type="text" @change="change" class="focus">
            <span class="digit" @change="change" data-digit=""></span>
            <span class="digit" @change="change" data-digit=""></span>
            <span class="digit" @change="change" data-digit=""></span>
            <span class="digit" @change="change" data-digit=""></span>
            <div class="caret"></div>
        </div>
          </div>

        <button class="submit">
            <svg width="113" height="96" viewBox="0 0 113 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M113 48L65.4099 0L55.852 9.55112L87.568 41.2462H0V54.7538H87.568L55.8531 86.4485L65.411 96L113 48Z" />
            </svg>
        </button>

        <div class="result">
            <span>Success! Your code is <span class="result-pin"></span>.</span><br>
            <button class="reset">Reset</button>
        </div>
              </main> 
    </div>
        
              <router-link to="/tokenpage" class="btn-login col-lg-6 mt-5" tag="button">Continue</router-link>
            </div>
         </div>
        </div>
      </div>
    </div>
  
</template>

<script>
import Loader from "@/components/loader.vue";
export default {
  name: "TokenPage",
  components: {
    Loader,
  },
  data(){
    return{
      loader:false,

    }
  },

}




  

</script>


<style scoped>
body {
  background: #FEE8E8;
}
@-webkit-keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
main {
  transition-duration: 0.6s;
}
main .pin-wrapper {
  font-weight: 600;
  color: #F05A5D;
  align-items: center;
  background: #FFFEFE;
  font-size: 1.7em;
  line-height: 1;
  position: relative;
}
main .pin-wrapper .digits {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 1em;
  padding: 40px 45px;
  width: 280px;
}
main .pin-wrapper .digits .digit {
  position: relative;
  display: block;
  min-height: 1rem;
  min-width: 1rem;
}
main .pin-wrapper .digits .digit::before {
  content: attr(data-digit);
  display: block;
  opacity: 0;
  transform: scale(0.6);
  transition-duration: 0.2s;
  transition-delay: 0.15s;
  margin-top: -1px;
}
main .pin-wrapper .digits .digit[data-digit=""]::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 28px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FEE8E8;
}
main .pin-wrapper .digits .digit.shown::before {
  opacity: 1;
  transform: scale(1);
  transition-duration: 0.45s;
}
main .pin-wrapper .digits .caret {
  position: absolute;
  width: 0;
  height: 28px;
  background: #F05A5D;
  left: 0;
}
main .pin-wrapper .submit {
  position: absolute;
  background: #F05A5D;
  top: 0;
  left: 100%;
  height: 100%;
  width: calc(1rem + 90px);
  border: none;
  z-index: -1;
  transform: translateX(-100%);
  transition-duration: 0.6s;
}
main .pin-wrapper .submit svg {
  width: 40px;
  position: absolute;
  top: 50%;
  transform: translate(-25%, -50%);
  opacity: 0;
  left: 0;
  right: 0;
  margin: auto;
  fill: white;
  transition-duration: 0.6s;
  transition-delay: 0.25s;
}
main .pin-wrapper .result {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: white;
  background: #F05A5D;
  font-weight: 300;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px 30px;
  box-sizing: border-box;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition-duration: 0.4s;
  transition-delay: 0.2s;
  z-index: 99;
  flex-direction: column;
}
main .pin-wrapper .result .result-pin {
  font-weight: 600;
}
main .pin-wrapper .result.shown {
  opacity: 1;
  transform: none;
  pointer-events: all;
  transition-delay: 0.85s;
}
main .pin-wrapper .result button.reset {
  background: none;
  border: none;
  border-bottom: 2px solid white;
  padding: 0 0 2px;
  font-weight: 600;
  font-size: 0.8em;
  font-family: 'Roboto Mono';
  color: white;
  cursor: pointer;
}
main .focus {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
main .focus:focus ~ .caret.blink {
  -webkit-animation: blink 0.5s infinite alternate;
          animation: blink 0.5s infinite alternate;
}
main.show-button {
  transform: translateX(calc(-0.5rem - 45px));
}
main.show-button .pin-wrapper .submit {
  transform: none;
}
main.show-button .pin-wrapper .submit svg {
  transform: translateY(-50%);
  opacity: 1;
}

</style>
<style scoped>
.icon {
  height: 100px;
  width: 100px;
  border-radius: 25px;
  color: #fff;
  background-color: #5323d7;
  font-size: 40px;
}
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-block {
  height: auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 100%;

  background: var(--body-color);
}
.title {
  color: var(--primary-color);
}
.title-2 {
  font-size: var(--normal-font);
  color: var(--text-color);
  font-size: var(--smaller-font-size);
}

/* padding: 50px 0;
}

.carousel-height{
  height: auto;
}


.carousel-inner {
	border-radius: 0 10px 10px 0;
}

.carousel-caption {
	text-align: left;
	left: 5%;
}*/
.form-info {
  padding: 20px;
  border: 1px solid grey;
  margin-top: 1rem;
  background-color: var(--body-color);
}
.resize {
  margin-top: 1rem;
  padding: 2rem;
}
.carousel-indicators {
  position: absolute;
  right: 0;

  left: 0;
  bottom: 158px;
  z-index: 15;

  margin-right: auto;
  margin-left: auto;
  list-style: none;
}
.pull-right {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 992px) {
  .login-block {
    overflow: auto;
  }
  .carousel-indicators {
    bottom: 0;
  }
  .carousel {
    display: none;
  }
}

.btn-login {
  padding: 10px 10px;
  background-color: var(--primary-color);
  color: var(--white-color);
  border-radius: 4px;
  width: 400px;
  height: 52px;

  cursor: pointer;
  -moz-transition: box-shadow 1s;
  -o-transition: box-shadow 1s;
  -webkit-transition: box-shadow 1s;
  transition: box-shadow 1s;
}

.banner-sec {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.img-abs {
  position: absolute;
  max-width: 100% !important;
  z-index: 2;
  height: 30px !important;
  margin: 20px;
  top: 0px;
}
.carousel-indicators li {
  width: 30px !important;
  height: 10px !important;
  border-radius: 50% !important;
}
.carousel-indicators {
  width: 40px !important;
  height: 15px;
  border-radius: 50% !important;
}
/* .carousel-inner {
  background-image: url(../../assets/images/Overlay.svg);
} */
.btn-prev {
  background: var(--body-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  /* padding: 10px 10px; */
  border-radius: 4px;
  width: 100%;
  height: 52px;
  cursor: pointer;
  -moz-transition: box-shadow 1s;
  -o-transition: box-shadow 1s;
  -webkit-transition: box-shadow 1s;
  transition: box-shadow 1s;
}
</style>
