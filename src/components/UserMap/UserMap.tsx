import React from "react";
import "./styles.scss";
import { UserGeo } from "../../types/types";

export interface UserMapProps {
  userGeoInfo: UserGeo;
}

export const UserMap = ({ userGeoInfo: { lat, lng } }: UserMapProps) => {
  return (
    <div className="usermap">
      <h1>You Geo</h1>
      <p> user lat: {lat},</p>
      <p> user lng: {lng}</p>
    </div>
  );
};
