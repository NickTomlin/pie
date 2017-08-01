import { render, h, Component } from 'preact'

export class Pizza {
  render () {
    return (<svg>
      <rect width="100%" height="100%" fill="red" />
      <circle cx="150" cy="100" r="80" fill="green" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Hello dawg</text>
    </svg>)
  }
}
