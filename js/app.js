//arama alanı
const searchForm=document.querySelector(".search-form");

//arama butonu (simgesi)
const searchBtn=document.querySelector("#search-btn");

//cart ıtem div i seçme
const cartItem=document.querySelector(".cart-items-container");

//cart butonu(alışveriş simgesi) seçme
const cartBtn=document.querySelector("#cart-btn");

//menu navbar seçme
const navbar=document.querySelector(".navbar");

//menu buton(simgesi) seçme
const menuBtn=document.querySelector("#menu-btn");



//arama toggle olayı
searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active"); //bir öğenin açık veya kapalı durumunu değiştirmek için kullanılan bir işlev

    //farklı alanatıkladığında arama inputu  kaybolacak
    //ama içerisine tıklandığında da kaybolmamaı lazım ikincikısımda yaptık
    document.addEventListener("click", function (e) {
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm))
        {
            searchForm.classList.remove("active");
        }
    })
})

//includes() --> belirli bir değerin bir dizide olup olmadığını kontrol eder.
//composedPath() -->tıkladığımzı bulmamıza yarıyor

//yani tıkladığımız yerde arama alanı ve o arama işareti yoksa kapatıyor



//shopping toggle olayı
cartBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active"); //bir öğenin açık veya kapalı durumunu değiştirmek için kullanılan bir işlev

    document.addEventListener("click", function (e) {
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem))
        {
            cartItem.classList.remove("active");
        }
    })
})


//menu toggle olayı
menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active"); //bir öğenin açık veya kapalı durumunu değiştirmek için kullanılan bir işlev

    document.addEventListener("click", function (e) {
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar))
        {
            navbar.classList.remove("active");
        }
    })
})