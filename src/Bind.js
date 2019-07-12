import React, { Component } from 'react'
import BindItem from './BindItem'
import axios from 'axios'
import "./css/boss.css"
import { CSSTransition,TransitionGroup } from 'react-transition-group';

class Bind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'test value',
            list: []
        }
    }
    // // 生命周期可以理解为在某一时刻可以固定执行的的函数
    // componentWillMount() {
    //     console.log("componentWillMount-----组件要挂载到页面的时候")
    // }
    // componentDidMount() {
    //     console.log("componentDidMount-----组件挂载完成的时刻")
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate-----在组件更新之前执行')
    //     //需要返回值  返回false 不会更新组件
    //     return true;
    // }
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate-----shouldComponentUpdate返回true")  
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("componentDidUpdate-----组件更新结束")
    // }

    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5d26b4189a15e66a218c3287/reactdemo01/test')
            .then(
                (res)=>{
                    console.log("axios 获取数据成功")
                    this.setState({
                        list : res.data.data
                    })
                }
            ).catch(
                (error)=>{
                    console.log("获取失败")
                }
            )
    }
    

    render() {
        //console.log("render-----组件挂载中")
        return (
            <div>
                <div>
                    <input type='text' value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>Add</button>
                </div>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={1000}
                                        classNames='boss'
                                        unmountOnExit
                                        appear={true}
                                        key={index}
                                    >
                                        <BindItem 
                                            key={index} 
                                            content={item} 
                                            index={index} 
                                            deleteItem = {this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
            </div>
        )
    }
    //双向绑定函数
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        }, () => {
            //console.log(this.state.inputValue)
        })
    }
    //增加列表
    addList(e) {
        this.setState({
            //我一开始使用push  报错结果发现push返回值是数组新的长度
            //list:this.state.list.concat(this.state.inputValue)
            //es6 写法
            inputValue: '',
            list: [...this.state.list, this.state.inputValue]
        }, () => {
            console.log(this.state.list)
        })

    }
    //删除列表项
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Bind