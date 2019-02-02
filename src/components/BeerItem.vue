<template>
    <v-flex xs12 sm6 md4>
        <v-card @click="showItemDetails" class='pt-2' hover>
            <v-img contain class="white--text" height="200px" src="https://images.punkapi.com/v2/192.png">
                <v-container fill-height fluid py-0>
                    <v-layout fill-height row>
                        <v-flex xs12 align-right pa-0>
                            <v-btn icon @click="toggleFavorite" class='my-0 right'>
                              <v-icon :color="favorite ? 'primary' : 'black'"
                                    v-text="favorite ? 'star' : 'star_border'" />
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-img>
            <v-card-title class="pb-5">
                <v-flex xs12 class="text-xs-center display-1 font-weight-bold primary--text">Buzz</v-flex>
                <v-flex xs12 class="text-xs-center" py-0>A Real Bitter Experience</v-flex>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'BeerItem',

    data() {
        return {
            favorite: false
        };
    },

    methods: {
        toggleFavorite() {
            this.favorite = !this.favorite;
        },

        showItemDetails() {
          this.$store.commit('showBeerItemDetails');
        }
    }
};
</script>

<style scoped>
 
</style>
