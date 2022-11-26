/**
 * @typedef {Object} comment
 * @property {string} id
 * @property {string} body
 * @property {number} likes
 * @property {number} dislikes
 * @property {string} author
 * @property {string} authorId
 */

/** @type {comment} */
export default class Comment {
  /**
   * @param {string} id 
   * @param {string} body 
   * @param {number} likes 
   * @param {number} dislikes 
   * @param {string} author 
   * @param {string} authorId 
   */
  constructor(id, body, likes, dislikes, author, authorId) {
    /** @type {string} */ this.id = id;
    /** @type {string} */ this.body = body;
    /** @type {number} */ this.likes = likes;
    /** @type {number} */ this.dislikes = dislikes;
    /** @type {string} */ this.author = author;
    /** @type {string} */ this.authorId = authorId;
  }

  /** @return {string} */
  get id() {
    return this.id;
  }

  /** @param {string} id */
  set id(id) {
    this.id = id;
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

  /** @return {string} */
  get author() {
    return this.author;
  }

  /** @param {string} author */
  set author(author) {
    this.author = author;
  }

  /** @return {string} */
  get authorId() {
    return this.authorId;
  }

  /** @param {string} authorId */
  set authorId(id) {
    this.authorId = id;
  }
}