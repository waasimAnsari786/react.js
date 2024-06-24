import React from "react";

export default function List() {
  return (
    <React.Fragment>
      <main className="container">
        <h1 className="heading">top 5 netflix series</h1>
        <p className="pera">list of 5 best series</p>

        <ol>
          <li>Dark</li>
          <li>Dark 2</li>
          <li>Dark 3</li>
          <li>Dark 4</li>
          <li>Dark 5</li>
        </ol>
      </main>
    </React.Fragment>
  );
}
