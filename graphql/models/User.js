import BaseModel from './BaseModel';

class User extends BaseModel {
  constructor() {
    super();
    this.model = 'users';
  }
}

export default User;