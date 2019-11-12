import React from "react"
import { storiesOf } from "@storybook/react"
import { select } from "@storybook/addon-knobs"

import TabNav from "./"
import TabNavItem from "../tabNavItem"

import Wrapper from "../../stories/Wrapper"
import Separator from "../../stories/Separator"

const Tab = ({ layout }) => {
  const [active, setActive] = React.useState("events")

  return (
    <div style={{ width: 500, border: "1px solid grey" }}>
      <TabNav onChange={setActive} layout={TabNav.layout[layout]}>
        <TabNavItem id="events" active={active === "events"}>
          Events
        </TabNavItem>
        <TabNavItem id="communitys" active={active === "communitys"}>
          Communities
        </TabNavItem>
        <TabNavItem id="guests" active={active === "guests"}>
          Guests
        </TabNavItem>
      </TabNav>
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
        {active === "guests" && (
          <div style={{ alignSelf: "center" }}>Guests View</div>
        )}
      </div>
    </div>
  )
}

storiesOf("Navigation/TabNav", module).add("Default", () => {
  const layout = select(
    "layout",
    ["Spread", "Center", "Start", "End"],
    "Spread"
  )

  return (
    <Separator>
      <Tab layout={layout} />
    </Separator>
  )
})
