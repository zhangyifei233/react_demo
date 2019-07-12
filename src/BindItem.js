import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BindItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    // // 组件第一次存在于DOM中，函数是不会被执行的
    // // 如果已经存在于DOM中，函数才会被执行
    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps-----子组件")
    // }
    // //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    // componentWillUnmount() {
    //     console.log("组件被删除之前执行")        
    // }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
    }
    
    shouldComponentUpdate(){
        return false;
    }
    render(){ 
        console.log('child-render')
        return ( 
            <li onClick={this.handleClick}>{this.props.content}</li>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
 
BindItem.prototypes={
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

export default BindItem;