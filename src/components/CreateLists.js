import React from 'react';
import {connect} from 'react-redux';
import {addListName} from '../actions/list';

export class CreateLists extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            listName : ''
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
        console.log("this.state.list Name ", this.state.listName);
        
        this.props.addListName({listName: this.state.listName})
        this.setState(()=>({
            listName : ''
        }));
        
    };


    render(){
        return(
            <div className="add-list">
                <form onSubmit = {this.onCreateList} className="form">
                    <input className="textInput" type="text" value={this.state.listName} onChange={this.onListNameChange}/>
                    <button> Create List </button>
                </form>
            </div>
        );
    };


};

const mapDispatchToProps = (dispatch)=>({
    addListName : (listName)=>{dispatch(addListName(listName))}
});

export default connect(undefined,mapDispatchToProps)(CreateLists);