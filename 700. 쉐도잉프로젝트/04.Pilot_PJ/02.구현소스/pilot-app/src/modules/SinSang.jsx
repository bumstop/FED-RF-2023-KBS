export function SinSang(props) {
  // props.cat - 카테고리 분류명
  const makeList = () => {
    let temp = [];
    for (let x = 0; x < 9; x++) {
      temp[x] = (
        <li className="m1" key={x}>
          <a href="#!">
            <img
              src={"./images/goods/" + props.cat + "/m" + (x + 1) + ".png"}
              alt="신상품"
            />
          </a>
        </li>
      );
    }
    return temp;
  };
  return (
    <>
      <h2 className="c1tit">
        NEW MEN'S ARRIVAL
        <button>전체리스트</button>
      </h2>
      <div className="flowbx">
        <ul className="flist">
          {makeList()}
        </ul>
      </div>
    </>
  );
}
