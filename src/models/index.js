// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Community, Post, Comment, CommunityPost, PostComment } = initSchema(schema);

export {
  Community,
  Post,
  Comment,
  CommunityPost,
  PostComment
};