import {Component} from "react";
import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";

class BusinessCardParent extends Component {
	constructor(){
		super();

        this.state = {
            editMode: false,
            name: "Example name",
            email: "example@email.com"
        }
	}

    render(){
        if (this.state.editMode) {
            return(
                <BusinessCardForm />
            )
        }else {
            return (
                <div>
                    <BusinessCardDisplay 
                    email={this.state.email}
                    name={this.state.name}/>
                </div>
            )
        }

    }
}
export default BusinessCardParent;

