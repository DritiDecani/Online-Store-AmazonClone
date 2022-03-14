<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Contact Us</h2>
          <form >
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input type="text" class="a-input-text" style="width: 100%" v-model="name" />
            </div>
            <div class="a-spacing-top-medium">
              <label>Email</label>
              <input type="email" class="a-input-text" style="width: 100%" v-model="email" />
            </div>
            <div class="a-spacing-top-medium">
              <label>Phone Number</label>
              <input type="number" class="a-input-text" style="width: 100%" v-model="number" />
            </div>
            <div class="a-spacing-top-medium">
              >
              <label class="label" for="textarea">Description</label>
              <textarea
                v-model="message"
              ></textarea>
            </div>
            <!-- Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onPostMessage"
                    >Contact us</span
                  >
                </span>
              </span>
            </div>
          </form>
          <br />
          
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default{
  data(){
        return{
            name:'',
            email:'',
            number:'',
            message:'',
        };
    },
 methods: {
        async onPostMessage() {
            try {
                let data = {
                  name: this.name,
                  email:this.email,
                  number:this.number,
                  message:this.message,
                 };
                let response = await this.$axios.$post(
                "http://localhost:3000/api/contacts", data);
                if(response.success){
                this.contacts.push("/contacts");
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>