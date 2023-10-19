// 데이터 유형에 맞게 만들기

let category = ["man", "women"];
let gname = ["반스케주얼", "반스어얼리", "반스뉴진스", "반스스타일"];
let gprice = ["66000","55000","25000","46000","20000"];
let aa = ["dfdfd", "aaaaa", "bbbbb", "ddddd"];
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
