<template>
    <div id="app">
        <div id="wrapper">
            <Header/>
            <Sidebar/>
            <router-view />
        </div>
    </div>
</template>

<script>


    import Header from "./components/Header";
    import Sidebar from "./components/Sidebar";

    
    

    export default {
        name: 'App',
        components: {
            
            Header,
            Sidebar
        }
    }
</script>

<style lang="scss">

</style>
