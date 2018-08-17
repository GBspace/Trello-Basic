import React from 'react';
import {connect} from 'react-redux';
import ListComponent from './ListComponent';


export class DisplayLists extends React.Component{
    constructor(props){
        super(props);
    };
    
    render(){
        let listDetailsValues = Object.values(this.props.list.byId);
        // console.log("listDetailsValues " , listDetailsValues);
        

        return(
            <div className="list-box">
                {
                    listDetailsValues.map((elem)=>{
                        return <ListComponent key={elem.listId} listName={elem.listName} id={elem.listId}> </ListComponent>
                    })
                }
            </div>
            );
           
    };
};

const mapStateToProps = (state)=>({
    list: state.list
});

export default connect(mapStateToProps)(DisplayLists);

