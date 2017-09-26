import React from 'react';
import InstaForm from './InstaForm';
import Post from './Post'
import axios from 'axios'

class Home extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/insta_posts')
      .then( res => this.setState({ posts: res.data }))
  }

  addPost = (post) => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts] })
  }
  render() {
    const { user: { uid } } = this.props;
    const { posts } = this.state;
    const instaPosts = posts.map( p => <Post key={p.id} {...p} /> );
    return (
      <div>
        <InstaForm addPost={this.addPost} />
        {instaPosts}
      </div>
    )
  }
}

export default Home;
