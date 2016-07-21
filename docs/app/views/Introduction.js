import React, { Component, PropTypes } from 'react'
import Highlight from 'react-highlight'

import { Divider, Grid, Header, Icon } from 'stardust'

const AccordionJSX = `const panels = [{
  title: 'What is a dog?',
  content: '...',
  }, {
  title: 'What kinds are there?',
  content: '...',
}]

<Accordion panels={panels} />`

const AccordionHTML = `<div class="ui accordion">
  <div class="title">
    <i class="dropdown icon"></i></i>
    What is a dog?
  </div>
  <div class="content">
    <p></p...>...</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i></i>
    What kinds are there?
  </div>
  <div class="content">
    <p></p...>...</p>
  </div>
</div>`

const BreadcrumbJSX = `const sections = [
  { text: 'Home', link: true },
  { text: 'Store', link: true },
  { text: 'T-Shirt', active: true },
]

<Breadcrumb
  icon='right angle'
  sections={sections}
/>`

const BreadcrumbHTML = `<div class="ui breadcrumb">
  <a class="section">Home</a>
  <i class="right angle icon divider"></i>
  <a class="section">Store</a>
  <i class="right angle icon divider"></i>
  <div class="active section">T-Shirt</div>
</div>`

const IconLabelHTML = `<div class="ui label">
  <i class="mail icon"></i></i>
    Mail
</div>`

const IconButtonHTML = `<button class="ui button">
  <i class="cloud icon"></i></i>
</button>
`

const IconButtonJSX = "<Button icon='cloud' />"

const IconLabelJSX = "<Label icon='mail' text='Mail' />"

const RatingJSX = `<Rating
  size='small'
  icon='heart'
  rating={1}
  maxRating={5}
/>`

const RatingHTML = `<div
  class="ui small heart rating"
  data-rating="1"
  data-max-rating="3"
></div>`

const ColorButtonJSX = `<Button color='blue'>
  Login
</Button>`

const ColorButtonHTML = `<button class="ui blue button">
  Login
</button>`

const Comparison = ({ jsx, html }) => (
  <Grid className='two column very relaxed padded'>
    <Grid.Row>
      <Grid.Column>
        <Highlight className='language-javascript'>
          {jsx}
        </Highlight>
      </Grid.Column>
      <Divider vertical>
        <Icon name='right arrow circle' />
      </Divider>
      <Grid.Column>
        <Highlight className='language-html'>
          {html}
        </Highlight>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

Comparison.propTypes = {
  jsx: PropTypes.string,
  html: PropTypes.string,
}

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <Header.H1 dividing>Introduction</Header.H1>

        <Header.H2>jQuery Free</Header.H2>

        <p>
          jQuery is a DOM manipulation library. It reads from and writes to the DOM.
        </p>

        <p>
          React uses a virtual DOM (JavaScript representation of the real DOM). React writes patch updates to the DOM,
          but never reads from it.
        </p>

        <p>
          It is not feasible to keep real DOM manipulations in sync with React's virtual DOM. Because of this, all
          jQuery functionality has been re-implemented in React. There is jQuery nor any direct DOM manipulation.
        </p>

        <Header.H2>Declarative Components</Header.H2>

        Use declarative APIs instead of HTML markup.

        <Comparison jsx={ColorButtonJSX} html={ColorButtonHTML} />

        <Comparison jsx={RatingJSX} html={RatingHTML} />

        <Header.H2>Smart Props</Header.H2>

        Smart props generate markup for you, avoiding cumbersome markup.

        <Header.H3><code>{'icon={...}'}</code></Header.H3>

        The <code>icon</code> prop is standard for many components.
        It can accept an icon <code>name</code>, or an {'<Icon />'} instance.

        <Comparison jsx={IconButtonJSX} html={IconButtonHTML} />

        <Comparison jsx={IconLabelJSX} html={IconLabelHTML} />

        <Comparison jsx={BreadcrumbJSX} html={BreadcrumbHTML} />

        <Header.H3><code>{'image={...}'}</code></Header.H3>

        <p>
          The <code>image</code> prop is standard for many components.
          It can accept an image <code>src</code>, or an {'<Image />'} instance.
        </p>

        <Comparison jsx={AccordionJSX} html={AccordionHTML} />

        <Comparison jsx={BreadcrumbJSX} html={BreadcrumbHTML} />

        <Header.H2>Sub Components</Header.H2>

        <Header.H2>Auto Controlled Components</Header.H2>
      </div>
    )
  }
}
