import React from "react";
import "./styles.scss";
import { UserAddress } from "../../types/types";
import { Main } from "../Main/Main";
import { Aside } from "../Aside/Aside";

interface LocationProps {
  userLocation: UserAddress;
}
export const Location = ({
  userLocation: { geo, street, suite, city, zipcode },
}: LocationProps) => {
  return (
    <div className="location">
      <Main userGeo={geo} />
      <Aside street={street} suite={suite} city={city} zipcode={zipcode} />
    </div>
  );
};
