import React from "react"
import { storiesOf } from "@storybook/react"

import Nav from "./"
import NavItem from "../navItem"

import Wrapper from "../../stories/Wrapper"
import Separator from "../../stories/Separator"

const Nav = ({ layout }) => {
  const [active, setActive] = React.useState("events")

  return (
    <div style={{ width: 500, border: "1px solid grey" }}>
      <Nav onChange={setActive}>
        <NavItem id="events" active={active === "events"}>
          Events
        </NavItem>
        <NavItem id="communitys" active={active === "communitys"}>
          Communities
        </NavItem>
        <NavItem id="account" active={active === "account"}>
          Account
        </NavItem>
      </Nav>
      <div
        style={{
          padding: 50,
          backgroundColor: "white",
        }}
      >
        {active === "events" && (
          <div style={{ alignSelf: "center" }}>Events View</div>
        )}
        {active === "communitys" && (
          <div style={{ alignSelf: "center" }}>Communities View</div>
        )}
        {active === "account" && (
          <div style={{ alignSelf: "center" }}>Account View</div>
        )}
      </div>
    </div>
  )
}

storiesOf("Navigation/Nav", module).add("Default", () => {
  return (
    <Separator>
      <Nav />
    </Separator>
  )
})
