import React from "react";
import "./styles.scss";

interface AsideProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export const Aside = ({ street, suite, city, zipcode }: AsideProps) => {
  return (
    <aside className="aside">
      <h1>You ASIDE</h1>
      <p> you street: {street}</p>
      <p>you siute: {suite}</p>
      <p>you city: {city}</p>
      <p> you zipcode {zipcode}</p>
    </aside>
  );
};
