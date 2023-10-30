// 리스트 페이지 JS - list.js

// 게시판 데이터 불러오기
import bData from './data.json' assert {type:'json'};


bData.sort((a,b) => a.idx - b.idx);
// 데이터를 화면 리스트 코드로 변환하여 적용한다.
// 대상: #board tbody
const board = $('#board tbody');

board.html(
    bData.map(v=> `
    <tr>
        <th>${v.idx}</th>
        <th>${v.tit}</th>
        <th>${v.writer}</th>
        <th>${v.date}</th>
        <th>${v.cnt}</th>
    </tr>
    `).join('')
);