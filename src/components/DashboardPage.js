import React from 'react';
import CreateLists from './CreateLists';
import DisplayLists from './DisplayLists';



export class DashboardPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
 
      <div>
          <br/>
          <CreateLists></CreateLists>
          <br />
          <DisplayLists></DisplayLists>
      </div>
    );
  };
}; 

export default DashboardPage;

