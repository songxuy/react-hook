import React from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
/* import wrapWithLoadData from './HighComponents' */

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
  return (
    <div className="wrap">
      <CommentInput/>
      <CommentList/>
    </div>
  )
}

/* CommentApp = wrapWithLoadData(CommentApp, 'commentList') */
export default CommentApp