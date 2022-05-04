// Add Dependencyで@emotion/reactと@emotion/styledを選択
// package.jsonに"@emotion/react": "11.9.0" と "@emotion/styled": "11.8.1"が追加される。
// 色々な書き方ができる
// 上に/** @jsx jsx */をつける(エラーが出るので、/** @jsxRuntime classic */もつけている)
/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // 1. sassと同じ書き方
  const containerStyle = css`
    border: solid 2px #392eff; //　青枠
    border-radius: 20px; //　角を丸くする
    padding: 8px; //　　内側のスペース
    margin: 8px; //　　横のスペース
    display: flex; //　　横並び
    justify-content: space-around; //　　　　　　横方向のレイアウト
    align-items: center; //　　　　　　垂直方向のレイアウト
  `;
  // 2. inlineStyleと同様の書き方
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};
// 3. styled-componentsと同様の書き方
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  //　cssの為、Sassの記法である様々な擬似要素が設定可能
  //　以下はマウスを乗せた時の挙動を設定
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
