import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/Actions';
import './SelectedMembers.css'

class SelectedMembers extends React.Component {

  render(){
    return (
      <React.Fragment>
          {this.renderCountryAndMembersList()}
      </React.Fragment>
    );
  }
  
  ////////////////////////////// Helper methods  ////////////////////////////////////////

  handleButtonClick =(data,member)=>{
    this.props.removeMember({id : data.id, country : data.country, member : member })
  }

  renderCountryAndMembersList = () =>{
    return this.props.selectedMembers && this.props.selectedMembers.map((data)=>{
        return(
            <React.Fragment key={data.id}>
                <h3>{data.country}</h3>
                {this.renderMemberList(data)}
            </React.Fragment>                
        )
    })
  }

  renderMemberList =(data)=>{
      return(
          <ul className="selected-member">
              {data.members.map((member,ind) =>{
                  return <li key={data.id + ind}>{member} <a onClick={() => this.handleButtonClick(data, member)}>x</a> </li>
              })}
          </ul>
      )
  }

  

}

const mapStateToProps =(state)=>{
    return{
      selectedMembers : state.MembersReducer.selectedMembers
    }
  }

export default connect(mapStateToProps,{removeMember : Actions.removeMember})(SelectedMembers);
