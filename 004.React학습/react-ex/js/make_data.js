// 데이터 유형에 맞게 만들기


// [ vans신발 데이터 생성 ]
// let category = ["man", "women"];
// let gname = ["반스케주얼", "반스어얼리", "반스뉴진스", "반스스타일"];
// let gprice = ["66000","55000","25000","46000","20000"];

// [ 여성의류 데이터 기준 ]
let category = ["modern","casual"];
let gname = ["워닝드레스","워스비버든","코코샤스넬라","포코로와드"];
let gprice = ["123000","224000","253000","340000","520000"];


let bb = "";

let rdn = (x) => Math.floor(Math.random() * x);

for (let x = 1; x <= 19; x++) {
    bb += `{
        "idx":${x},
        "gname":"${gname[rdn(4)]}",
        "category":"${category[rdn(3)]}",
        "gprice":"${gprice[rdn(5)]}"
    },
`;
}

console.log(bb);
