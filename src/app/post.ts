import { User } from './user';

export interface Post {
	postId: number;
	user: User;
	postContent: string;
	postTitle: string;
	createdDate: Date;
	modifiedDateL: Date;

}