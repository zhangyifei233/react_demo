import React, { Component } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import "./css/boss.css"

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow : true    
        }
        this.ahh = this.ahh.bind(this)
    }
    render() { 
        return (
            <div>
                <div><button onClick={this.ahh}>ahhhh</button></div>
                <CSSTransition 
                    in = {this.state.isShow}
                    timeout = {1000}
                    classNames = "boss"
                    unmountOnExit
                >
                    <div>Boss</div>
                </CSSTransition>
            </div>
        );
    }
    ahh(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default Boss;