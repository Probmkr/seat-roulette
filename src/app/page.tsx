"use client";

import { FormEvent } from "react";

export default function Home() {
  const initSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.target as HTMLFormElement;
    form.
  };

  const InitialForm: React.FC = () => {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <p>人数を入力してください.</p>
        <input id="initNumber" name="initNumber" type="number" />
        <p>最前列を入力してください（カンマ「, 」区切り）</p>
        <input id="initFront" name="initFront" type="text" />
        <br />
        <input id="initSubmit" type="submit" value="決定" />
      </form>
    );
  };

  return (
    <main>
      <h1>自動席替えアプリ</h1>
      <InitialForm />
    </main>
  );
}
