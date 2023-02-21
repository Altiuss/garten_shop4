import React from "react";
import Block1 from "./main_page_components/Block1";
import Block2 from "./main_page_components/Block2";
import Block3 from "./main_page_components/Block3";
import Block4 from "./main_page_components/Block4";

import s from "./index.module.css";

export default function MainPage() {
  return (
    <main>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <div className={s.sale}></div>
    </main>
  );
}
