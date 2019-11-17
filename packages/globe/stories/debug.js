import React, { useState, createElement } from 'react'
import { storiesOf } from '@storybook/react'

import {
  Accordion,
  Box,
  Button,
  Card,
  Checkbox,
  Col,
  DateInput,
  DatePicker,
  DateTimeInput,
  Grid,
  IconButton,
  Icons,
  Label,
  Link,
  Loading,
  Modal,
  Nav,
  NavItem,
  NumberInput,
  Radio,
  Row,
  ScrollView,
  Select,
  SuggestionInput,
  SuggestionItem,
  TabNav,
  TabNavItem,
  Text,
  TextInput,
  TimeInput,
  Toggle,
} from '../src'

import Wrapper from './Wrapper'
import Separator from './Separator'

// import BaselineGrid from '../src/text/BaselineGrid'

storiesOf('Debug', module).add('Components', () => {
  const Icon = ({ type }) => (
    <div
      style={{
        width: 50,
        height: 50,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {createElement(Icons[type], {
        style: {
          fontSize: 24,
          alignSelf: 'center',
          marginBottom: 5,
        },
      })}
    </div>
  )

  const ModalWithTrigger = () => {
    const [visible, setVisible] = useState(false)

    const close = () => setVisible(false)

    return (
      <>
        <div style={{ alignSelf: 'flex-start' }}>
          <Button onClick={() => setVisible(true)}>Modal</Button>
        </div>
        {visible ? (
          <Modal onClose={close} style={{ backgroundColor: 'white' }}>
            <div style={{ width: 200 }}>
              <h2 style={{ textAlign: 'center' }}>Modal</h2>
              <br />
              <Button variant={Button.variant.Destructive} onClick={close}>
                Close
              </Button>
            </div>
          </Modal>
        ) : null}
      </>
    )
  }

  const suggestions = [
    'Apple',
    'Banana',
    'Grapes',
    'Cherry',
    'Pineapple',
    'Strawberry',
  ]

  const SuggestionInputWithValue = ({ disabled }) => {
    const [value, setValue] = useState('')

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <SuggestionInput
            value={value}
            disabled={disabled}
            onChange={setValue}
            label="Choose a fruit"
            onSelect={sugg => alert('Selected: ' + sugg)}
            getValue={suggestion => suggestion}
            getSuggestions={value =>
              new Promise((resolve, reject) => {
                const search = value.trim().toLowerCase()

                setTimeout(
                  () =>
                    resolve(
                      suggestions.filter(
                        sugg =>
                          sugg
                            .trim()
                            .toLowerCase()
                            .indexOf(search) !== -1
                      )
                    ),
                  Math.random() * 1000
                )
              })
            }
            placeholder="Type to see suggestions">
            {(suggestion, isFocused, selectSuggestion) => (
              <SuggestionItem isFocused={isFocused} onClick={selectSuggestion}>
                {suggestion}
              </SuggestionItem>
            )}
          </SuggestionInput>
        </Separator>
      </Wrapper>
    )
  }

  const Column = ({ children, size }) => (
    <Col size={size}>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 7,
          textAlign: 'center',
          padding: 10,
          border: '1px solid grey',
        }}>
        {children}
      </div>
    </Col>
  )

  const SelectWithValue = ({ disabled }) => {
    const [value, setValue] = useState('Germany')

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <Select
            label="Country"
            disabled={disabled}
            name="country"
            required
            onChange={setValue}
            value={value}>
            <option value="Germany">Germany</option>
            <option value="Italy">Italy</option>
          </Select>
        </Separator>
      </Wrapper>
    )
  }

  const NumberInputWithValue = ({ disabled }) => {
    const [value, setValue] = useState()

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <NumberInput
            label="Number"
            disabled={disabled}
            name="count"
            value={value}
            onChange={setValue}
          />
        </Separator>
      </Wrapper>
    )
  }

  const DateInputWithValue = ({ disabled }) => {
    const [value, setValue] = useState({})

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <DateInput
            label="Birthday"
            disabled={disabled}
            name="birthdate"
            value={value}
            onChange={setValue}
          />
        </Separator>
      </Wrapper>
    )
  }

  const DatePickerWithValue = ({ disabled }) => {
    const [value, setValue] = useState()

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <DatePicker
            label="Start Date"
            disabled={disabled}
            name="startdate"
            value={value}
            onChange={setValue}
          />
        </Separator>
      </Wrapper>
    )
  }

  const DateTimeInputWithValue = ({ disabled }) => {
    const [value, setValue] = useState({})

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <DateTimeInput
            label="Start Date Time"
            disabled={disabled}
            name="startDateTime"
            value={value}
            onChange={setValue}
          />
        </Separator>
      </Wrapper>
    )
  }

  const TimeInputWithValue = ({ disabled }) => {
    const [value, setValue] = useState(_ => ({}))
    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <TimeInput
            label="Start Time"
            disabled={disabled}
            name="startTime"
            value={value}
            onChange={setValue}
          />
        </Separator>
      </Wrapper>
    )
  }

  const TextInputWithValue = ({ disabled }) => {
    const [value, setValue] = useState('')
    const [pw, setPw] = useState('')
    const [website, setWebsite] = useState('')

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <TextInput
            label="E-Mail"
            disabled={disabled}
            value={value}
            onChange={setValue}
            placeholder="e.g. max@mustermann.de"
          />
        </Separator>
        <Separator>
          <TextInput
            label="Password"
            disabled={disabled}
            name="password"
            type="password"
            value={pw}
            onChange={setPw}
          />
        </Separator>
        <Separator>
          <TextInput
            label="Website"
            disabled={disabled}
            name="website"
            value={website}
            maskStart="https://"
            onChange={setWebsite}
          />
        </Separator>
      </Wrapper>
    )
  }

  const CheckboxWithValue = ({ disabled }) => {
    const [value, setValue] = useState(true)
    const [value2, setValue2] = useState(false)

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <Checkbox
            label="Accept AGB"
            disabled={disabled}
            name={'agb' + disabled}
            checked={value}
            onChange={setValue}
          />
        </Separator>
        <Separator>
          <Checkbox
            disabled={disabled}
            name={'newsletter' + disabled}
            checked={value2}
            onChange={setValue2}
            label="Subscribe Newsletter"
          />
        </Separator>
      </Wrapper>
    )
  }

  const RadioWithValue = ({ disabled }) => {
    const [value, setValue] = useState('male')

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <Radio
            disabled={disabled}
            value="one"
            name={'number' + disabled}
            checked={value === 'one'}
            label="One"
            onChange={setValue}
          />
        </Separator>
        <Separator>
          <Radio
            disabled={disabled}
            value="two"
            name={'number' + disabled}
            checked={value === 'two'}
            label="Two"
            onChange={setValue}
          />
        </Separator>
        <Separator>
          <Radio
            disabled={disabled}
            value="three"
            name={'number' + disabled}
            checked={value === 'three'}
            label="Three"
            onChange={setValue}
          />
        </Separator>
      </Wrapper>
    )
  }

  const ToggleWithValue = ({ disabled }) => {
    const [value, setValue] = useState(true)
    const [value2, setValue2] = useState(false)

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <Toggle
            disabled={disabled}
            name={'motion' + disabled}
            checked={value}
            onChange={setValue}
            label="Reduce Motion"
          />
        </Separator>
        <Separator>
          <Toggle
            disabled={disabled}
            name={'dark' + disabled}
            checked={value2}
            onChange={setValue2}
            label="Dark Mode"
          />
        </Separator>
      </Wrapper>
    )
  }

  const TabNavigation = () => {
    const [active, setActive] = React.useState('events')

    return (
      <div>
        <TabNav onChange={setActive}>
          <TabNavItem id="events" active={active === 'events'}>
            Events
          </TabNavItem>
          <TabNavItem id="communitys" active={active === 'communitys'}>
            Communities
          </TabNavItem>
          <TabNavItem id="guests" active={active === 'guests'}>
            Guests
          </TabNavItem>
        </TabNav>
        <div
          style={{
            padding: 50,
            backgroundColor: 'white',
          }}>
          {active === 'events' && (
            <div style={{ alignSelf: 'center' }}>Events View</div>
          )}
          {active === 'communitys' && (
            <div style={{ alignSelf: 'center' }}>Communities View</div>
          )}
          {active === 'guests' && (
            <div style={{ alignSelf: 'center' }}>Guests View</div>
          )}
        </div>
      </div>
    )
  }

  const AccordionWithValue = () => {
    const [expanded, setExpanded] = useState(false)

    return (
      <Wrapper>
        <Separator>
          <Accordion
            expanded={expanded}
            onChange={setExpanded}
            trigger={ex => <div>{ex ? 'Hide' : 'Show'}</div>}>
            <div style={{ padding: 10, backgroundColor: 'white' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </div>
          </Accordion>
        </Separator>
      </Wrapper>
    )
  }

  const ButtonList = ({ intent }) => {
    return (
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 200 }}>
          <Separator>
            <Button intent={intent} size={Button.size.Small}>
              Small Button
            </Button>
          </Separator>
          <Separator>
            <Button intent={intent} size={Button.size.Normal}>
              Normal Button
            </Button>
          </Separator>
          <Separator>
            <Button intent={intent} size={Button.size.Big}>
              Big Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              variant={Button.variant.Destructive}
              size={Button.size.Small}>
              Small Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              variant={Button.variant.Destructive}
              size={Button.size.Normal}>
              Normal Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              variant={Button.variant.Destructive}
              size={Button.size.Big}>
              Big Button
            </Button>
          </Separator>
        </div>
        <div style={{ width: 200 }}>
          <Separator>
            <Button intent={intent} loading size={Button.size.Small}>
              Small Button
            </Button>
          </Separator>
          <Separator>
            <Button intent={intent} loading size={Button.size.Normal}>
              Normal Button
            </Button>
          </Separator>
          <Separator>
            <Button intent={intent} loading size={Button.size.Big}>
              Big Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              loading
              variant={Button.variant.Destructive}
              size={Button.size.Small}>
              Small Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              loading
              variant={Button.variant.Destructive}
              size={Button.size.Normal}>
              Normal Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              loading
              variant={Button.variant.Destructive}
              size={Button.size.Big}>
              Big Button
            </Button>
          </Separator>
        </div>
        <div style={{ width: 200 }}>
          <Separator>
            <Button intent={intent} disabled size={Button.size.Small}>
              Small Button
            </Button>
          </Separator>
          <Separator>
            <Button intent={intent} disabled size={Button.size.Normal}>
              Normal Button
            </Button>
          </Separator>
          <Separator>
            <Button intent={intent} disabled size={Button.size.Big}>
              Big Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              disabled
              variant={Button.variant.Destructive}
              size={Button.size.Small}>
              Small Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              disabled
              variant={Button.variant.Destructive}
              size={Button.size.Normal}>
              Normal Button
            </Button>
          </Separator>
          <Separator>
            <Button
              intent={intent}
              disabled
              variant={Button.variant.Destructive}
              size={Button.size.Big}>
              Big Button
            </Button>
          </Separator>
        </div>
        <div style={{ width: 200 }}>
          <Separator>
            <Button loading disabled intent={intent} size={Button.size.Small}>
              Small Button
            </Button>
          </Separator>
          <Separator>
            <Button loading disabled intent={intent} size={Button.size.Normal}>
              Normal Button
            </Button>
          </Separator>
          <Separator>
            <Button loading disabled intent={intent} size={Button.size.Big}>
              Big Button
            </Button>
          </Separator>
          <Separator>
            <Button
              loading
              disabled
              intent={intent}
              variant={Button.variant.Destructive}
              size={Button.size.Small}>
              Small Button
            </Button>
          </Separator>
          <Separator>
            <Button
              loading
              disabled
              intent={intent}
              variant={Button.variant.Destructive}
              size={Button.size.Normal}>
              Normal Button
            </Button>
          </Separator>
          <Separator>
            <Button
              loading
              disabled
              intent={intent}
              variant={Button.variant.Destructive}
              size={Button.size.Big}>
              Big Button
            </Button>
          </Separator>
        </div>
      </div>
    )
  }

  return (
    <>
      <Separator>
        <h2>Core</h2>
      </Separator>
      <Separator>
        <Text intent="title">Title</Text>
        <Text intent="subtitle">Subtitle</Text>
        <Text intent="category">Category</Text>
        <Text intent="body">Body Text</Text>
        <Text>Default Text</Text>
        <Text intent="label">Label Text</Text>
        <Text intent="label" variant="info">
          Label Info
        </Text>
      </Separator>
      <Separator>
        <div style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Icon type="address" />
          <Icon type="adjust" />
          <Icon type="air" />
          <Icon type="alert" />
          <Icon type="archive" />
          <Icon type="arrowCombo" />
          <Icon type="arrowsCcw" />
          <Icon type="attach" />
          <Icon type="attention" />
          <Icon type="back" />
          <Icon type="backInTime" />
          <Icon type="bag" />
          <Icon type="basket" />
          <Icon type="battery" />
          <Icon type="behance" />
          <Icon type="bell" />
          <Icon type="block" />
          <Icon type="book" />
          <Icon type="bookOpen" />
          <Icon type="bookmark" />
          <Icon type="bookmarks" />
          <Icon type="box" />
          <Icon type="briefcase" />
          <Icon type="brush" />
          <Icon type="bucket" />
          <Icon type="calendar" />
          <Icon type="camera" />
          <Icon type="cancel" />
          <Icon type="cancelCircled" />
          <Icon type="cancelSquared" />
          <Icon type="cc" />
          <Icon type="ccBy" />
          <Icon type="ccNc" />
          <Icon type="ccNcEu" />
          <Icon type="ccNcJp" />
          <Icon type="ccNd" />
          <Icon type="ccPd" />
          <Icon type="ccRemix" />
          <Icon type="ccSa" />
          <Icon type="ccShare" />
          <Icon type="ccZero" />
          <Icon type="ccw" />
          <Icon type="cd" />
          <Icon type="chartArea" />
          <Icon type="chartBar" />
          <Icon type="chartLine" />
          <Icon type="chartPie" />
          <Icon type="chat" />
          <Icon type="check" />
          <Icon type="clipboard" />
          <Icon type="clock" />
          <Icon type="cloud" />
          <Icon type="cloudThunder" />
          <Icon type="code" />
          <Icon type="cog" />
          <Icon type="comment" />
          <Icon type="compass" />
          <Icon type="creditCard" />
          <Icon type="cup" />
          <Icon type="cw" />
          <Icon type="database" />
          <Icon type="dbShape" />
          <Icon type="direction" />
          <Icon type="doc" />
          <Icon type="docLandscape" />
          <Icon type="docText" />
          <Icon type="docTextInv" />
          <Icon type="docs" />
          <Icon type="dot" />
          <Icon type="dot2" />
          <Icon type="dot3" />
          <Icon type="down" />
          <Icon type="downBold" />
          <Icon type="downCircled" />
          <Icon type="downDir" />
          <Icon type="downOpen" />
          <Icon type="downOpenBig" />
          <Icon type="downOpenMini" />
          <Icon type="downThin" />
          <Icon type="download" />
          <Icon type="dribbble" />
          <Icon type="dribbbleCircled" />
          <Icon type="drive" />
          <Icon type="dropbox" />
          <Icon type="droplet" />
          <Icon type="erase" />
          <Icon type="evernote" />
          <Icon type="export" />
          <Icon type="eye" />
          <Icon type="facebook" />
          <Icon type="facebookCircled" />
          <Icon type="facebookSquared" />
          <Icon type="fastBackward" />
          <Icon type="fastForward" />
          <Icon type="feather" />
          <Icon type="filter" />
          <Icon type="flag" />
          <Icon type="flash" />
          <Icon type="flashlight" />
          <Icon type="flattr" />
          <Icon type="flickr" />
          <Icon type="flickrCircled" />
          <Icon type="flight" />
          <Icon type="floppy" />
          <Icon type="flowBranch" />
          <Icon type="flowCascade" />
          <Icon type="flowLine" />
          <Icon type="flowParallel" />
          <Icon type="flowTree" />
          <Icon type="folder" />
          <Icon type="forward" />
          <Icon type="gauge" />
          <Icon type="github" />
          <Icon type="githubCircled" />
          <Icon type="globe" />
          <Icon type="googleCircles" />
          <Icon type="gplus" />
          <Icon type="gplusCircled" />
          <Icon type="graduationCap" />
          <Icon type="heart" />
          <Icon type="heartEmpty" />
          <Icon type="help" />
          <Icon type="helpCircled" />
          <Icon type="home" />
          <Icon type="hourglass" />
          <Icon type="inbox" />
          <Icon type="infinity" />
          <Icon type="info" />
          <Icon type="infoCircled" />
          <Icon type="instagrem" />
          <Icon type="install" />
          <Icon type="key" />
          <Icon type="keyboard" />
          <Icon type="lamp" />
          <Icon type="language" />
          <Icon type="lastfm" />
          <Icon type="lastfmCircled" />
          <Icon type="layout" />
          <Icon type="leaf" />
          <Icon type="left" />
          <Icon type="leftBold" />
          <Icon type="leftCircled" />
          <Icon type="leftDir" />
          <Icon type="leftOpen" />
          <Icon type="leftOpenBig" />
          <Icon type="leftOpenMini" />
          <Icon type="leftThin" />
          <Icon type="levelDown" />
          <Icon type="levelUp" />
          <Icon type="lifebuoy" />
          <Icon type="lightDown" />
          <Icon type="lightUp" />
          <Icon type="link" />
          <Icon type="linkedin" />
          <Icon type="linkedinCircled" />
          <Icon type="list" />
          <Icon type="listAdd" />
          <Icon type="location" />
          <Icon type="lock" />
          <Icon type="lockOpen" />
          <Icon type="login" />
          <Icon type="logoDb" />
          <Icon type="logout" />
          <Icon type="loop" />
          <Icon type="magnet" />
          <Icon type="mail" />
          <Icon type="map" />
          <Icon type="megaphone" />
          <Icon type="menu" />
          <Icon type="mic" />
          <Icon type="minus" />
          <Icon type="minusCircled" />
          <Icon type="minusSquared" />
          <Icon type="mixi" />
          <Icon type="mobile" />
          <Icon type="monitor" />
          <Icon type="moon" />
          <Icon type="mouse" />
          <Icon type="music" />
          <Icon type="mute" />
          <Icon type="network" />
          <Icon type="newspaper" />
          <Icon type="note" />
          <Icon type="noteBeamed" />
          <Icon type="palette" />
          <Icon type="paperPlane" />
          <Icon type="pause" />
          <Icon type="paypal" />
          <Icon type="pencil" />
          <Icon type="phone" />
          <Icon type="picasa" />
          <Icon type="picture" />
          <Icon type="pinterest" />
          <Icon type="pinterestCircled" />
          <Icon type="play" />
          <Icon type="plus" />
          <Icon type="plusCircled" />
          <Icon type="plusSquared" />
          <Icon type="popup" />
          <Icon type="print" />
          <Icon type="progress0" />
          <Icon type="progress1" />
          <Icon type="progress2" />
          <Icon type="progress3" />
          <Icon type="publish" />
          <Icon type="qq" />
          <Icon type="quote" />
          <Icon type="rdio" />
          <Icon type="rdioCircled" />
          <Icon type="record" />
          <Icon type="renren" />
          <Icon type="reply" />
          <Icon type="replyAll" />
          <Icon type="resizeFull" />
          <Icon type="resizeSmall" />
          <Icon type="retweet" />
          <Icon type="right" />
          <Icon type="rightBold" />
          <Icon type="rightCircled" />
          <Icon type="rightDir" />
          <Icon type="rightOpen" />
          <Icon type="rightOpenBig" />
          <Icon type="rightOpenMini" />
          <Icon type="rightThin" />
          <Icon type="rocket" />
          <Icon type="rss" />
          <Icon type="search" />
          <Icon type="share" />
          <Icon type="shareable" />
          <Icon type="shuffle" />
          <Icon type="signal" />
          <Icon type="sinaWeibo" />
          <Icon type="skype" />
          <Icon type="skypeCircled" />
          <Icon type="smashing" />
          <Icon type="sound" />
          <Icon type="soundcloud" />
          <Icon type="spotify" />
          <Icon type="spotifyCircled" />
          <Icon type="star" />
          <Icon type="starEmpty" />
          <Icon type="stop" />
          <Icon type="stumbleupon" />
          <Icon type="stumbleuponCircled" />
          <Icon type="suitcase" />
          <Icon type="sweden" />
          <Icon type="switch" />
          <Icon type="tag" />
          <Icon type="tape" />
          <Icon type="target" />
          <Icon type="thermometer" />
          <Icon type="thumbsDown" />
          <Icon type="thumbsUp" />
          <Icon type="ticket" />
          <Icon type="toEnd" />
          <Icon type="toStart" />
          <Icon type="tools" />
          <Icon type="trafficCone" />
          <Icon type="trash" />
          <Icon type="trophy" />
          <Icon type="tumblr" />
          <Icon type="tumblrCircled" />
          <Icon type="twitter" />
          <Icon type="twitterCircled" />
          <Icon type="up" />
          <Icon type="upBold" />
          <Icon type="upCircled" />
          <Icon type="upDir" />
          <Icon type="upOpen" />
          <Icon type="upOpenBig" />
          <Icon type="upOpenMini" />
          <Icon type="upThin" />
          <Icon type="upload" />
          <Icon type="uploadCloud" />
          <Icon type="user" />
          <Icon type="userAdd" />
          <Icon type="users" />
          <Icon type="vcard" />
          <Icon type="video" />
          <Icon type="vimeo" />
          <Icon type="vimeoCircled" />
          <Icon type="vkontakte" />
          <Icon type="volume" />
          <Icon type="water" />
          <Icon type="window" />
        </div>
      </Separator>
      <br />
      <br />
      <Separator>
        <h2>Layout</h2>
      </Separator>
      <Wrapper style={{ flexDirection: 'row' }}>
        <Separator>
          <Card
            style={{
              margin: 5,
              width: 200,
              padding: 20,
              fontSize: 20,
              backgroundColor: 'white',
              textAlign: 'center',
            }}
            elevation={Card.elevation.Minimal}>
            Minimal
          </Card>
        </Separator>
        <Separator>
          <Card
            style={{
              margin: 5,
              width: 200,
              padding: 20,
              fontSize: 20,
              backgroundColor: 'white',
              textAlign: 'center',
            }}
            elevation={Card.elevation.Low}>
            Low
          </Card>
        </Separator>
        <Separator>
          <Card
            style={{
              margin: 5,
              width: 200,
              padding: 20,
              fontSize: 20,
              backgroundColor: 'white',
              textAlign: 'center',
            }}
            elevation={Card.elevation.Medium}>
            Medium
          </Card>
        </Separator>
        <Separator>
          <Card
            style={{
              margin: 5,
              width: 200,
              padding: 20,
              fontSize: 20,
              backgroundColor: 'white',
              textAlign: 'center',
            }}
            elevation={Card.elevation.High}>
            High
          </Card>
        </Separator>
      </Wrapper>
      <br />
      <Grid>
        <Row>
          <Column size={3}>3</Column>
          <Column size={7}>7</Column>
        </Row>
        <br />
        <Row align={Row.align.Start}>
          <Column size={3}>3</Column>
          <Column size={7}>7</Column>
        </Row>
        <br />
        <Row align={Row.align.Start}>
          <Column size={2}>2</Column>
          <Column size={3}>3</Column>
          <Column size={5}>5</Column>
        </Row>
        <br />
        <Row align={Row.align.End}>
          <Column size={3}>3</Column>
          <Column size={7}>7</Column>
        </Row>
        <br />
        <Row align={Row.align.End}>
          <Column size={2}>2</Column>
          <Column size={3}>3</Column>
          <Column size={5}>5</Column>
        </Row>
      </Grid>
      <br />
      <Separator style={{ flexDirection: 'row' }}>
        <div
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            backgroundColor: 'rgb(180, 180, 180)',
          }}>
          0
        </div>
        <Box width={4} size={4} />
        <div
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            backgroundColor: 'rgb(180, 180, 180)',
          }}>
          4
        </div>
        <Box width={8} size={8} />
        <div
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            backgroundColor: 'rgb(180, 180, 180)',
          }}>
          8
        </div>
        <Box width={16} size={16} />
        <div
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            backgroundColor: 'rgb(180, 180, 180)',
          }}>
          16
        </div>
        <Box width={32} size={32} />
        <div
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            backgroundColor: 'rgb(180, 180, 180)',
          }}>
          32
        </div>
      </Separator>
      <Separator>
        <Box row space={3}>
          <Box padding={20} extend={{ backgroundColor: 'black' }} />
          <Box padding={20} extend={{ backgroundColor: 'grey' }} />
        </Box>
      </Separator>
      <Separator>
        <ScrollView
          extend={{ height: 200, width: 200, border: '2px solid black' }}>
          <Box padding={3} space={3}>
            <Box padding={20} extend={{ backgroundColor: 'rgb(0, 0,0)' }} />
            <Box padding={20} extend={{ backgroundColor: 'rgb(50, 50,50)' }} />
            <Box
              padding={20}
              extend={{ backgroundColor: 'rgb(100, 100,100)' }}
            />
            <Box
              padding={20}
              extend={{ backgroundColor: 'rgb(150, 150,150)' }}
            />
            <Box
              padding={20}
              extend={{ backgroundColor: 'rgb(200, 200,200)' }}
            />
            <Box
              padding={20}
              extend={{ backgroundColor: 'rgb(220, 220,220)' }}
            />
          </Box>
        </ScrollView>
      </Separator>
      <br />
      <br />
      <Separator>
        <h2>Actions</h2>
      </Separator>
      <ButtonList />
      <ButtonList intent={Button.intent.Outline} />
      <ButtonList intent={Button.intent.Text} />
      <br />
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 400, flexDirection: 'row' }}>
          <Separator>
            <IconButton>
              <Icons.plus />
            </IconButton>
          </Separator>
          <Separator>
            <IconButton variant={IconButton.variant.Destructive}>
              <Icons.minus />
            </IconButton>
          </Separator>
        </div>

        <div style={{ width: 400, flexDirection: 'row' }}>
          <Separator>
            <IconButton disabled>
              <Icons.plus />
            </IconButton>
          </Separator>
          <Separator>
            <IconButton disabled variant={IconButton.variant.Destructive}>
              <Icons.minus />
            </IconButton>
          </Separator>
        </div>
      </div>
      <br />
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 400 }}>
          <Separator>
            <Link href="/test">Clickable Link</Link>
          </Separator>
        </div>
        <div style={{ width: 400 }}>
          <Separator>
            <Link disabled href="/test">
              Disabled Link
            </Link>
          </Separator>
        </div>
      </div>
      <br />
      <br />
      <Separator>
        <h2>Disclosure</h2>
      </Separator>
      <Separator>
        <ModalWithTrigger />
      </Separator>
      <Wrapper>
        <Separator>
          <AccordionWithValue />
          <AccordionWithValue />
        </Separator>
      </Wrapper>
      <br /> <br />
      <Separator>
        <h2>Indicators</h2>
      </Separator>
      <Wrapper>
        <Separator>
          <Loading />
        </Separator>
        <Separator>
          <Loading size={30} />
        </Separator>
        <Separator>
          <Loading size={40} />
        </Separator>
      </Wrapper>
      <br />
      <br />
      <Separator>
        <h2>Forms</h2>
      </Separator>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <TextInputWithValue />
        </div>
        <div style={{ width: 500 }}>
          <TextInputWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <NumberInputWithValue />
        </div>
        <div style={{ width: 500 }}>
          <NumberInputWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <SelectWithValue />
        </div>
        <div style={{ width: 500 }}>
          <SelectWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <SuggestionInputWithValue />
        </div>
        <div style={{ width: 500 }}>
          <SuggestionInputWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <DatePickerWithValue />
        </div>
        <div style={{ width: 500 }}>
          <DatePickerWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <TimeInputWithValue />
        </div>
        <div style={{ width: 500 }}>
          <TimeInputWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <DateInputWithValue />
        </div>
        <div style={{ width: 500 }}>
          <DateInputWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <DateTimeInputWithValue />
        </div>
        <div style={{ width: 500 }}>
          <DateTimeInputWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <CheckboxWithValue />
        </div>
        <div style={{ width: 500 }}>
          <CheckboxWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <RadioWithValue />
        </div>
        <div style={{ width: 500 }}>
          <RadioWithValue disabled />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <div style={{ width: 500 }}>
          <ToggleWithValue />
        </div>
        <div style={{ width: 500 }}>
          <ToggleWithValue disabled />
        </div>
      </div>
      <br /> <br />
      <Separator>
        <h2>Navigation</h2>
      </Separator>
      <Separator>
        <div style={{ width: 500, border: '1px solid grey' }}>
          <Nav>
            <NavItem active icon={<Icons.home />}>
              Home
            </NavItem>
            <NavItem icon={<Icons.user />}>Account</NavItem>
          </Nav>
        </div>
      </Separator>
      <Separator>
        <div style={{ width: 500, border: '1px solid grey' }}>
          <TabNavigation />
        </div>
      </Separator>
    </>
  )
})
