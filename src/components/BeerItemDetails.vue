<template>
    <v-dialog v-model="dialog" full-width max-width="600px">
        <v-card>
            <v-card-title class="justify-end">
                <v-btn icon @click="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex>
                            <img
                                height="200px"
                                src="https://images.punkapi.com/v2/192.png"
                            />
                        </v-flex>
                        <v-flex>
                            <v-flex
                                xs12
                                class="display-1 font-weight-bold primary--text"
                                >Buzz</v-flex
                            >
                            <v-flex xs12 py-0>A Real Bitter Experience</v-flex>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="red"
                    flat
                    :disabled="saving"
                    @click="dialog = !dialog"
                    >CLOSE</v-btn>
                <v-btn color="primary darken-1" :loading="saving">ADD TO FAVORITES</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            saving: false
        };
    },

    computed: {
        
        dialog: {

            get() {
                return this.$store.state.beerItemDetails;
            },

            set(value) {
                this.$store.commit('toggleBeerItemDetails', value);
            }
        }
    }
};
</script>

<style></style>
