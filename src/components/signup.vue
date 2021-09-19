<template>
  <div>
    <Loader v-show="loader" />
    <div class="login-block">
      <div class="row">
        <div class="col-lg-5">
          <router-link to="/" v-if="firstPage">
            <img class="img-abs" src="../assets/paysure_White.png"  style="cursor:pointer"/>
          </router-link>

          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <carousel :autoplay="true" :nav="true" :items="1">
              <img src="../assets/pic.png" style="height:100vh !important" />
            </carousel>
          </div>
        </div>
        <div class="col-lg-7 " style="overflow:auto;height:100vh">
          <transition name="fade" v-if="firstPage">
            <div class="first-page page">
              <div class="container resize">
                <form @submit.prevent="checkFirstPage()" autocomplete="off">
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
                        autocomplete="off"
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
                         autocomplete="off"
                      />
                    </div>
                    <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >Mother's Maiden Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.mmname"
                        required
                         autocomplete="off"
                      />
                    </div>
                    <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >Date of birth</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.dob"
                        required
                         autocomplete="off"
                      />
                    </div>
                    <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >Sex</label
                      >
                      <select
                          v-model="form.sex"
                          class="form-control"
                          required
                        >
                          <option disabled selected>Select Sex</option>
                          <option value="female">Female</option>
                        <option value="male">Male</option>
                          
                        </select>
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
                         autocomplete="off"
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
                         autocomplete="off"
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
                         autocomplete="off"
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
                         autocomplete="off"
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
          </transition>
          <!--second page-->
          <transition name="slide-fade" v-if="secondPage">
            <div class="second-page page">
              <div class="container resize">
                <form @submit.prevent="submitForm" autocomplete="off">
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
                         autocomplete="off"
                         required
                      />
                    </div>
                        <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >No of Terminals</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.noOfTerminalOnSignUp"
                         autocomplete="off"
                         required
                      />
                    </div>
                     <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >Means of identification</label
                      >
                      <select
                          v-model="form.moi"
                          class="form-control"
                          @change="onStateChange($event)"
                          required
                           
                        >
                          <option disabled selected>Select identification</option>
                          <option
                            v-for="(item, index) in iname"
                            :key="index"
                            :value="item"
                          >
                            {{ item.name }}</option
                          >
                        </select>
                    </div>
                    <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >ID Number</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.IdNo"
                         autocomplete="off"
                         required
                      />
                    </div>
                    <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >Next of Kin</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.contactPersonName"
                         autocomplete="off"
                         required
                      />
                    </div>
                    <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >Next of Kin Phone Number</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.Tel_Nok"
                         autocomplete="off"
                         required
                      />
                    </div>
                   
                
                    <div class="col-lg-6 mt-3 form-row">
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
                         autocomplete="off"
                      />
                    </div>

                    <div class="form-info col-lg-12">
                      <p class="primary-text mt-1">Why we need your Bvn</p>
                      <p class="mt-1" style="color:#B9B9B9">
                        We only need access to
                      </p>
                      <ul
                        class="mt-3"
                        style="display:flex;flex-direction:column"
                      >
                        <li><i class="fa fa-check"></i> &nbsp;Full Name</li>
                        <li><i class="fa fa-check"></i>&nbsp;Phone Number</li>
                        <li><i class="fa fa-check"></i>&nbsp;Date of Birth</li>
                      </ul>
                    </div>

                    <!-- <div class="form-row"> -->
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
                        <select
                          v-model="form.lga"
                          class="form-control"
                          required
                        >
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
                           autocomplete="off"
                        />
                      </div>
                    <!-- </div> -->
                    <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >Address Line 1</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.addressLine1"
                        required
                         autocomplete="off"
                      />
                    </div>
                    <div class="col-lg-6 mt-3">
                      <label class="formlabel" for="formGroupExampleInput"
                        >Address Line 2</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                        v-model="form.addressLine2"
                         autocomplete="off"
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
          </transition>
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
      baseurl:process.env.VUE_APP_BASE_URL,
   
      loader: false,
      firstPage: Boolean,
      secondPage: false,
iname:[
  {name:"Voter's Card", value:"nimc"},
  {name:"Driver's Licence", value:"drivers_license"},
  {name:"NIMC", value:"nimc"},
  {name:"International Passport", value:"ipassport"},

],
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
        noOfTerminalOnSignUp: "",
        addressLine1: "",
        addressLine2: "",
        state: "",
        lga: "",
        city: "",

        dob:"",//date of birth done
        sex:"",//done
        mmname:"",//mothers maiden name
        IdNo:"", //id number done
        Tel_Nok:"",//nok number
        moi:""//means of idenity

      },
    };
  },
  props: {
    email: String,
  },
  methods: {
    async checkFirstPage() {
      this.loader = true;
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(2000);
      
      if (this.form.password !== this.confirmPassword) {
        this.loader = false;
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
        return;
      } else {
        this.loader = false;
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
      this.form.noOfTerminalOnSignUp = "";
    },
    async submitForm() {
  
      try {
        this.loader = true;
        const user = await this.axios.post(
          `${this.baseurl}users/register/agent`,
        this.form

          
       
        );
         localStorage.setItem("phone",this.form.phoneNumber)
        if (user.data.data.responseCode === 0) {
         
           this.$store.commit("setAuthentication", true);
          // const currentUser = JSON.parse(user.data.data)
          this.loader = false;
           this.$toast.open({
            message: `<p style="color:white;">${user.data.data.responseMessage}</p>`,
            type: "success",
            duration: 5000,
            dismissible: true,
            position: "top-right",
          });
          this.$router.push("/phone-token");
          this.resetState();
        } else {
          this.loader = false;
          console.log(user,"here")
          
          this.$toast.open({
            message: `<p style="color:white;">${user.data.data.responseMessage}</p>`,
            type: "error",
            duration: 5000,
            dismissible: true,
            position: "top-right",
          });
        }
      } catch (e) {
         
           
        this.loader = false;
        this.$toast.open({
          message: `<p style="color:white;">${e.data.data.responseMessage}</p>`,
          type: "error",
          duration: 5000,
          dismissible: true,
          position: "top-right",
        });
        console.log(e);
      }
    },
    selectFile(event) {
      
      let file = event.target.files;
     
      this.form.logoUrl = JSON.stringify(file);
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
console.log(this.baseurl)
    this.firstPage = true;
    this.secondPage = false;
    this.states = NaijaStates.states();
    
    
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
  width: 100%;
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
