<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center class="">
        <h1 class="display-1">Add an Expense Receipt</h1>
        <div class="butts">

          <div v-show="selectedImage">
          <div class="ml-4 mb-2" id="imageCrop">
            <croppa v-model="myCroppa"
              :width="400"
              :height="500"
              :canvas-color="'default'"
              :placeholder="'Choose an image'"
              :placeholder-font-size="0"
              :placeholder-color="'default'"
              :accept="'image/*'"
              :file-size-limit="0"
              :quality="2"
              :zoom-speed="3"
              :remove-button-color="'black'"
              :remove-button-size="0"
              @image-remove="removeImage"
              >
              <img
                crossOrigin="anonymous"
                :src="selectedImage"
                slot="initial">
            </croppa>
          </div>

          <v-flex>
            <v-btn round @click.native="rotateRight"><v-icon>rotate_right</v-icon></v-btn>
            <v-btn @click.native="rotateLeft"><v-icon>rotate_left</v-icon></v-btn>
            <v-btn @click.native="saveToQueue"><v-icon>save</v-icon>Save to Queue</v-btn>
          </v-flex>
            <!--
            :initial-image="someImage"
            @init="handleCroppaInit"
            @file-choose="handleCroppaFileChoose"
            @file-size-exceed="handleCroppaFileSizeExceed"
            @file-type-mismatch="handleCroppaFileTypeMismatch"
            @move="handleCroppaMove"
            @zoom="handleCroppaZoom"
            -->
          </div>

          <div v-show="!selectedImage">
            <v-flex>
              <v-btn large  color="secondary" @click.native="takePicture()" class="mb-5 add" dark>Take a Picture it lasts longer..</v-btn>
            </v-flex>

            <v-flex>
                <input button ref="fileUpload" type="file" accept="image/*" hidden @change="selectImageFile"/>
                <v-btn large  color="secondary" @click.native="$refs.fileUpload.click()" type="file" class="mb-5 add" dark>Or Upload File that works too..</v-btn>
            </v-flex>
          </div>
        </div>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      simpleExpenses: {
        id: '',
        user_name: '',
        categories: [],
        businesses: [],
        receipts: [],
        receiptQueue: []
      },
      myCroppa: {},
      selectedImage: null
    }
  },
  mounted () {
    this.simpleExpenses = JSON.parse(localStorage.getItem('simple_expenses')) || this.simpleExpenses
    // localStorage.removeItem('simple_expenses')
    console.log(this.simpleExpenses)
  },
  methods: {
    takePicture () {
      console.log('took pic')
      // this.selectedImage = URL.createObjectURL(event.target.files[0])
      this.selectedImage = null
      this.myCroppa.refresh()
    },
    selectImageFile (event) {
      console.log('selected an image')
      this.selectedImage = URL.createObjectURL(event.target.files[0])
      this.myCroppa.refresh()
    },
    rotateRight () {
      console.log('rotate right')
      this.myCroppa.rotate()
    },
    rotateLeft () {
      console.log('rotate left')
      this.myCroppa.rotate(-1)
    },
    removeImage () {
      console.log('image removed')
      this.selectedImage = null
      this.myCroppa.refresh()
    },
    async saveToQueue () {
      console.log('save to queue')
      await this.myCroppa.generateBlob(blob => {
        this.simpleExpenses.receiptQueue.push({
          id: '',
          business: '',
          category: '',
          amount: 0,
          tax: 0,
          from: '',
          date: '',
          description: '',
          receiptUrl: '',
          LocalBlob: blob
        })
        // console.log(URL.createObjectURL(this.simpleExpenses.receiptQueue[0].file))
        this.selectedImage = null
        this.myCroppa.refresh()
        this.saveToLocalStorage()
      }, 'image/jpeg', 0.8)
    },
    saveToLocalStorage () {
      localStorage.setItem('simple_expenses', JSON.stringify(this.simpleExpenses))
      console.log(localStorage.getItem('simple_expenses'))
    }
  }
}
</script>

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

#imageCrop {
  margin-top: -4vh;
}
</style>
