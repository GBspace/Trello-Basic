import React from 'react';
import {connect} from 'react-redux';
import {removeCardsFromList} from '../actions/list';
import {updateCard} from '../actions/card';

import AddCard from './AddCard';


export class ListComponent extends React.Component{
    constructor(props){
        super(props);

        
    }

    deleteList = (e)=>{
        this.props.removeCardsFromList({listId: this.props.id});
    };

    onDragOver = (e)=>{
        e.preventDefault();
        
    }; 
    
    onDropHandler = (e,listId)=>{
        e.preventDefault();
        const cardId = e.dataTransfer.getData("text/plain");
        const obj = {
            cardId,
            listId
        };
        this.props.updateCard(obj);
        
    };

    onDragEnter = (e)=>{
        e.preventDefault();
    }; 

    render(){
   
        return(
            <div className="list-body">
                <div className="list-item" 
                    onDragOver = {(e)=>{this.onDragOver(e)}}
                    onDrop={(e)=>{this.onDropHandler(e,this.props.id)}}
                    onDragEnter={(e)=>{this.onDragEnter(e)}}>
                
                    <div className="list-header"> { this.props.listName} </div> 
                    <br/>
                    <AddCard listId={this.props.id}></AddCard>
                    <br/>
                    <button onClick={this.deleteList}>Delete</button>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch)=>({
    removeCardsFromList: ((listId)=>dispatch(removeCardsFromList(listId))),
    updateCard: (({cardId,listId})=>dispatch(updateCard({cardId,listId})))
});

const mapStateToProps = (state)=>({
    list: state.list.byId
});


export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);