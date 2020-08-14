import React, { useState, useEffect, useRef } from 'react'

/* class CommentInput extends Component{
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handleContentChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = () => {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({ content: '' })
  }
  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username}
            onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div> 
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content}
            onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
} */
function CommentInput (props) {
  let [username, setUsername] = useState(props.username)
  let [content, setContent] = useState('')
  let textarea = useRef(null)
  useEffect(() => {
    setUsername(props.username)
  }, [props.username])
  let handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  let handleContentChange = (e) => {
    setContent(e.target.value)
  }
  let handleSubmit = () => {
    if (props.onSubmit) {
      props.onSubmit({
        username,
        content,
        createdTime: +new Date()
      })
    }
    setContent('')
  }
  const handleUsernameBlur = (e) => {
    if (props.onUserNameInputBlur) {
      props.onUserNameInputBlur(e.target.value)
    }
  }
  /* const _saveUsername = (val) => {
    localStorage.setItem('username', val)
  } */
  /* const loadUsername = () => {
    const name = localStorage.getItem('username')
    if (name) {
      setUsername(name)
    }
  }
  useEffect(() => {
    loadUsername()
  }, []) */
  useEffect(() => {
    textarea.current.focus()
  }, [])
  return (
    <div className='comment-input'>
      <div className='comment-field'>
        <span className='comment-field-name'>用户名：</span>
        <div className='comment-field-input'>
          <input value={username}
          onBlur={handleUsernameBlur}
          onChange={handleUsernameChange}
          />
        </div>
      </div> 
      <div className='comment-field'>
        <span className='comment-field-name'>评论内容：</span>
        <div className='comment-field-input'>
          <textarea value={content}
          onChange={handleContentChange}
          ref={textarea}
          />
        </div>
      </div>
      <div className='comment-field-button'>
        <button onClick={handleSubmit}>
          发布
        </button>
      </div>
    </div>
  )
}
export default CommentInput