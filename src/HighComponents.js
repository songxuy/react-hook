import React, { Component, useState, useEffect } from 'react'

export default function wrapWithLoadData (WrappedComponent, name) {
  /* class LocalStorageActions extends Component {
    constructor () {
      super()
      this.state = { data: null }
    }

    componentDidMount () {
      let data = localStorage.getItem(name)
      console.log(data)
      try {
        // 尝试把它解析成 JSON 对象
        this.setState({ data: JSON.parse(data) })
      } catch (e) {
        // 如果出错了就当普通字符串读取
        this.setState({ data })
      }
    }

    saveData (data) {
      try {
        // 尝试把它解析成 JSON 字符串
        localStorage.setItem(name, JSON.stringify(data))
      } catch (e) {
        // 如果出错了就当普通字符串保存
        localStorage.setItem(name, `${data}`)
      }
    }

    render () {
      return (
        <WrappedComponent
          data={this.state.data}
          saveData={this.saveData.bind(this)}
          // 这里的意思是把其他的参数原封不动地传递给被包装的组件
          {...this.props} />
      )
    }
  } */
  function LocalStorageActions (props) {
    let [data, setData] = useState(null)
    useEffect(() => {
      let data = localStorage.getItem(name)
      console.log(name, data)
      try {
        // 尝试把它解析成 JSON 对象
        setData(JSON.parse(data))
      } catch (e) {
        // 如果出错了就当普通字符串读取
        setData(data)
      }
    }, [])
    const saveData = (data) => {
      console.log(data)
      try {
        // 尝试把它解析成 JSON 字符串
        localStorage.setItem(name, JSON.stringify(data))
      } catch (e) {
        // 如果出错了就当普通字符串保存
        localStorage.setItem(name, `${data}`)
      }
    }
    return (
      <WrappedComponent
        data={data}
        saveData={saveData}
        // 这里的意思是把其他的参数原封不动地传递给被包装的组件
        {...props} />
    )
  }
  return LocalStorageActions
}