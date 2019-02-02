<template>
    <v-toolbar app color="primary" dark extended extension-height="auto">
        <v-spacer></v-spacer>
        <v-btn flat>HOME</v-btn>
        <v-btn flat>FAVORITE</v-btn>
        <template fluid slot="extension">
            <v-layout row wrap class="pt-1 pb-4">
                <v-flex
                    xs12
                    class="text-xs-center display-1 font-weight-bold"
                    my-1
                    >The Beer Bank</v-flex
                >
                <v-flex xs12 class="text-xs-center" my-1
                    >Find your favorite beer here</v-flex
                >
                <v-flex xs12 my-1
                    ><v-text-field
                        type="search"
                        solo
                        label="Search for beer name"
                        color="grey lighten-1"
                    ></v-text-field
                ></v-flex>
            </v-layout>
        </template>
    </v-toolbar>
</template>

<script>
export default {
    name: 'AppNavigation'
};
</script>

<style scoped>
.v-input__slot {
    background: white !important;
}
</style>
