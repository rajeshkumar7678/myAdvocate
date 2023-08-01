import React from "react";
// import { useLocation } from "react-router-dom";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  // const location = useLocation();
  // console.log(location.state)
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/">Dashboard</Link>
        </LinkItem>
        
        <LinkItem>
          <Link href="/AllUsers">Registered Users</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/AddUsers">Add Users</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/deletelawyer">Delete lawyer</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/deleteUsers">Delete Users</Link>
        </LinkItem>
        <LinkItem>
        <Link href="/AddLawyer">Add lawyer</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/UpdateUsers">Update Users Details</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Booked Apointments </Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
