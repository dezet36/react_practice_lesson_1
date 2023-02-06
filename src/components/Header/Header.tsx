import React from "react";
import "./styles.scss";

interface HeaderProps {
  userName: string;
  email: string;
  name: string;
}

export const Header = ({ userName, email, name }: HeaderProps) => {
  return (
    <header className="header">
      <h1>About You</h1>
      <p>User Name: {userName}</p>
      <p>Name: {name}</p>
      <p>email: {email}</p>
    </header>
  );
};
