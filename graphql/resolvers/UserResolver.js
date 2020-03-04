import { User } from '../models';

export default {
	Query: {
		users() {
			return User.all();
		}
	},
	Mutation: {
		createUser(source, args) {
			return User.create(args.input);
		},
		updateUser(source, args){
			return User.update(args.id, args.input);
		},
		deleteUser(source, args){
			return User.delete(args.id);
		},
	},
	User: {
		friends(source) {
			if (!source.friends || !source.friends.length) {
				return;
			}

			return Promise.all(
				source.friends.map(({ id }) => User.find(id))
			);
		}
	},
};