<template>
    <div id="sidebar-nav" class="sidebar">
        <div class="sidebar-scroll">
            <nav>
                <ul class="nav">
                    
                    <li><router-link to="/colors"><i class="lnr lnr-code"></i> <span>Colors</span></router-link></li>
                    <li><router-link to="/widget"><i class="lnr lnr-chart-bars"></i> <span>Widget</span></router-link></li>
                    <li><router-link to="/button"><i class="lnr lnr-cog"></i> <span>Button</span></router-link></li>
                    <li><router-link to="/notifications"><i class="lnr lnr-alarm"></i> <span>Notifications</span></router-link></li>
                    <li><router-link to="/form"><i class="lnr lnr-file-empty"></i> <span>Form Elements</span></router-link></li>
                    <li><router-link to="/typography"><i class="lnr lnr-text-format"></i> <span>Typography</span></router-link></li>
                    <li><router-link to="/icons"><i class="lnr lnr-diamond"></i> <span>Icons</span></router-link></li>
                    <li><router-link to="/docs"><i class="lnr lnr-file-empty"></i> <span>Docs</span></router-link></li>
                    <li><router-link to="/tickets"><i class="lnr lnr-layers"></i> <span>Tickets</span></router-link></li>
                    <li><router-link to="/tests"><i class="lnr lnr-tag"></i> <span>Tests</span></router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
.sidebar-wrapper {
    width: 20%;
    height: 100vh;
    background: #ddd;
}
a.router-link-active {
    background-color: #252c35!important;
    border-left-color: #00AAFF!important;
    color: #ffffff!important;
    &:hover{
        // background-color: inherit;
    }
}

a.router-link-active i{
    color: #00AAFF;
}

</style>
