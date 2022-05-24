import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createIssue } from '../../api/issue'

class IssueCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }

    handleChange = (event) =>
      this.setState({
        [event.target.name]: event.target.value
      })

    handleSubmit = (event) => {
      event.preventDefault()

      const { user, msgAlert, history } = this.props

      createIssue(this.state, user)
        .then(() => history.push('/issue/'))
        .then(() => {
          msgAlert({
            heading: 'Issue created',
            message: 'Now you\'ll for sure remember this!',
            variant: 'success'
          })
        })
        .catch((error) => {
          msgAlert({
            heading: 'Issue creation failed',
            message: 'Issue error: ' + error.message,
            variant: 'danger'
          })
        })
    }

    render () {
      return (
        <div className='box'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type='text'
                name='title'
                value={this.state.title}
                placeholder='Issue Title'
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
                placeholder='Task Description'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='date'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                type='text'
                name='date'
                value={this.state.date}
                placeholder='Due Date: mm/dd/yyyy'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button className='createBt' type='submit'>
            Submit
            </Button>
          </Form>
        </div>
      )
    }
}

export default withRouter(TaskCreate)
