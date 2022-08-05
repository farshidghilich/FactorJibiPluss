import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap'

class DropdownMenu extends Component {
    render() {
        const { varient, text } = this.props
        return (
            <Dropdown>
                <Dropdown.Toggle className="btn-outline-secondary dropdown-toggle" variant={varient} id="dropdown-basic">
                    {text}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropdownMenu;
