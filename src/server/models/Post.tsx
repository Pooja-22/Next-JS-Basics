import mongoose, { Document, Schema } from 'mongoose';

export interface IPost extends Document {
  author: string;
  title: string;
  date_published: Date;
  content: string;
}

const PostSchema: Schema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  date_published: { type: Date, default: new Date() },
  content: { type: String, required: true },
});

const Post = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
export default Post;
