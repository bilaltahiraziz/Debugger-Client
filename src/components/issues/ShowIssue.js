import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showIssue, deleteIssue } from '../../api/issue'
import Button from 'react-bootstrap/Button'

class ShowIssue extends Component {
  constructor (props) {
    super(props)

    this.state = {
      issue: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showIssue(match.params.id, user)
      .then((res) => this.setState({ issue: res.data.issue }))
      .then(() => {
        msgAlert({
          heading: 'Successfully Showing Issue',
          message: 'WooHoo!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Show Issue Failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

handleDelete = () => {
  const { match, user, msgAlert, history } = this.props

  deleteIssue(match.params.id, user)
    .then(() => history.push('/issue/'))
    .then(() => {
      msgAlert({
        heading: 'Successfully Deleted Issue',
        message: 'WooHoo!',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Delete Issue Failed',
        message: 'Error message: ' + error.message,
        variant: 'danger'
      })
    })
}

render () {
  if (this.state.issue === null) {
    return 'Loading...'
  }

  const { title, description, date, owner } = this.state.issue
  const { user, match, history } = this.props
  return (
    <div className='box2'>
      <h4>{title}</h4>
      <p>Due By: {date}</p>
      <p>{description}</p>
      {user._id === owner && (
        <>
          <Button
            className='upBt'
            onClick={() => history.push(`/issue/${match.params.id}/update`)}>
Update
          </Button>
          <Button className='delBt' onClick={this.handleDelete}>
Delete
          </Button>
        </>
      )}
    </div>
  )
}
}

export default withRouter(ShowIssue)
