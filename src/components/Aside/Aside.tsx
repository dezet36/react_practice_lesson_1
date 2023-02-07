import React from "react";
import "./styles.scss";
import { UserAddress } from "../../types/types";

interface AsideProps {
  useradress: Omit<UserAddress, "geo">;
}

export const Aside = ({
  useradress: { street, suite, city, zipcode },
}: AsideProps) => {
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
