// MDLA js - mdla.js

// DOM 선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 로드구역 //////////////
window.addEventListener('DOMContentLoaded',loadFn);

// 로드함수 /////////////
function loadFn(){
    
    // 0. 네비에 들어가야하는 텍스트
        const navName = [
            "Resort 2024",
            "Top stories",
            "Trend reports",
            "Latest shows"
        ];

    const nav_item = qsa('.nav-item');    
    

    const newEle = (txt) => {   
        let new_nav = '';
        for (let x of txt){
            new_nav += `<span>${x}</span>`;
        }
        return new_nav;
    }

    nav_item.forEach((ele,idx)=> {
        ele.innerHTML = `${ newEle(navName[idx]) }`
    });

} //////// loadFn //////////