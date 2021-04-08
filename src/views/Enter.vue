<template>
  <v-container>
    <v-card class="primary d-flex flex-column justify-center text-center"
      max-width="250"
      height="550"
    >
      <v-card-title class="dark--text">
        Ready for a great<br> User experience?
      </v-card-title>
      <v-card-text class="blue--text">
        Bring your media to the next<br> level!       
      </v-card-text>
      <v-row class="d-flex justify-center">
        <v-btn 
          class="white mr-3"
          rounded
        >
          Sign Up
        </v-btn>
        <v-btn 
          class="basic"
          fab
          small
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8H12.17L8.29 11.88C7.9 12.27 7.9 12.91 8.29 13.3C8.68 13.69 9.31 13.69 9.7 13.3L15.29 7.71C15.68 7.32 15.68 6.69 15.29 6.3L9.71 0.700001C9.32 0.310001 8.69 0.310001 8.3 0.700001C7.91 1.09 7.91 1.72 8.3 2.11L12.17 6H1C0.45 6 0 6.45 0 7C0 7.55 0.45 8 1 8Z" fill="#FFFFFF"/>
          </svg>
        </v-btn>
      </v-row>
      <v-img
        src="../assets/woman x5F 2.png"
        max-height="350"
        max-width="280"
        contain
      >
      </v-img>
    </v-card>
  </v-container>
</template>

<script>


export default {
  name: "Enter",

};
</script>
