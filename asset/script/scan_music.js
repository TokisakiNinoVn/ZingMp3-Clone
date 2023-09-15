const htmlCode = `
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

const new_release = document.getElementById('list-like');
for (let i = 0; i < 4; i++) {
    new_release.innerHTML += htmlCode;
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