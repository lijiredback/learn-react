# learn-react
just some demos, foundation of the React.js

## demo01

+ React 组件化思想

## demo02

+ React 数据驱动思想
+ React 事件绑定
+ React JSX 中的列表循环
+ 注意点，不要直接操作 List，比如 ```this.state.list.splice(1, 1)```
+ JSX
    - 注释： { /* 注释 */ }
    - 类名： className
    - 解析HTML标签
    - ```dangerouslySetInnerHTML = { { __html: item } }```


## demo03

+ 组件拆分
+ 父子组件传值
+ 构造方法绑定 this
+ 单项数据流：父组件给子组件传值，子组件只能使用不能修改
+ React 可以与 jQuery 结合
+ 函数式编程
    - 代码清晰
    - 方便测试
+ 调试工具：React Devleoper Tools
+ 校验传递的值：PropTypes
    - 子组件中引入 ```PropTyps```：```import PropTyps from 'prop-types'```
    - 在类的外边进行校验 ```类.propTypes = { item: PropTypes.string }```
    - 默认值 ```类.defaultProps = { num: 22 }```
+ ref 属性：语义化更好（input 中）
+ setState 是异步的（虚拟DOM）


## demo04

+ React 生命周期
    - Initialization
    - Mounting
        - componentWillMount（即将废除）
        - render
        - componentDidMount
    - Updation
        - props
            - componentWillReceiveProps（即将废除）
            - shouldComponentUpdate
            - componentWillUpdate（即将废除）
            - render
            - componentDidUpdate
        - states
            - shouldComponentUpdate
            - componentWillUpdate
            - render
            - componentDidUpdate
    - Unmounting

+ 用 ```shouldComponentUpdate(nextProps, nextState)``` 优化 ```ServiceItem.js``` 的性能

## demo05

+ React 中的动画: transition
+ 关键帧动画：keyframes
+ 动画库：react-transition-group（官方维护）
    - Transition
    - CSSTransition
    - TransitionGroup
