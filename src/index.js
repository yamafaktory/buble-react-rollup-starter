// Import React, ReactDOM and the DummyComponent.
import React from 'react'
import ReactDOM from 'react-dom'
import { DummyComponent } from './components/dummy-component.jsx'

// Define the root element.
const root = document.querySelector('main')

// Append the DummyComponent instance to the root element.
ReactDOM.render(<DummyComponent />, root)
