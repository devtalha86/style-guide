<template>
    <div class="main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
            <div class="container-fluid">
                <!-- OVERVIEW -->
                <div class="panel panel-headline">
                    <div class="panel-heading">
                        <h3 class="panel-title">LODUR WIDGETS</h3>
                        <p class="panel-subtitle"></p>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                Launch demo modal
                                </button>
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <figure class="highlight">
                                    

                                        <pre class='code code-html'><label>HTML</label><code>&lt;button&gt;Press Me!&lt;/button&gt;</code></pre>

                                            <pre class='code code-css'><label>CSS</label><code>button {
    width:20px;
    height:28px;
    color:#fff;
    font-size:28px;
    padding:11px 15px;
    border-radius:5px;
    background:#14ADE5;
    }</code></pre>

                                            <pre class='code code-javascript'><label>JS</label><code>&lt;button onclick="myFunction()"&gt;Post&lt;/button&gt;

    &lt;script&gt;
    function myFunction() {
        document.write(5 + 6);
    }
    &lt;/script&gt;</code></pre>

                                            

                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END OVERVIEW -->

            </div>
        </div>
        <!-- END MAIN CONTENT -->
    </div>
    <!-- END MAIN -->
    <div class="clearfix"></div>
    <footer>
        <div class="container-fluid">
            <!-- <p class="copyright">&copy; 2017 <a href="https://www.themeineed.com" target="_blank">Theme I Need</a>. All Rights Reserved.</p> -->
        </div>
    </footer>
</template>

<script>
    export default {
        name: "main-container",
        data() {
            return {

            }
        }

    }

    
</script>

<style scoped>

</style>
