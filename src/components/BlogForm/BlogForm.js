import React, { Component } from 'react'
import "./Form.scss"
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.blog? props.blog.title:"",  //propstan gelen title boş değilse
            description: props.blog? props.blog.description:"",
            error: ''
        }
    }


    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.description) {
            alertify.error('Fill in the blanks!'); 
        }
        else {
            this.setState({ error: '' })
            alertify.success('Complited..!'); 
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                dateAdded: Date.now(),
            })
        }
    }
    render() {
        return (
            <div id='form'>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            placeholder="Title..."
                            value={this.state.title}
                            onChange={this.onTitleChange}
                            maxlength="54"
                            size="54"
                        />
                    </div>
                    <div>
                        <textarea placeholder='Description...'
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div>
                        <button type='submit'>SAVE CHANGE</button>
                    </div>
                </form>
            </div>
        )
    }
}
