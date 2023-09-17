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
</div>
`;
const top100 = document.getElementById('all_item-top100');
for (let i = 0; i < 5; i++) {
    top100.innerHTML += html_top100;
}



const radio_item = `
<div class="item_circle">
<div class="div_contain-img">
    <a href="">
        <div class="div-boder-img">
            <img src="./asset/images/Ai_1x1_idol.jpg" alt="">
            <ion-icon name="play-circle-outline"></ion-icon>
        </div>              
    </a>
    <img src="./asset/images/Avt.jpg" alt="" class="img-absolute">
    <span class="live" >Live</span>
</div>
<span class="decrip_item">Yasobi</span>
<span class="view-er">1M đang nghe</span>
</div>`;

const radio_music = document.getElementById('radio_hot_item');
for (let i = 0; i < 7; i++) {
    radio_music.innerHTML += radio_item;
}


const html_colab = `<img src="./asset/images/Ai_hori5.jpg" alt="">`;
const colap = document.getElementById('all__item__colab');
for (let i = 0; i < 17; i++) {
    colap.innerHTML += html_colab;
}

// Clone _____________________________________________________

const toppic_clone_1 = `
<div class="item_quare item_quare-big">
<div class="div_img .div_img-big">
    <a href="">
        <img src="./asset/images/Ai_1x1_Idol2.jpg" alt="">
        <div class="div_icon--in--img">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>              
    </a>
</div>
<a class="singer-name singer-name_clone" href="">Hoshino Ai</a>
</div>
`;
const clone1 = document.getElementById('topic_clone-1');
for (let i = 0; i < 5; i++) {
    clone1.innerHTML += toppic_clone_1;
}


const toppic_clone_2 = `
<div class="item_quare item_quare-big">
<div class="div_img .div_img-big">
    <a href="">
        <img src="./asset/images/Ai_1x1_neko.jpg" alt="">
        <div class="div_icon--in--img">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>              
    </a>
</div>
<p class="discript-clone">Namae Wa Hoshino Ai! Change your time to love.</p> 
</div>
`;
const clone2 = document.getElementById('topic_clone-2');
for (let i = 0; i < 5; i++) {
    clone2.innerHTML += toppic_clone_2;
}


const toppic_clone_3 = `
<div class="item_quare item_quare-big">
<div class="div_img .div_img-big">
    <a href="">
        <img src="./asset/images/Ai_1x1_LewStars.jpg" alt="">
        <div class="div_icon--in--img">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>              
    </a>
</div>
<p class="discript-clone">Music is indispensable, so are you.</p> 
</div>
`;
const clone3 = document.getElementById('topic_clone-3');
for (let i = 0; i < 5; i++) {
    clone3.innerHTML += toppic_clone_3;
}



const toppic_clone_4 = `
<div class="item_quare item_quare-big">
<div class="div_img .div_img-big">
    <a href="">
        <img src="./asset/images/Ai_1x1_nor.jpg" alt="">
        <div class="div_icon--in--img">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>              
    </a>
</div>
<p class="discript-clone">You and the rest of the world, a perfect balance.</p> 
</div>
`;
const clone4 = document.getElementById('topic_clone-4');
for (let i = 0; i < 5; i++) {
    clone4.innerHTML += toppic_clone_4;
}




const toppic_clone_5 = `
<div class="item_quare item_quare-big">
<div class="div_img .div_img-big">
    <a href="">
        <img src="./asset/images/Ai_1x1_camera.jpg" alt="">
        <div class="div_icon--in--img">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>              
    </a>
</div>
<p class="discript-clone">Monochrome, colorful or colorless. I'm probably colorless.</p> 
</div>
`;
const clone5 = document.getElementById('topic_clone-5');
for (let i = 0; i < 5; i++) {
    clone5.innerHTML += toppic_clone_5;
}

const html_albumHot = `
<div class="item_quare item_quare-big">
<div class="div_img .div_img-big">
    <a href="">
        <img src="./asset/images/Ai_1x1_mommy.jpg" alt="">
        <div class="div_icon--in--img">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>              
    </a>
</div>
<p class="decrip_item album-hot_name">Yaosobi</p>
<a class="singer-name" href="">Hoshino Ai</a>
</div>
`;
const albumHot = document.getElementById('all_item-albumHot');
for (let i = 0; i < 5; i++) {
    albumHot.innerHTML += html_albumHot;
}