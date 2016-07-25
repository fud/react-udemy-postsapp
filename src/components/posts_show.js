import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {

  // Don't do this except for this exact use-case.
  // Go's through all the parents and finds the router
  // context.
  static contextTypes = {
    router: PropTypes.object
  };

  // just about to be displayed on the screen.
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  // needs bind in the handleSubmit to get the right 'this'
  onDeleteClick() {
    console.log("here");
    this.props.deletePost(this.props.params.id)
        .then(() => {
          // blog post has been created, navigate the user to the index
          // We navigate by calling this.context.router.push with the
          // new path to navigate to.
          this.context.router.push('/');
        });
  }
  
  render() {
    const { post } = this.props;
    
    // as an example of how it works. Might be better to display
    // nothing.
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}
  

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
