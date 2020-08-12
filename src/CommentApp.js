import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'

/* class CommentApp extends Component{
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  handleSubmitComment = (val) => {
    if (!val) return
    if (!val.username) return alert('请输入用户名')
    if (!val.content) return alert('请输入评论内容')
    this.setState({
      comments: this.state.comments.concat(val)
    })
  }
  render () {
    return (
      <div className="wrap">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
} */
function CommentApp () {
  const [comments, setComment] = useState([])
  let handleSubmitComment = (val) => {
    if (!val) return
    if (!val.username) return alert('请输入用户名')
    if (!val.content) return alert('请输入评论内容')
    console.log(val)
    setComment(comments.concat(val))
  }
  const handleDeleteComment = (val) => {
    let arr = JSON.parse(JSON.stringify(comments))
    arr.splice(val, 1)
    setComment(arr)
  }
  const loadComments = () => {
    const c = localStorage.getItem('commentList')
    if (c) {
      setComment(JSON.parse(c))
    }
  }
  useEffect(() => {
    loadComments()
  }, [])
  useEffect(() => {
    return localStorage.setItem('commentList', JSON.stringify(comments))
  })
  return (
    <div className="wrap">
      <CommentInput onSubmit={handleSubmitComment}/>
      <CommentList comments={comments} handleDeleteComment={handleDeleteComment}/>
    </div>
  )
}

export default CommentApp