import React from "react";
import "./styles.scss";
import { UserAddress } from "../../types/types";
import { Main } from "../Main/Main";
import { Aside } from "../Aside/Aside";

interface LocationProps {
  userLocation: UserAddress;
}
export const Location = ({ userLocation }: LocationProps) => {
  return (
    <div className="location">
      <Main userGeo={userLocation.geo} />
      <Aside useradress={userLocation} />
    </div>
  );
};
