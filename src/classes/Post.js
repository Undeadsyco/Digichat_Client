/** @typedef {import('./User').user} User */
/** @typedef {import('./Comment').comment} Comment */

import Comment from './Comment';

/**
 * @typedef {Object} post
 * @property {string} id
 * @property {User} author
 * @property {string} title
 * @property {string} edit
 * @property {string} body
 * @property {number} likes
 * @property {number} dislikes
 * @property {(Array<Comment>|Array)} [comments=[]]
 */

/** @type {post} */
export default class Post {
  /** @type {(Array<Comment>|Array)} */ comments;

  /**
   * @param {string} id 
   * @param {User} author 
   * @param {string} title 
   * @param {string} edit 
   * @param {string} body 
   * @param {number} likes 
   * @param {number} dislikes 
   */
  constructor(id, author, title, edit, body, likes, dislikes) {
    /** @type {string} */ this.id = id;
    /** @type {User} */ this.author = author;
    /** @type {string} */ this.title = title;
    /** @type {string} */ this.edit = edit;
    /** @type {string} */ this.body = body;
    /** @type {number} */ this.likes = likes;
    /** @type {number} */ this.dislikes = dislikes;
  }

  /** @return {string} */
  get id() {
    return this.id;
  }

  /** @param {string} id */
  set id(id) {
    this.id = id;
  }

  /** @return {User} */
  get author() {
    return this.author;
  }

  /** @param {User} author */
  set author(author) {
    this.author = author;
  }

  /** @return {string} */
  get title() {
    return this.title;
  }

  /** @param {string} title */
  set title(title) {
    this.title = title;
  }

  /** @return {string} */
  get edit() {
    return this.edit;
  }

  /** @param {string} edit */
  set edit(edit) {
    this.edit = edit;
  }

  /** @return {string} */
  get body() {
    return this.body;
  }

  /** @param {string} body */
  set body(body) {
    this.body = body;
  }

  /** @return {number} */
  get likes() {
    return this.likes;
  }

  /** @param {number} likes */
  set likes(likes) {
    this.likes = likes;
  }

  /** @return {number} */
  get dislikes() {
    return this.dislikes;
  }

  /** @param {number} dislikes */
  set dislikes(dislikes) {
    this.dislikes = dislikes;
  }

  /** @return {(Array<Comment>|Array)} */
  get comments() {
    return this.comments;
  }

  /** @param {(Array<Comment>|Array)} [comments=[]] */
  set comments(comments) {
    this.comments = comments.map((comment) => (
      new Comment(
        comment.id.toString(),
        comment.body,
        comment.likes,
        comment.dislikes,
        comment.author,
        comment.authorId
      )
    ));
  }
}