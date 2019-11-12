export const fetchComments = () => {
  // console.log('fetchcomments')
  return dispatch => {
    dispatch({ type: 'LOADING_COMMENTS'})
    return fetch('https://kayaks-backend-api.herokuapp.com/comments')

    .then(resp => resp.json())
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments }));
  }
}


export const addComment = comment => {
  // console.log('addComment', comment)
  return dispatch => {

    return fetch('https://kayaks-backend-api.herokuapp.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(comment),
    })
    .then(resp => resp.json())
    // .then(console.log)
    .then(comment => {
      // console.log(comment)

      dispatch({ type: 'ADD_COMMENT', comment})
    });
  }

}


export const deleteComment = id => {
  // console.log('deleteComment', id)
  return dispatch => {
    dispatch({ type: 'DELETE_COMMENT', id})
    return fetch(`https://kayaks-backend-api.herokuapp.com/comments/${id}`,{
      method: 'DELETE'
    })
  }
}
