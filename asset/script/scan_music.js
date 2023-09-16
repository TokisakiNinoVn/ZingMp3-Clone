const html_wan_to_list = `
<div class="item_quare item_quare-big">
<div class="div_img .div_img-big">
    <a href="">
        <img src="./asset/images/Ai_1x1_sing.jpg" alt="">
        <div class="div_icon--in--img">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>              
    </a>
</div>
<p class="decrip_item">Yaosobi</p>
<a class="singer-name" href="">Hoshino Ai</a>
</div>   
`;

const wantList = document.getElementById('list-like');
for (let i = 0; i < 5; i++) {
    wantList.innerHTML += html_wan_to_list;
}


const htmlCode_ = `
<div class="one_item--mph">
    <a href="">
        <img src="./asset/images/Ai_1x1_keepOut.jpg" alt="">
        <ion-icon name="play"></ion-icon>
    </a>
    <div class="content">
        <span class="name_song">Yasobi<span class="premium">premium</span></span>
        
        <a href="">
            <p class="singer-name">Hoshino Ai</p>
        </a>
        <span class="time-up">5 phút trước</span>
    </div>
    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
</div>
`;

const container = document.getElementById('all-item--mph');
for (let i = 0; i < 11; i++) {
    container.innerHTML += htmlCode_;
}

const html_colab = `<img src="./asset/images/Ai_hori5.jpg" alt="">`;
const colap = document.getElementById('all__item__colab');
for (let i = 0; i < 17; i++) {
    colap.innerHTML += html_colab;
}


const html_top100 = `
<div class="item_quare item_quare-big">
<div class="div_img .div_img-big">
    <a href="">
        <img src="./asset/images/Ai_1x1_eye.jpg" alt="">
        <div class="div_icon--in--img">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>              
    </a>
</div>
<p class="decrip_item">Yaosobi</p>
<a class="singer-name" href="">Hoshino Ai</a>
</div> `
// const top100 = document.getElementById('all_item-top100');
// for (let i = 0; i < 5; i++) {
//     top100.innerHTML += html_top100;
// }



const radio_item = `<div class="item_circle radio-one-item">
<div class="in_img">
    <a href="">
        <div class="div_boder">
            <img src="./asset/images/Ai_1x1.jpg" alt="">
            <ion-icon name="play-circle-outline"></ion-icon>
        </div>              
    </a>
    <img src="./asset/images/Avt.jpg" alt="" class="img54">
    <span>Live</span>
</div>
<span class="decrip_item radio_album">Yasobi</span>
<span class="decrip_item radio_listen-er">100k đang nghe</span>
</div> ;`

// const radio_music = document.getElementById('all-radio-item');
// for (let i = 0; i < 7; i++) {
//     radio_music.innerHTML += radio_item;
// }