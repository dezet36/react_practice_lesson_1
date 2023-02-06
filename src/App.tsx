import React from "react";
import "./components/ui/styles.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Location } from "./components/Location/Location";
import { User } from "./types/types";

export const App = () => {
  const user: User = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  return (
    <div className="hero">
      <Header name={user.name} userName={user.username} email={user.email} />
      <Location userLocation={user.address} />
      <Footer userCompanyInfo={user.company} />
    </div>
  );
};
