/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import IssueCreate from './components/issues/IssueCreate'
import IssueIndex from './components/issues/IssueIndex'
import IssueUpdate from './components/issues/IssueUpdate'
import ShowIssue from './components/issues/ShowIssue'

import Bruh from './assets/tyga.mp3'
import Snoop from './assets/Snoooop.mp3'
import Tyler from './assets/tyler.mp3'
import WHTKD from './assets/WHTKD.mp3'
import MW2 from './assets/mw2.mp3'
import Moe from './assets/moe laugh.mp3'
import Chili from './assets/chili.mp3'
import Chupapi from './assets/chupapi.mp3'
import Island from './assets/Island.mp3'
import { Howl, Howler } from 'howler'

const audioClips = [
  { sound: Bruh, label: 'Tyga' },
  { sound: Snoop, label: 'Snoop' },
  { sound: Tyler, label: 'Tyler' },
  { sound: MW2, label: 'MW2' },
  { sound: Moe, label: 'Moe Laugh' },
  { sound: Chili, label: 'Chili' },
  { sound: Chupapi, label: 'Chupapi' },
  { sound: Island, label: 'Island' },
  { sound: WHTKD, label: 'WHTKD' }
]

class App extends Component {
SoundPlay = (src) => {
  const sound = new Howl({
    src
  })
  sound.play()
}

constructor (props) {
  super(props)
  this.state = {
    user: null,
    msgAlerts: []
  }
}

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

RenderButtonAndSound = () => {
  return audioClips.map((soundObj, index) => {
    return (
      <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
        {soundObj.label}
      </button>
    )
  })
}

render () {
  Howler.volume(1.0)
  const { msgAlerts, user } = this.state

  return (
    <Fragment>
	      <Header user={user} />
	      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={this.deleteAlert}
        />
      ))}
	      <main className='container'>
	        <Route
          path='/sign-up'
          render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )}
        />
        <Route
          path='/sign-in'
          render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/sign-out'
          render={() => (
            <SignOut
              msgAlert={this.msgAlert}
              clearUser={this.clearUser}
              user={user}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/change-password'
          render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/issue/'
          render={() => (
            <IssueCreate msgAlert={this.msgAlert} user={user} />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/issue/'
          render={() => (
            <IssueIndex msgAlert={this.msgAlert} user={user} />
          )}
        />
        <AuthenticatedRoute
          user={user}
          exact path='/issue/:id/update'
          render={() => (
            <IssueUpdate msgAlert={this.msgAlert} user={user}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          exact path='/issue/:id'
          render={() => (
            <ShowIssue msgAlert={this.msgAlert} user={user} />
          )}
        />
        {this.RenderButtonAndSound()}
      </main>
    </Fragment>
  )
}
}

export default App
