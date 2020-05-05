import React, { Component } from 'react'

class Container1 extends Component{   

     Arr1 = [
        {id:1,text: 'text1',number:1},
        {id:2,text: 'text2',number:1},
        {id:3,text: 'text3',number:1},
        {id:4,text: 'text4',number:1},
        {id:5,text: 'text5',number:1},
        {id:6,text: 'text6',number:1}
    ]
    
    RenderListItem = (props) => (
    <div>
        { props.item.text }  [ { props.item.number } ]
    </div>
    )

    render() {
    return (
        <div>
        {this.Arr1.map((option,index) => ( <this.RenderListItem key={option.id}  item={option} />)) } 
        </div>
        )}
}

export default Container1;