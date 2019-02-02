<template>
    <v-app>
        <AppNavigation />
        <v-content app>
            <v-container
                fluid
                grid-list-xl
                :class="{ 'px-5': $vuetify.breakpoint.mdAndUp }"
            >
                <v-layout
                    row
                    wrap
                    :class="{ 'px-5': $vuetify.breakpoint.mdAndUp }"
                >
                    <BeerItem v-for="i in 5" :key="i" />
                </v-layout>
            </v-container>
        </v-content>
        <BeerItemDetails />
    </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation';
import BeerItem from './components/BeerItem';
import BeerItemDetails from './components/BeerItemDetails';

export default {
    name: 'App',
    components: {
        AppNavigation,
        BeerItem,
        BeerItemDetails
    },
    data() {
        return {
            //
        };
    }
};
</script>
