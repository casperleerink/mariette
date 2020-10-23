import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    render() {
        const { isExpanded } = this.state;
        return (
            <div>
                <div className="menu-item">
                    <button onClick={this.handleToggle} style={{cursor: "pointer", display: "inline"}} >
                        <FontAwesomeIcon icon= { isExpanded ? faCaretDown : faCaretRight } size="xs"/>
                        {` `}
                        {this.props.buttonContent}
                    </button>
                </div>
                <div className={`dropdown-menu-items ${isExpanded ? "expanded" : ""}`}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Dropdown;