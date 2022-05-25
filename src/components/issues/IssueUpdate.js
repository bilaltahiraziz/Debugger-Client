import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { showIssue, updateIssue } from '../../api/issue'

class UpdateIssue extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      date: ''
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props
    showIssue(match.params.id, user)
      .then((res) =>
        this.setState({
          title: res.data.issue.title,
          description: res.data.issue.description,
          date: res.data.issue.date
        })
      )
      .then(() => {
        msgAlert({
          heading: 'Preloaded the update',
          message: 'Worked',
          variant: 'success'
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Preloading the update failed',
          message: 'Is not preloading it',
          variant: 'danger'
        })
      })
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, match, history } = this.props

  updateIssue(match.params.id, this.state, user)
    .then(() => history.push(`/issue/${match.params.id}`))

    .then(() => {
      msgAlert({
        heading: 'Issue updated',
        message: 'Now it\'s different!',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Issue update failed',
        message: 'Issue error: ' + error.message,
        variant: 'danger'
      })
    })
    .then(() => history.push('/issue' + match.params.id))
}

render () {
  return (
    <div className='box1'>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type='text'
            name='title'
            value={this.state.title}
            placeholder='Update Issue Title'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type='text'
            name='description'
            value={this.state.description}
            placeholder='Update Issue Description'
            onChange={this.handleChange}
          />
        </Form.Group>
        {/* <Form.Group controlId='date'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type='text'
            name='date'
            value={this.state.date}
            placeholder='Due Date: mm/dd/yyyy'
            onChange={this.handleChange}
          />
        </Form.Group> */}
        <Button className='submitBt' type='submit'>
        Submit
        </Button>
      </Form>
    </div>
  )
}
}

export default withRouter(UpdateIssue)
