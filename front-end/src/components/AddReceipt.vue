<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center class="">
        <h1 class="display-1">Add an Expense Receipt</h1>
        <div class="butts">
          <v-flex>
            <v-btn large  color="secondary" class="mb-5 add" dark>Take a picture it lasts longer..</v-btn>
          </v-flex>

          <v-flex>
            <input button id="fileUpload" type="file">
              <v-btn large  color="secondary" @click.native="openDialog" type="file" class="mb-5 add" dark>Upload File(s) that works too..</v-btn>
            </input>
          </v-flex>

          <v-flex>
            <croppa v-model="croppa"
                     initial-position="center"
                     :initial-image="initialImage"
                     :width="350"
                     :height="630"
                     placeholder="click to upload files"
                     :placeholder-font-size="16"
                     canvas-color="transparent"
                     :show-remove-button="true"
                     remove-button-color="black"
                     :remove-button-size="3"
                     :show-loading="true">
             </croppa>
           </v-flex>

        </div>


      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      myCroppa: {}
    }
  },
  methods: {
    openDialog () {
      console.log('hello')
      // this.$el.fileUpload.click()
    },
    uploadCroppedImage () {
      this.myCroppa.generateBlob((blob) => {
        // write code to upload the cropped image file (a file is a blob)
      }, 'image/jpeg', 0.8) // 80% compressed jpeg file
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-weight: 600;
  font-size: 110%;
}

h1 {
  margin-bottom: 2rem;
}

.butts {
  margin-top: 6vh;;
}

.add {
  min-width: 38vw;
  min-height: 18vh;
  transition: all .2s ease-in-out;
  padding: 0px;
}

.add:hover {
  transform: scale(1.1);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}


.croppa-container {
   background-color: lightblue;
   border: 2px solid grey;
   border-radius: 8px;
 }

 .croppa-container:hover {
   opacity: 1;
   background-color: #8ac9ef;
 }

</style>
