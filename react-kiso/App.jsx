import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./Component/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  useEffect(() => {
    if (num % 3 === 0) {
      //faceShowFlagがFalseの場合のみtrueにする
      faceShowFlag || setFaceShowFlag(true);
    } else {
      //faceShowFlagがtrueの場合のみfalseにする
      faceShowFlag && setFaceShowFlag(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>（＾ω＾）</p>}
    </>
  );
};

export default App;
