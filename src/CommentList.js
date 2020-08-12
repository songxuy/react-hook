import React from 'react'
import Comment from './Comment'
/* class CommentList extends Component{
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>{this.props.comments.map((comment, i) => {
        return (
          <Comment comment={comment} key={comment.username + i}/>
        )
      })}</div>
    )
  }
} */
function CommentList (props) {
  const handleDeleteComment = (val) => {
    props.handleDeleteComment(val)
  }
  return (
    <div>{props.comments.map((comment, i) => {
      return (
        <Comment comment={comment} key={comment.username + i} handleDeleteComment={handleDeleteComment} index={i}/>
      )
    })}</div>
  )
}
export default CommentList