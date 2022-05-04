// Add Dependencyでstyled-componentsを選択
// package.jsonに"styled-components": "5.3.5"が追加される。
// 人気がある
// 擬似要素などを含め、Sassと同じ記法が可能。Sassを置き換えるときはそのまま使える。

import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- styled components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};

/// styled-componentsか他のコンポーネントか分からなくなるため、SXXXXXX(Scontainer)としている
const SContainer = styled.div`
  border: solid 2px #392eff; //　青枠
  border-radius: 20px; //　角を丸くする
  padding: 8px; //　　内側のスペース
  margin: 8px; //　　横のスペース
  display: flex; //　　横並び
  justify-content: space-around; //　　　　　　横方向のレイアウト
  align-items: center; //　　　　　　垂直方向のレイアウト
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
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
