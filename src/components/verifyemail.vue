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
                Agent Registration Complete
              </h2>
              <p class="col-lg-8 mt-4" style="text-align:center;">
                Please go to your email to verify your account to enable you use
                our features
              </p>
              <router-link to="/tokenpage" class="btn-login col-lg-6 mt-5" tag="button">Continue</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loader.vue";
export default {
  name: "Verifyemail",
  components: {
    Loader,
  },
  data(){
    return{
      loader:false
    }
  },

  mounted(){
    this.loader=false
  }
};
</script>

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
