const images = document.querySelectorAll( '.thumb' ) ;
const mainImg = document.querySelector( '#mainImg' ) ;

mainImg.src = images[ 0 ].src ;
images[ 0 ].classList.add ( 'active' ) ;

images.forEach ( img => {
    img.onclick = function (  ) {
        mainImg.style.opacity = '0' ;

        setTimeout ( (  ) => {
            mainImg.src = img.src ;
            mainImg.style.opacity = '1' ;
        } , 300 ) ;

        images.forEach ( i => i.classList.remove ( 'active' ) ) ;
        img.classList.add ( 'active' ) ;
    }
} )