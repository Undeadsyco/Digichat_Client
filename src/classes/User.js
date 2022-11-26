import Group from "./Group";
import Post from './Post';


/** @typedef {import("./Group").group} Group */
/** @typedef {import("./Post").post} Post */

/**
 * @typedef {Object} user
 * @property {string} id
 * @property {string} name
 * @property {string} userName
 * @property {string} email
 * @property {boolean} admin
 * @property {(Array<User>|Array)} [friends=[]]
 * @property {(Array<User>|Array)} [requests=[]]
 * @property {(Array<Group>|Array)} [groups=[]]
 * @property {(Array<Post>|Array)} [posts=[]]
 */

/** @type {user} */
export default class User {
  /** @type {(Array<User>|Array)}} */  _friends;
  /** @type {(Array<User>|Array)}} */  _requests;
  /** @type {(Array<Group>|Array)} */  _groups;
  /** @type {(Array<Post>|Array)} */  _posts;

  /**
   * @param {string} id 
   * @param {string} name 
   * @param {string} userName 
   * @param {string} email 
   * @param {string} admin 
   */
  constructor(id, name, userName, email, admin) {
    /** @type {string} */ this._id = id;
    /** @type {string} */ this._name = name;
    /** @type {string} */ this._userName = userName;
    /** @type {string} */ this._email = email;
    /** @type {boolean} */ this._admin = admin;
  }

  /** @return {string} object id */
  get id() {
    return this._id
  }

  /** @param {string} id */
  set id(id) {
    this._id = id;
  }

  /** @return {string} name */
  get name() {
    return this._name
  }

  /** @param {string} name */
  set name(name) {
    this._name = name;
  }

  /** @return {string} userName */
  get userName() {
    return this._userName;
  }

  /** @param {string} userName */
  set userName(userName) {
    this._userName = userName;
  }

  /** @return {string} email */
  get email() {
    return this._email;
  }

  /** @param {string} email */
  set email(email) {
    this._email = email
  }

  /** @return {boolean} admin */
  get admin() {
    return this._admin;
  }

  /** @param {boolean} isAdmin */
  set admin(isAdmin) {
    this._admin = isAdmin;
  }

  /** @return {Array<User>} */
  get friends() {
    return this._friends;
  }

  /** @param {Array<User>} [friends=[]] */
  set friends(friends) {
    if (friends) this._friends = friends.map((friend) => (
      new User(
        friend.UserId.toString(),
        friend.FullName,
        friend.UserName,
        friend.Email,
        friend.Admin,
        friend.friends,
        friend.requests,
        friend.groups,
        friend.posts
      )
    ));
  }

  /** @return {Array<User>} */
  get requests() {
    return this._requests
  }

  /** @param {Array<User>} [requests=[]] */
  set requests(requests) {
    if (requests) this._requests = requests.map((user) => (
      new User(
        user.UserId.toString(),
        user.FullName,
        user.UserName,
        user.Email,
        user.Admin,
        user.Friends,
        user.Requests,
        user.groups,
        user.posts
      )
    ));
  }

  /** @returns {Array<Group>} */
  get groups() {
    return this._groups;
  }

  /** @param {Array<Group>} [groups=[]] */
  set groups(groups) {
    if (groups) this._groups = groups.map((group) => (
      new Group(
        group.GroupId.toString(),
        group.GroupName,
        group.Description,
        group.Likes,
        group.Dislikes,
        group.IsPrivate,
        group.users,
        group.posts
      )
    ));
  }

  /** @return {Array<Post>} */
  get posts() {
    return this.posts;
  }

  /** @param {Array<Post>} [posts=[]] */
  set posts(posts) {
    if (posts) this.posts = posts.map((post) => (
      new Post(
        post.PostId.toString(),
        new User(post.UserId, '', post.UserName, '', false),
        post.PostHead,
        post.Edit,
        post.PostBody,
        post.Likes,
        post.Dislikes,
      )
    ));
  }
}