<template>
    <main>
        <!-- Breadcrumbs-->
        <div class="a-spacing-top-medium"></div>
        <div class="container-fluid">
            <div class="wayfinding-breadcrumbs-container">
                <ul class="a-unordered-list a-horizontal a-size-small" >
                    <li>
                        <span class="a-list-item">
                            <a class="a-link a-color-tertiary" href="#">Category</a>
                        </span>
                    </li>
                     <li>
                        <span class="a-list-item">
                            <a class="a-link a-color-tertiary" href="#">Product Title</a>
                        </span>
                    </li>
                 
                </ul>

            </div>
        </div>
        <div class="container-fluid">
            <div class="dp-container">
                <div class="row">
                    <!-- First 3 grid - Product Image and Author's section -->
                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <div class="leftCol">
                            <!--Image-->
                            <div class="imgBlock">
                                <div class="eBooksimg">
                                    <img src="/img/featuredProduct.jpg" class="img-fluid"/>
                                </div>
                            </div>

                            <!--Follow Author-->
                            <div class="authorFollow">
                                <hr class="a-divider-normal"/>
                                <h1 class="authorFollowHeading">Follow The Author</h1>
                                <div class="a-spacing-top-small">
                                    <div class="row">
                                        <!--Author Image-->
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-cm-3 col-3">
                                            <div class="smallAuthorImageContainer">
                                                <a href="#">
                                                    <img src="/img/featuredProduct.jpg" class="img-fluid"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <!--Author Data-->
                                              <div class="col-xl-4 col-lg-3 col-md-3 col-cm-3 col-3">
                                                <div class="authorNameCol">
                                                    <a href="#">Filan Fisteku</a>
                                                </div>

                                              </div>
                                               <div class="col-xl-5 col-lg-6 col-md-6 col-cm-6 col-6">
                                                   <div class="authorBtn mt-2">
                                                       <a href="#">
                                                           <span class="btnFollow">
                                                               <span class="a-btn-inner">
                                                                   <button class="a-btn-text">+ Follow</button>
                                                               </span>
                                                           </span>
                                                       </a>
                                                   </div>
                                               </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <!-- Description  -->
                    <div class="col-lg-6 col-md-6 col-sm-8"> 
                        <div class="centerCol">
                            <!-- Product Title -->
                            <div class="titleDiv">
                                <h1 class="productTitle">
                                    <span class="largeTitle">Albin Kurti</span>
                                    <span class="smallTitle">Vetevendosje</span>
                                </h1>
                            </div>

                            <!-- Aurthor's name-->
                            <div class="bylineinfo">
                                by
                                <a href="#" class="authorName">KGB Russia
                                    <i class="fas fa-chevron-down" style="font-size: 8px !important; cloro: #555 !important;"></i>
                                </a> (Author)
                            </div>
                            <div class="reviewGroup"></div>
                            <hr style="margin-top: 10px;"/>
                            <!-- A Tags Dummy Data -->
                            <div class="mediaMatirx">
                                <div class="formats">
                                    <a href="#" class="link-expander">
                                        <span class="tmmShowPrompt">See all 18 formats and editions</span>
                                    </a>
                                    <ul>
                                        <!-- Kindle -->
                                        <li class="swatchElements" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span>Kindle</span>
                                                            <br>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                                <span class="tmm-olp-links"></span>
                                                <span class="tmm-olp-links">
                                                    <a href="#" class="a-size-mini">
                                                        <span class="kcpAppBox">
                                                            <span class="a-declarative">
                                                                Read with Our
                                                                <span class="a-text-bold">Free App</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </span>
                                            </span>
                                        </li>
                                        <!-- Audible -->
                                        <li class="swatchElements" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span><img src="/img/audibleLogo.png" class="img-fluid" style="width: 20px;"> Audible</span>
                                                            <br>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                                <span class="tmm-olp-links"></span>
                                                <span class="tmm-olp-links">
                                                    <a href="#" class="a-size-mini">
                                                        <span class="kcpAppBox">
                                                            <span class="a-declarative">
                                                                <span class="a-text-bold">Free App</span> with your Audible Trail
                                                            </span>
                                                        </span>
                                                    </a>
                                                </span>
                                            </span>
                                        </li>
                                        <!-- Paperback -->
                                        <li class="swatchElements" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span>Paperback </span>
                                                            <br>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                                <span class="tmm-olp-links"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Description -->
                            <div class="bookDescription">
                                <div class="bookDescriptionInner">This book is awesome</div>
                            </div>
                            <!-- Product Specification -->
                            <div class="aboutEBooksfeature">
                                <hr>
                                <div class="row">
                                    <div class="col-sm-4 mb-1">
                                        <div class="a-declarative">
                                            Length: <span><a href="#">386 pagers <i class="a-icon a-icon-popover"></i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>