import React from "react";
import "./styles.scss";
import { User } from "../../types/types";

interface HeaderProps {
  userInfo: Pick<User, "username" | "name" | "email">;
}
export const Header = ({
  userInfo: { username, email, name },
}: HeaderProps) => {
  return (
    <header className="header">
      <h1>About You</h1>
      <p>User Name: {username}</p>
      <p>Name: {name}</p>
      <p>email: {email}</p>
    </header>
  );
};
