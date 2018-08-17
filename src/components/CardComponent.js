import React from 'react';
import {connect} from 'react-redux';
import {deleteCard} from '../actions/card';
import CardDescription from './CardDescription';


export class CardComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            editCardId: ''
        };

    };

   

    onDragStart = (e)=>{
        // e.preventDefault();
        // console.log("Setting card Id ", cardInfo);
        e.dataTransfer.dropEffect = "move";
        // console.log("e value " , e);
        // console.log("e.target.id " , e.target.id);
        e.dataTransfer.setData("text/plain",e.target.id);
        // console.log("e.dataTransfer.getData ", e.dataTransfer.getData("text/plain"));

    };

    deleteCard =(e)=>{
        // e.preventDefault();
        console.log("DELETING card ", e.target.value);
        this.props.deleteCard({cardId: e.target.value});
    };  

    editCard = (e)=>{
        e.preventDefault();
        const editCardId = e.target.value;
        console.log("editCardId in editCard " , editCardId);
        this.setState(()=>({
            editCardId :editCardId
        }));
    };

    render(){
        
        const cardDetail = this.props;
        return (
          <div className="card-componenet" className="form">
            <div draggable="true"
                 key={cardDetail.id}
                 id={cardDetail.id}
                 onDragStart={this.onDragStart}
                 >
                {cardDetail.cardName.cardInfo}
            </div>

            <button onClick={this.deleteCard} value={cardDetail.id}>Delete Card </button>
            <button onClick={this.editCard} value={cardDetail.id}>Edit Card </button>

            {   
                
                (this.state.editCardId ) && (<CardDescription id={cardDetail.id}></CardDescription>)
                
            }

         </div>   
        );
    };
};

const mapDispatchToProps = (dispatch)=>({
    deleteCard: ((cardId)=>dispatch(deleteCard(cardId)))
});



export default connect(undefined,mapDispatchToProps)(CardComponent);
