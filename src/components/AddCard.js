import React from 'react';
import {connect} from 'react-redux';
import {addCard} from '../actions/card';
import CardComponent  from './CardComponent';
import cardSelector from '../selectors/SelectCard';


export class AddCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            card: '',
            error:''
        };
    };

    onCardChange = (e)=>{
        e.preventDefault();
        const card = e.target.value;
        this.setState(()=>({
            card
        }));
       
    };

    onSubmit = (e)=>{
        e.preventDefault();
        (this.state.card !== '') ?
        (this.props.addCard({cardInfo: this.state.card, listId: this.props.listId}),
        this.setState(()=>({
            card: '',
            error: ''
        }))) : (
            this.setState(()=>({
                error: 'Please enter a card name'
            }))
        );
    };

    render(){

        return(
            <div className="add-list-container">
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" value={this.state.card} onChange={this.onCardChange}/> 
                    <button> Add Card </button>
                </form>
                {
                    (this.state.error) && <div>{this.state.error}</div>
                }
                {
                    Object.entries(this.props.selectCard).map((card)=>{
                        return <CardComponent key={card[0]} id={card[0]} cardName={card[1]}></CardComponent>
                    })
                }
                
            </div>
        );
    };

    
};

const mapDispatchToProps = (dispatch)=>({
    addCard: (cardInfoId)=>{dispatch(addCard(cardInfoId))}
});

const mapStateToProps = (state,props)=>({
    cardInfo: state.card.byId,
    selectCard: cardSelector(state.card.byId,props.listId)
});

export default connect(mapStateToProps,mapDispatchToProps)(AddCard);