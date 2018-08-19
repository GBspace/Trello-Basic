import React from 'react';
import {connect} from 'react-redux';
import {deleteCard} from '../actions/card';
import CardDescription from './CardDescription';


export class CardComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            editCardId: '',
            display: false
        };

    };

   

    onDragStart = (e)=>{
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain",e.target.id);
    };

    deleteCard =(e)=>{
        this.props.deleteCard({cardId: e.target.value});
    };  

    editCard = (e)=>{
        e.preventDefault();
        this.setState(()=>({
            display: !this.state.display
        }));
        
        
    };

    render(){
        
        const cardDetail = this.props;
        return (
            <div>     
                <div className="card-component" className="form">
                    <div draggable="true"
                        key={cardDetail.id}
                        id={cardDetail.id}
                        onDragStart={this.onDragStart}
                        >
                        {cardDetail.cardName.cardInfo}
                    </div>

                    <button onClick={this.deleteCard} value={cardDetail.id}>Delete Card </button>
                    <button onClick={this.editCard} value={cardDetail.id}>Edit Card </button>
                    </div>
                    <div>
                    {   
                        
                        (this.state.display) && 
                        (<CardDescription id={cardDetail.id}></CardDescription>)
                    }

                </div>   
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch)=>({
    deleteCard: ((cardId)=>dispatch(deleteCard(cardId)))
});



export default connect(undefined,mapDispatchToProps)(CardComponent);
