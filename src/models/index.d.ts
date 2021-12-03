import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommunityMetaData = {
  readOnlyFields: 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'updatedAt';
}

type CommunityPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostCommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Community {
  readonly id: string;
  readonly createdAt?: string;
  readonly title: string;
  readonly description: string;
  readonly owner: string;
  readonly Posts?: (CommunityPost | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<Community, CommunityMetaData>);
  static copyOf(source: Community, mutator: (draft: MutableModel<Community, CommunityMetaData>) => MutableModel<Community, CommunityMetaData> | void): Community;
}

export declare class Post {
  readonly id: string;
  readonly createdAt?: string;
  readonly title: string;
  readonly content: string;
  readonly image?: string;
  readonly Comments?: (PostComment | null)[];
  readonly communitys?: (CommunityPost | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly createdAt?: string;
  readonly content: string;
  readonly posts?: PostComment[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class CommunityPost {
  readonly id: string;
  readonly communityID: string;
  readonly postID: string;
  readonly community: Community;
  readonly post: Post;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CommunityPost, CommunityPostMetaData>);
  static copyOf(source: CommunityPost, mutator: (draft: MutableModel<CommunityPost, CommunityPostMetaData>) => MutableModel<CommunityPost, CommunityPostMetaData> | void): CommunityPost;
}

export declare class PostComment {
  readonly id: string;
  readonly postID: string;
  readonly commentID: string;
  readonly post: Post;
  readonly comment: Comment;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PostComment, PostCommentMetaData>);
  static copyOf(source: PostComment, mutator: (draft: MutableModel<PostComment, PostCommentMetaData>) => MutableModel<PostComment, PostCommentMetaData> | void): PostComment;
}