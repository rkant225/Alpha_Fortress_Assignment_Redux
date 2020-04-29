import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/Actions';
import './TotalMembers.css';

class TotalMembers extends React.Component {
    render(){
        return (
        <React.Fragment>
            {this.renderCountryAndMembersList()}
        </React.Fragment>
        );
    } 


    ////////////////////////////// Helper methods  ////////////////////////////////////////

    handleCheckBoxClick =(e,data,member)=>{
        if(e.target.checked){
            this.props.addMember({id : data.id, country : data.country, member : member })
        }
        else{
            this.props.removeMember({id : data.id, country : data.country, member : member })
        }
    }

    getCheckedStatus =(data,currentMember)=>{
        let selectedMembers = this.props.selectedMembers;
        let isChecked = false;
        
        if(selectedMembers.length > 0){
            let selectedIndex = selectedMembers.findIndex((member)=> member.id === data.id);
            if(selectedIndex >= 0){               
                isChecked = selectedMembers[selectedIndex].members.includes(currentMember)
            }
        }
        return isChecked;
    }

    renderCountryAndMembersList = () =>{
        return this.props.totalMembers && this.props.totalMembers.map((data)=>{
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
            <ul className="total-members">
                {data.members.map((member,ind) =>{
                    return <li key={data.id + ind}> <input checked={this.getCheckedStatus(data,member)} type="checkbox" onChange={(e)=>this.handleCheckBoxClick(e,data,member)} className="check-box"></input> {member}</li>
                })}
            </ul>
        )
    }    
}

const mapStateToProps =(state)=>{
    return{
      totalMembers : state.MembersReducer.totalMembers,
      selectedMembers : state.MembersReducer.selectedMembers
    }
  }

export default connect(mapStateToProps, {addMember : Actions.addMember, removeMember : Actions.removeMember})(TotalMembers);
