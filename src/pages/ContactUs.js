import React from 'react';
import axios from 'axios';
import {
    Row, 
    Col, 
    Container,
    Button, 
    Form,
    Input
  } from 'reactstrap';

class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target})
    }

    onMsgChange(event) {
        this.setState({message: event.target.value})
    }

    submitEmail(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:'http://localhost:5000/mail', 
          data:  this.state
        }).then((response)=>{
            alert("Message Sent."); 
            this.resetForm()
        }).catch(error=>{
            alert("Message failed to send.")
        })
    }

    resetForm() {
        this.setState({name: '', email: '',subject:'', message: ''})
    }

    render() {
        return (
            <div className="my-5">
                <h2 id="h1-id">Contact Us</h2>
                <br />
                <div>
                    If you would like to assist with KeebWorld by helping us collect <br />
                    information on user preferences and desires feel free to reach out!
                    <br/><br />
                    Shoot us an email or reach out for an interview, we would love to talk!
                </div>
                <Container>
                    <Row className="justify-content-md-center">
                    <Col md="9">
                        <Form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
                                    method="POST">
                        <Input 
                            type="email" 
                            placeholder="Email:" 
                            className="my-2" 
                            aria-describedby="emailHelp"
                            required value={this.state.email} onChange=
                            {this.onEmailChange.bind(this)}
                        />
                        <Input 
                            type="text" 
                            placeholder="Subject:" 
                            className="my-2"
                            required value={this.state.subject}
                            onChange={this.onSubjectChange.bind(this)}
                        />
                        <Input 
                            type="textarea" 
                            placeholder="Message:" 
                            className="my-2"
                            required value={this.state.message}
                            onChange= {this.onMsgChange.bind(this)}
                        />
                        <div className="text-right">
                            <Button>Submit</Button>
                        </div>
                        </Form>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContactUs;