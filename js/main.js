"use strict";

//ギャラリーのエフェクト
const gallery     = document.getElementById('gallery');
const gallery_img = document.querySelectorAll('.gallery_img_item');

window.addEventListener('scroll', () => {
    for (let i=0;i<gallery_img.length;i++) {
        const rect = gallery_img[i].getBoundingClientRect().top;
        const gap  = gallery_img[i].clientHeight * .3;
        if (window.innerHeight > rect + gap) {
            gallery_img[i].classList.add('show_gallery_img');
        }
    }
});



//accessのバックグラウンドエフェクト
const access = document.getElementById('access');

window.addEventListener('scroll', () => {
    const a_rect = access.getBoundingClientRect().top;
    const a_gap  = access.clientHeight * .3;
    const a_bottom = access.clientHeight * .8;

    if (window.innerHeight > a_rect + a_gap && a_rect + a_bottom > 0) {
        access.classList.add('show_a_bg');
    } else {
        access.classList.remove('show_a_bg');
    }
});



//sideボタンのエフェクト
const side = document.querySelector('.side')

window.addEventListener('scroll', () => {
    const g_rect = gallery.getBoundingClientRect().top;
    const a_rect  = access.getBoundingClientRect().top;
    const in_height = window.innerHeight;

    if (in_height > g_rect && a_rect > in_height) {
        side.classList.add('show_side');
    } else {
        side.classList.remove('show_side');
    }

});


const hum = document.querySelector('.hamburger');
const header_nav = document.querySelector('.header_nav');
hum.addEventListener('click', () => {
    if (hum.classList.contains('active')) {
        hum.classList.remove('active');
        header_nav.classList.remove('active');
    } else {
        hum.classList.add('active');
        header_nav.classList.add('active');
    }
});



//メインビジュアル
const mv     = document.querySelector('.main_visual');
const mv_img = mv.children;

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;

    let scoop;
    if (window.innerWidth > 900) {
        scoop = 100/3 + scroll/10 + '%';
    } else {
        scoop = 100 - scroll/10 + '%'
    }
    for (let i=0;i<mv_img.length;i++) {
        mv_img[i].style.width = scoop;
    }

});