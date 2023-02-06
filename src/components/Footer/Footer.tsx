import React from "react";
import "./styles.scss";
import { UserCompany } from "../../types/types";

interface FooterProps {
  userCompanyInfo: UserCompany;
}

export const Footer = ({
  userCompanyInfo: { bs, catchPhrase, name },
}: FooterProps) => {
  return (
    <footer className="footer">
      <h1>FOOTER</h1>
      <p> company bs: {bs}</p>
      <p>company catchPhrase: {catchPhrase}</p>
      <p> company name: {name}</p>
    </footer>
  );
};
