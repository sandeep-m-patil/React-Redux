import React from 'react'
function Card() {
    return (
        <div class="cart">
            <div class="cart-left">
                <img src={"https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg"} alt="cycle" />
            </div>
            <div class="cart-right">

                <p>Sponsored !</p>
                <h3>Apple iPhone 15 (128 GB) - Black</h3>
                <span style={{fontSize:'30px',fontFamily:'bolder'}}>₹65,900 </span><span style={{fontSize:'small'}}>M.R.P: <span style={{fontStyle:'unset'}}>₹79,600  </span>(17% off)</span>
                <p>Flat INR 4000 Off on SBICardsFlat INR 4000 Off on SBICards</p>
                <p>FREE delivery Sat, 23 Nov
                    Or fastest delivery Tomorrow, 22 Nov</p>
                    <p>Service: Installation</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card