import React from "react";
import "./styles.scss";
import { UserMap } from "../UserMap/UserMap";
import { UserGeo } from "../../types/types";

interface UserGeoProps {
  userGeo: UserGeo;
}

export const Main = ({ userGeo }: UserGeoProps) => {
  return (
    <div className="main">
      <UserMap userGeoInfo={userGeo} />
    </div>
  );
};
