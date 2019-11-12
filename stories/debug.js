import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import {
  Button,
  Toggle,
  Grid,
  Row,
  Col,
  Accordion,
  Link,
  Checkbox,
  Loading,
  Radio,
  TabNav,
  TabNavItem,
  Label,
  Select,
  InputMask,
  TextInput,
  DateTimeInput,
  TimeInput,
  DatePicker,
  DateInput,
  NumberInput,
  SuggestionInput,
  Card,
} from '../src'

import Wrapper from './Wrapper'
import Separator from './Separator'

// import BaselineGrid from '../src/text/BaselineGrid'

storiesOf('Debug', module).add('Components', () => {
  const suggestions = ['Apple', 'Banana', 'Grapes']

  const SuggestionInputWithValue = ({ disabled }) => {
    const [value, setValue] = useState('')

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <Label htmlFor="fruit">Choose a fruit</Label>
          <SuggestionInput
            name="fruit"
            disabled={disabled}
            value={value}
            onChange={setValue}
            onSelect={sugg => alert('Selected: ' + sugg)}
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
            placeholder="Type to see suggestions"
          />
        </Separator>
      </Wrapper>
    )
  }

  const MaskedTextInputWithValue = ({ disabled }) => {
    const [value, setValue] = useState('')
    const [price, setPrice] = useState('')

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <Label htmlFor="username">E-Mail</Label>
          <InputMask mask="https://example.com/user/">
            <TextInput
              disabled={disabled}
              value={value}
              name="username"
              onChange={setValue}
              placeholder="Type some text..."
            />
          </InputMask>
        </Separator>
        <Separator>
          <Label htmlFor="price">Price</Label>
          <InputMask mask=",00 €" position={InputMask.position.After}>
            <TextInput
              disabled={disabled}
              value={price}
              style={{ textAlign: 'right' }}
              name="price"
              onChange={setPrice}
              placeholder=""
            />
          </InputMask>
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
          <Label htmlFor="country">Country</Label>
          <Select
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
          <Label disabled={disabled} htmlFor="count">
            Number:
          </Label>
          <NumberInput
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
          <Label disabled={disabled} htmlFor="birthdate">
            Birthday:
          </Label>
          <DateInput
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
          <Label disabled={disabled} htmlFor="startdate">
            Start Date
          </Label>
          <DatePicker
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
          <Label disabled={disabled} htmlFor="startDateTime">
            Start Date Time:
          </Label>
          <DateTimeInput
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
          <Label disabled={disabled} htmlFor="startTime">
            Start Time:
          </Label>
          <TimeInput
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

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator>
          <Label htmlFor="email">E-Mail:</Label>
          <TextInput
            disabled={disabled}
            value={value}
            onChange={setValue}
            placeholder="e.g. max@mustermann.de"
          />
        </Separator>
        <Separator>
          <Label htmlFor="password">Password:</Label>
          <TextInput
            disabled={disabled}
            name="password"
            type="password"
            value={pw}
            onChange={setPw}
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
        <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            disabled={disabled}
            name={'agb' + disabled}
            checked={value}
            onChange={setValue}
          />
          <Label pointer={!disabled} htmlFor={'agb' + disabled}>
            Accept AGB
          </Label>
        </Separator>
        <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            disabled={disabled}
            name={'newsletter' + disabled}
            checked={value2}
            onChange={setValue2}
          />
          <Label pointer={!disabled} htmlFor={'newsletter' + disabled}>
            Subscribe Newsletter
          </Label>
        </Separator>
      </Wrapper>
    )
  }

  const RadioWithValue = ({ disabled }) => {
    const [value, setValue] = useState('male')

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Radio
            disabled={disabled}
            value="male"
            name={'gender' + disabled}
            checked={value === 'male'}
            onChange={setValue}
          />
          <Label pointer={!disabled} htmlFor={'gender' + disabled + '-male'}>
            Male
          </Label>
        </Separator>
        <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Radio
            disabled={disabled}
            value="female"
            name={'gender' + disabled}
            checked={value === 'female'}
            onChange={setValue}
          />
          <Label pointer={!disabled} htmlFor={'gender' + disabled + '-female'}>
            Female
          </Label>
        </Separator>
        <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Radio
            disabled={disabled}
            value="other"
            name={'gender' + disabled}
            checked={value === 'other'}
            onChange={setValue}
          />
          <Label pointer={!disabled} htmlFor={'gender' + disabled + '-other'}>
            Other
          </Label>
        </Separator>
      </Wrapper>
    )
  }

  const ToggleWithValue = ({ disabled }) => {
    const [value, setValue] = useState(true)
    const [value2, setValue2] = useState(false)

    return (
      <Wrapper style={{ maxWidth: 500 }}>
        <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Toggle
            disabled={disabled}
            name={'motion' + disabled}
            checked={value}
            onChange={setValue}
          />
          <Label pointer htmlFor={'motion' + disabled}>
            Reduce Motion
          </Label>
        </Separator>
        <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Toggle
            disabled={disabled}
            name={'dark' + disabled}
            checked={value2}
            onChange={setValue2}
          />
          <Label pointer htmlFor={'dark' + disabled}>
            Dark Mode
          </Label>
        </Separator>
      </Wrapper>
    )
  }

  const Tab = () => {
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
      <Wrapper>
        <Separator>
          <AccordionWithValue />
          <AccordionWithValue />
        </Separator>
      </Wrapper>
      <Separator>
        <h2>Actions</h2>
      </Separator>
      <ButtonList />
      <ButtonList intent={Button.intent.Inline} />
      <ButtonList intent={Button.intent.Outline} />
      <ButtonList intent={Button.intent.Text} />
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
          <MaskedTextInputWithValue />
        </div>
        <div style={{ width: 500 }}>
          <MaskedTextInputWithValue disabled />
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
          <Tab />
        </div>
      </Separator>
    </>
  )
})
