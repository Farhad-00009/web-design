

//portfolio item filter 

const filterContainre=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainre.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;

    for(let i=0;i<totalFilterBtn;i++){
       filterBtns[i].addEventListener("click",function(){
        filterContainre.querySelector(".active").classList.remove("active");
        this.classList.add("active");
         
        const filterValue=this.getAttribute("data-filter");
        for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue===portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove("hide"); 
                portfolioItems[k].classList.add("show");
            }
            else{
                portfolioItems[k].classList.remove("show"); 
                portfolioItems[k].classList.add("hide"); 
            }
            if(filterValue=== "all"){
                portfolioItems[k].classList.remove("hide"); 
                portfolioItems[k].classList.add("show"); 
            }
        }

       })
    }



//Portfolio  lightboox
     const lightboox=document.querySelector(".lightbox"),
              lightbooxImg=lightboox.querySelector("lightbox-img"),
              lightbooxClose=lightboox.querySelector(".lightbox-close"),
              lightbooxText=lightboox.querySelector(".caption-text"),
              lightbooxCounter=lightboox.querySelector(".caption-counter");
        let itemIndex=0; 
        
        for(let i=0; i<totalPortfolioItem;i++){
          portfolioItems[i].addEventListener("click",function() {
            itemIndex=i;
            changeItem();
            toggleLightbox();
            
          })

        }
        function nextItem(){
            // body....
            if(itemIndex==totalPortfolioItem-1){
                itemIndex=0;
            }
            else{
                itemIndex++
            }
             changeItem();
        }
        function prevItem(){
            // body....
            if(itemIndex==0){
                itemIndex=totalPortfolioItem-1
            }
            else{
                itemIndex--;
            }
             changeItem();
        }


        function toggleLightbox(){
            lightboox.classList.toggle("open");
        }

        function changeItem(){
            imgSrc= portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
             lightbooxImg.src=imgSrc;
             lightbooxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
             lightbooxCounter.innerHTML=(itemIndex+1)  + "of" + totalPortfolioItem;
        }

        // close lightbox

        lightboox.addEventListener("click",function(event){


        })








