import React from 'react';
import {connect} from 'react-redux';
import {updateDescription} from '../actions/card';

export class CardDescription extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            description: '',
            id: this.props.id,
            error: '',
            displayComponent: true
        };
    };

    

    onDescriptionChange = (e)=>{
        e.preventDefault();
        const description = e.target.value;
        this.setState(()=>({
            description
        }));
    };

    

    updateDescription = (e)=>{
        e.preventDefault();
        (this.state.description !== '') ?
        (
            this.props.updateDescription({
                cardId:this.state.id,
                cardDescription: this.state.description
            }),
            this.setState(()=>({
                description: '',
                error: '',
                displayComponent:false
            }))
        )
        :
        (this.setState(()=>({
            error: 'Please provide description'
        })));
    };



    render(){
        
       
        return(
                <div className="CardDescription">
                    {   (this.state.displayComponent) &&
                        (<form onSubmit={this.updateDescription} className="form">
                            <input type="text" placeholder="Update description here" 
                                value={this.state.description} 
                                onChange={this.onDescriptionChange} />
                            <button>Update Description</button>
                        </form>)
                    }    
                    {    
                    
                    (this.state.error) && <p> Please enter description</p>

                    }


                </div>
            ); 
    };


};


const mapDispatchToProps = (dispatch)=>({
    updateDescription: (({cardId,cardDescription})=>dispatch(updateDescription({cardId,cardDescription})))
});

export default connect(undefined,mapDispatchToProps)(CardDescription);
