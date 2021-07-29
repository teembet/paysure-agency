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
        <div class="col-lg-7 " style="overflow:auto;height:100vh">
          <div class="first-page page" v-if="firstPage">
            <div class="container resize">
              <form @submit.prevent="checkFirstPage()">
                <h1 class="title">Get Started Becoming An Agent!</h1>
                <h4 class="mt-3 title-2">
                  Let's get you started creating a new agent account
                </h4>
                <div class="form-row mt-5">
                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Full Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      v-model="form.agentName"
                      required
                    />
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Prefered Username</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      v-model="form.username"
                      required
                    />
                  </div>

                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Phone Number</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      v-model="form.phoneNumber"
                      required
                    />
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Email</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      v-model="form.emailAddress"
                      required
                    />
                  </div>

                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      v-model="form.password"
                      required
                    />
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Confirm Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      v-model="confirmPassword"
                      required
                    />
                  </div>
                </div>
                <div class="center" style="margin-top:5.5rem">
                  <button class="btn-login col-lg-6" type="submit">
                    Proceed
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!--second page-->
          <div class="second-page page" v-if="secondPage">
            <div class="container resize">
              <form @submit.prevent="submitForm">
                <h1 class="title">Provide Your Business Details</h1>

                <div class="form-row mt-5">
                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Transaction Pin</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      v-model="form.transactionPin"
                    />
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Contact Person</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      v-model="form.contactPersonName"
                    />
                  </div>
                  <div class="col-lg-12 mt-3 form-row">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Upload Business Logo(PNG/SVG)</label
                    >
                    <div class="input-group mb-3">
                      <span class="btn attach" id="button-addon2">
                        <i class="fas fa-paperclip" style="color:#23A6D7"></i>
                      </span>
                      <input
                        type="file"
                        @change="selectFile"
                        multiple
                        class="form-control"
                        placeholder="Browse files or drag and drop here"
                        aria-label="Browse files or drag and drop here"
                        aria-describedby="button-addon2"
                        style="border-left:none !important;border-color:#F2F3F3;"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Enter your Bank Verification Number</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter Bvn"
                      v-model="form.bvn"
                      required
                    />
                  </div>

                  <div class="form-info col-lg-12">
                    <p class="primary-text mt-1">Why we need your Bvn</p>
                    <p class="mt-1" style="color:#B9B9B9">
                      We only need access to
                    </p>
                    <ul class="mt-3" style="display:flex;flex-direction:column">
                      <li><i class="fa fa-check"></i> &nbsp;Full Name</li>
                      <li><i class="fa fa-check"></i>&nbsp;Phone Number</li>
                      <li><i class="fa fa-check"></i>&nbsp;Date of Birth</li>
                    </ul>
                  </div>

                  <div class="form-row">
                    <div class="col-lg-4 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >State</label
                      >
                      <select
                        v-model="form.state"
                        class="form-control"
                        @change="onStateChange($event)"
                        required
                      >
                        <option disabled selected>Select State</option>
                        <option
                          v-for="(item, index) in states"
                          :key="index"
                          :value="item"
                        >
                          {{ item }}</option
                        >
                      </select>
                    </div>
                    <div class="col-lg-4 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >LGA</label
                      >
                      <select v-model="form.lga" class="form-control" required>
                        <option disabled selected>Select LGA</option>
                        <option
                          v-for="(item, index) in lgas"
                          :key="index"
                          :value="item"
                        >
                          {{ item }}</option
                        >
                      </select>
                    </div>
                    <div class="col-lg-4 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >City</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.city"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Address Line 1</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      v-model="form.addressLine1"
                      required
                    />
                  </div>
                  <div class="col-lg-6 mt-3">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Address Line 2</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      v-model="form.addressLine2"
                    />
                  </div>
                </div>

                <div
                  class="col-lg-12 row mt-4"
                  style="display:flex;justify-content:center;"
                >
                  <div class="col-lg-6 mt-5">
                    <button class="btn-prev col-lg-6" @click="prev">
                      <i class="fa fa-arrow-left"></i> Go Back
                    </button>
                  </div>

                  <div class="col-lg-6 mt-5">
                    <button class="btn-login col-lg-6" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NaijaStates from "naija-state-local-government";
import Loader from "@/components/loader.vue";
export default {
  name: "signup",
  components: {
    Loader,
  },
  data() {
    return {
      states: [],
      lgas: [],
      loader: false,
      firstPage: Boolean,
      secondPage: Boolean,
      lastPage: Boolean,
      confirmPassword: "",
      form: {
        username: "",
        password: "",
        transactionPin: "",
        agentName: "",
        contactPersonName: "",
        phoneNumber: "",
        emailAddress: "",
        logoUrl: "",

        bvn: "",

        addressLine1: "",
        addressLine2: "",
        state: "",
        lga: "",
        city: "",
      },
    };
  },
  props: {
    email: String,
  },
  methods: {
    checkFirstPage() {
      console.log("tim");

      if (this.form.password !== this.confirmPassword) {
        this.secondPage = false;
        this.firstPage = true;
        console.log("true");
        this.$toast.open({
          message: `<p style="color:white;">Please recheck password</p>`,
          type: "error",
          duration: 5000,
          dismissible: true,
          position: "top-right",
        });
      } else {
        this.next();
      }
    },
    resetState() {
      this.form.username = "";
      this.form.password = "";
      this.form.addressLine2 = "";
      this.form.state = "";
      this.form.lga = "";
      this.form.city = "";
      this.confirmPassword = "";
      this.form.bvn = "";
      this.form.transactionPin = "";
      this.form.agentName = "";
      this.form.phoneNumber = "";
      this.form.emailAddress = "";
      this.form.logoUrl = "";
      this.form.addressLine1;
      this.form.contactPersonName = "";
    },
    async submitForm() {
      try {
        this.loader = true;
        const user = await this.axios.post(
          "http://52.149.222.131:5009/api/v1/users/register/agent",
          // "uniqueParameter" : this.email,
          // "password": this.password
          this.form
        );
        if (user.data.responseCode === 0) {
          // const currentUser = JSON.parse(user.data.data)
          this.loader = false;
          this.form;
        } else {
          this.loader = false;
          this.$toast.open({
            message: `<p style="color:white;">${user.data.responseMessage}</p>`,
            type: "error",
            duration: 5000,
            dismissible: true,
            position: "top-right",
          });
        }
      } catch (e) {
        this.loader = false;
        this.$toast.open({
          message: `<p style="color:white;">${e}</p>`,
          type: "error",
          duration: 5000,
          dismissible: true,
          position: "top-right",
        });
        console.log(e);
      }
    },
    selectFile(event) {
      console.log("here");
      let file = event.target.files;
      console.log(file);
      this.form.logoUrl = JSON.stringify(file);
    },
    async Login() {
      this.loader = true;
      const local_token = localStorage.getItem("token");
      if (local_token) {
        this.$router.push("/dashboard/overview");
        return;
      }
      try {
        const user = await this.axios.post(
          "http://52.149.222.131:5009/api/v1/" + "paysure/gettoken",
          {
            // "uniqueParameter" : this.email,
            // "password": this.password
            uniqueParameter: "TESTSANUSI",
            password: "PASSWORd@123",
          }
        );
        if (user.data.responseCode === 0) {
          // const currentUser = JSON.parse(user.data.data)
          this.loader = false;
          localStorage.setItem("user", JSON.stringify(user.data.data));
          localStorage.setItem("token", user.data.data.token);
          this.$router.push("/dashboard/overview");
        } else {
          this.loader = false;
          this.$toast.open({
            message: `<p style="color:white;">${user.data.responseMessage}</p>`,
            type: "error",
            duration: 5000,
            dismissible: true,
            position: "top-right",
          });
        }
      } catch (e) {
        this.loader = false;
        this.$toast.open({
          message: `<p style="color:white;">${e}</p>`,
          type: "error",
          duration: 5000,
          dismissible: true,
          position: "top-right",
        });
        console.log(e);
      }
    },

    next() {
      if (this.firstPage) {
        this.secondPage = true;

        this.firstPage = false;
      } else if (this.secondPage) {
        this.secondPage = false;

        this.firstPage = false;
      }
    },
    prev() {
      if (this.secondPage) {
        this.secondPage = false;
        this.firstPage = true;
      }
    },
    onStateChange(e) {
      this.form.state = e.target.value;
      this.lgas = NaijaStates.lgas(this.form.state).lgas;
      this.districts = NaijaStates.lgas(this.form.state).senatorial_districts;
    },
  },
  mounted() {
    this.firstPage = true;
    this.secondPage = false;
    this.lastPage = false;
    this.states = NaijaStates.states();
    console.log(process.env.BASE_URL, "baseurl");
  },
};
</script>

<style>
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
