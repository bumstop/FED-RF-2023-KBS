// 보그 PJ 링크 시스템 JS

// 제이쿼리 로드구역
$(() => {
    // 모든 a요소 기본이동막기
    $('a').click(e=>e.preventDefault());

    // 요구사항: 각 네비게이션 클릭시 페이지 이동하기

    // 1. 대상선정
    // 1-1. 로고링크: .logo a
    const logo = $('.logo a');

    // 1-2. GNB 메뉴: .gnb a
    const gnb = $('.gnb a');
    // console.log("logo:",logo, "gnb:", gnb);
    // 2. 이벤트 설정 및 이동기능 구현하기
    // 2-1. 로고 클릭시 홈 이동
    logo.click(() => { location.href = 'index.html' });

    // 2-2. gnb 메뉴 클릭시 카테고리 서브 이동
    gnb.click((e) =>{ 
        location.href = 'category.html?cat=' + $(e.target).text().toLowerCase();
        // console.log($(e.target).text().toLowerCase());
    });

}); // jQB ///////////////////////////////////////

