import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function requestPosts(campgrounds) {
  const request = axios.get("http://api.amp.active.com/camping/campgrounds?shasta&api_key=4p779j755rfyben5pje2zryd")
}

export function receivePosts(campgrounds, json) {
  return {
    type: RECEIVE_POSTS,
    campgrounds,
    posts: json,
    receivedAt: Date.now()
  }
}

export function fetchPosts(query) {
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`http://api.amp.active.com/camping/campgrounds?{query}&api_key=4p779j755rfyben5pje2zryd`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}