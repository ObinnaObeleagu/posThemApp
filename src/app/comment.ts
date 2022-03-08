export interface comment {
	commetId: number;
	post: Post;
	user: User;
	createdDate: Date;
	modifiedDate: Date;
	commentContent: string;
}