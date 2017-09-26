import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class InstaForm extends React.Component {
  state = { title: '', file: ''}

  onDrop = (files) => {
    this.setState({ file: files[0] })
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    const { title, file } = this.state;
    data.append('title', title);
    data.append('img', file);
    axios.post('/api/insta_posts', data)
      .then( res => {
        this.props.addPost(res.data)
        this.setState({ title: '', file: ''})
      })
  }

  render() {
    return (
      <div>
        <Header as="h3">What's on your mind?</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            required
            label="Say Something"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Dropzone
            style={
              {
                marginBottom: '10px',
                border: 'dashed 1px black',
                with: '100%',
                height: '50px',
                textAlign: 'center'
              }
            }
            onDrop={this.onDrop}
            multiple={false}
          >
            Want to add an image?
          </Dropzone>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default InstaForm;
