import React from 'react';
import {connect} from 'react-redux';
import {addListName} from '../actions/list';

export class CreateLists extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            listName : '',
            error: ''
        };
    };

    onListNameChange = (e)=>{
        e.preventDefault();
        const listName = e.target.value;
        this.setState(()=>({
            listName
        }));
       
    };

    onCreateList = (e)=>{
        e.preventDefault();
        (this.state.listName === '') ? 
        this.setState(()=>({
            error: 'Please enter a listname'
        })): 
        (
            this.props.addListName({listName: this.state.listName}),
            this.setState(()=>({
                listName : '',
                error: ''
            }))
        )
    };


    render(){
        return(
            
                <div className="add-list-container">
                    <div className="add-list">
                        <form onSubmit = {this.onCreateList} className="form">
                            <input className="textInput" type="text" value={this.state.listName} onChange={this.onListNameChange}/>
                            <button> Create List </button>
                        </form>
                    </div>
                    <div>
                        {
                            (this.state.error) && <span> {this.state.error}</span>
                        }
                    </div>
                </div>
            
        );
    };


};

const mapDispatchToProps = (dispatch)=>({
    addListName : (listName)=>{dispatch(addListName(listName))}
});

export default connect(undefined,mapDispatchToProps)(CreateLists);