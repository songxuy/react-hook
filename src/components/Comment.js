import React, {useState, useEffect} from 'react'

/* class Comment extends Component{
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
} */
function Comment (props) {
  let [time, setTime] = useState('')
  const _updateTimeString = () => {
    const comment = props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    setTime(getTIme(duration))
  }
  const getTIme = (time) => {
    if (time > 3600 * 24) {
      return `${Math.round(time / (3600 * 24))} 天前`
    } else if (time > 3600) {
      return `${Math.round(time / 3600)} 小时前`
    } else if (time > 60) {
      return `${Math.round(time / 60)} 分钟前`
    } else {
      return `${Math.round(Math.max(time, 1))} 秒前`
    }
  }
  const handleDelete = () => {
    if (props.handleDeleteComment) {
      props.handleDeleteComment(props.index)
    }
  }
  useEffect(() => {
    /* let timer */
    _updateTimeString()
    /* timer = setInterval(() => {
      _updateTimeString()
    }, 5000)
    return timer = null */
    const id = setInterval(() => {
        _updateTimeString()
    }, 5000); 
    return () => clearInterval(id);
  })
  const _getProcessedContent = (content) => {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  return (
    <div className='comment'>
      <div className='comment-user'>
        <span>{props.comment.username} </span>：
      </div>
      <p dangerouslySetInnerHTML={{
        __html: _getProcessedContent(props.comment.content)
      }}></p>
      <span className='comment-createdtime'>
          {time}
      </span>
      <span className='comment-delete' onClick={handleDelete}>
          删除
      </span>
    </div>
  )
}

export default Comment