<template>
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="a-section">
                    <div class="a-spacing-top-medium"></div>
                    <h2 style="text-align:center">Add a new Product</h2>
                    <form>
                        <div class="a-spacing-top-media">
                            <label>Category</label>
                            <select class="a-select-option">
                                <option value="1">1</option>
                                 <option value="2">2</option>
                            </select>
                     </div>

                     <div class="a-spacing-top-media">
                            <label>Owner</label>
                            <select class="a-select-option">
                                <option value="1">1</option>
                                 <option value="2">2</option>
                            </select>
                     </div>

                     <div class="a-spacing-top-medium">
                         <lalbel style="margin-bottom:0px;">Title</lalbel>
                         <input type="text" class="a-input-text" style="width:100%"/>
                     </div>

                     <div class="a-spacing-top-medium">
                         <lalbel style="margin-bottom:0px;">Price</lalbel>
                         <input type="number" class="a-input-text" style="width:100%"/>
                     </div>

                      <div class="a-spacing-top-medium">
                         <lalbel style="margin-bottom:0px;">Description</lalbel>
                        <textarea placeholder="Provide details such as a product description"  style="width:100%"></textarea>
                     </div>

                      <div class="a-spacing-top-medium">
                         <lalbel style="margin-bottom:0px;">Add Photo</lalbel>
                       <div class="a-row a-spacing-top-medium">
                           <label class="choosefile-button">
                               <i class="fal fa-plus"></i>
                               <input type="file">
                               <p style="margin-top:-70px">name of the</p>
                           </label>
                       </div>
                     </div>
<hr/>
                     <div class="a-spacing-top-large">
                         <span class="a-button-register">
                             <span class="a-button-inner">
                                 <span class="a-button-text">
                                     Add Product

                                 </span>
                             </span>
                         </span>
                     </div>


                    </form>
                </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</main>
    
</template>

<script>

</script>