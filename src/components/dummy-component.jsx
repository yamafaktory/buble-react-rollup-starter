// Import React.
import React from 'react'

export class DummyComponent extends React.Component {
  render () {
    return (
      <article key='article'>
        <h1 key='title'>Hi from DummyComponent.</h1>
        <em key='content'>Now let's play with React &amp; JSX!</em>
      </article>
    )
  }
}
