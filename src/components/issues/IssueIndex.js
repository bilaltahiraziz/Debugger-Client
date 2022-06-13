import React, { Component } from 'react'
import { indexIssue, updateIssue } from '../../api/issue'
import Card from './Card'
import CheckedCard from './CheckedCard'

class IssueIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      issue: [],
      inputText: '',
      showAll: true,
      showUnchecked: false,
      showChecked: false
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexIssue(user)
      .then((res) => this.setState({ issue: res.data.issue }))
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Showing all Issues',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

    handleClick = (event) => {
      const issue = [...this.state.issue]
      const index = issue.findIndex((issue) => {
        return issue._id === event.target.name
      })
      issue[index].checked = !issue[index].checked
      updateIssue(event.target.name, issue[index], this.props.user)
        .then(() => this.setState({ issue: issue }))
    }

      inputHandler = (event) => {
        const lowerCase = event.target.value.toLowerCase()
        this.setState({ inputText: lowerCase })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ showAll: false, showUnchecked: false, showChecked: false })
        this.setState({ [event.target.value]: true })
      }

      render () {
        const { issue, showAll, showChecked } = this.state

        if (issue === null) {
          return 'Loading...'
        }

        let issueJSX
        if (issue.length === 0) {
          issueJSX = 'No issues on your to do list. Try adding one.'
        } else if (showAll) {
          issueJSX = issue
            .filter(
              (issue) =>
                issue.title.toLowerCase().indexOf(this.state.inputText) > -1 ||
              this.state.inputText === ''
            ).map((issue) => {
              if (issue.checked) {
                return (
                  <CheckedCard
                    _id={issue._id}
                    clicked={issue.clicked}
                    checked={issue.checked}
                    handleClick={this.handleClick}
                    title={issue.title}
                    description={issue.description}
                    date={issue.date}
                  />

                )
              } else {
                return (
                  <Card
                    _id={issue._id}
                    clicked={issue.clicked}
                    checked={issue.checked}
                    handleClick={this.handleClick}
                    title={issue.title}
                    description={issue.description}
                    date={issue.date}
                  />
                )
              }
            })
        } else if (showChecked) {
          issueJSX = issue.filter((issue) => issue.title.toLowerCase().indexOf(this.state.inputText) > -1 || this.state.inputText === '').map((issue) => {
            if (issue.checked) {
              return (
                <CheckedCard
                  _id={issue._id}
                  clicked={issue.clicked}
                  checked={issue.checked}
                  handleClick={this.handleClick}
                  title={issue.title}
                  description={issue.description}
                  date={issue.date}
                />
              )
            } else {
              return ''
            }
          })
        } else {
          issueJSX = issue
            .filter(
              (issue) =>
                issue.title.toLowerCase().indexOf(this.state.inputText) > -1 || this.state.inputText === ''
            )
            .map((issue) => {
              if (!issue.checked) {
                return (
                  <Card
                    _id={issue._id}
                    clicked={issue.clicked}
                    checked={issue.checked}
                    handleClick={this.handleClick}
                    title={issue.title}
                    description={issue.description}
                    date={issue.date}
                  />
                )
              } else {
                return ''
              }
            })
        }

        return (
          <div className='issueList' >
            <input type='text' onChange={this.inputHandler} />
            <form onSubmit={this.handleSubmit}>
              <select onChange={ event => this.handleSubmit(event) }>
                <option value='showAll'>ALL BUGS</option>
                <option value='showChecked'>FINISHED BUGS</option>
                <option value='showUnchecked'>UNFINISHED BUGS</option>
              </select>
            </form>
            <h3>LIST OF BUGS:</h3>
            <ul className='d-flex flex-wrap' >{issueJSX}</ul>
          </div>
        )
      }
}

export default IssueIndex
