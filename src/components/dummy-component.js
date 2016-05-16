// Import React.
import React from 'react'

// Create the elements.
const title = React.createElement('h1', { key: 'title' }, 'Hi from DummyComponent.')
const content = React.createElement('em', { key: 'content' }, 'Now let\'s play with React!')
const article = React.createElement('article', null, [title, content])

export class DummyComponent extends React.Component {
  render () { return article }
}
