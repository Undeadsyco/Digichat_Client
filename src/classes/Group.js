import User from './User';
import Post from './Post';

/** @typedef {import('./User').user} User */
/** @typedef {import('./Post').post} Post */

/** 
 * @typedef {Object} group
 * @property {string} id
 * @property {string} groupName
 * @property {string} description
 * @property {number} likes
 * @property {number} dislikes
 * @property {(Array<User>|Array)} [users=[]]
 * @property {(Array<Post>|Array)} [posts=[]]
 */

/** @type {group} */
export default class Group {
  /** @type {(Array<User>|Array)} users */ users;
  /** @type {(Array<Post>|Array)} posts */ posts;

  /**
   * @param {string} id 
   * @param {string} groupName 
   * @param {string} description 
   * @param {number} likes 
   * @param {number} dislikes 
   * @param {boolean} isPrivate 
   */
  constructor(id, groupName, description, likes, dislikes, isPrivate) {
    /** @type {string} */ this.id = id;
    /** @type {string} */ this.groupName = groupName;
    /** @type {string} */ this.description = description;
    /** @type {number} */ this.likes = likes;
    /** @type {number} */ this.dislikes = dislikes;
    /** @type {boolean} */ this.isPrivate = isPrivate;
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
  get groupName() {
    return this.groupName;
  }

  /** @param {string} groupName */
  set groupName(groupName) {
    this.groupName = groupName;
  }

  /** @return {string} */
  get description() {
    return this.description;
  }

  /** @param {string} description */
  set description(description) {
    this.description = description;
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

  /** @param {number} dislikes*/
  set dislikes(dislikes) {
    this.dislikes = dislikes;
  }

  /** @return {boolean} */
  get isPrivate() {
    return this.isPrivate;
  }

  /** @param {boolean} isPrivate*/
  set isPrivate(isPrivate) {
    this.isPrivate = isPrivate;
  }

  /** @return {Array<User>} */
  get users() {
    return this.users;
  }

  /** @param {Array<User>} users */
  set users(users) {
    this.users = users.map((user) => (
      new User(
        user.id.toString(),
        user.name,
        user.userName,
        user.email,
        user.admin,
        user.friends,
        user.requests,
        user.groups,
        user.posts
      )
    ));
  }

  /** @return {Array<Post>} */
  get posts() {
    return this.posts;
  }

  /** @param {Array<Post>} posts */
  set posts(posts) {
    this.posts = posts.map((post) => (
      new Post(
        post.id.toString(),
        post.author,
        post.title,
        post.edit,
        post.body,
        post.likes,
        post.dislikes
      )
    ));
  }
}