// Add Dependencyでnode-sassを選択
// package.jsonに"node-sass": "7.0.1"が追加される。

// xxxxx.module.scssをimportする　→ importしたもののみ適用の為、競合しにくい
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
