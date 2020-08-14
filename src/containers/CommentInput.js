import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

function CommentInputContainer (props) {
  let [username, setUsername] = useState('')
  let _loadUsername = () => {
    let name = localStorage.getItem('username')
    if (name) {
      setUsername(name)
    }
  }
  let onUserNameInputBlur = (val) => {
    if (val) {
      localStorage.setItem('username', val)
    }
  }
  let onSubmit = (val) => {
    if (!val) return
    if (!val.username) return alert('请输入用户名')
    if (!val.content) return alert('请输入评论内容')
    const { comments } = props
    const newComments = [...comments, val]
    localStorage.setItem('commentList', JSON.stringify(newComments))
    props.addComment(val)
  }
  useEffect(() => {
    _loadUsername()
  }, [username])
  return (
    <CommentInput
    onUserNameInputBlur={onUserNameInputBlur}
    username={username}
    onSubmit={onSubmit}
    />
  )
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (val) => {
      dispatch(addComment(val))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer)