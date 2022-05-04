// Add Dependencyでstyled-jsxを選択
// package.jsonに"styled-jsx": "5.0.2"が追加される。
// デフォルトでは擬似要素は使えない(プラグインが必要)
// 同じ色になっているが、VSCodeなどで拡張機能を入れると色が変わったり補完してくれる
// styled-jsxはNext.jsでデフォルトで入っている

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
