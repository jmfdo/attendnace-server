import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;
  @Prop()
  lastname: string;
  @Prop({ unique: true })
  email: string;
  @Prop({ unique: true })
  phone: number;
  @Prop()
  password: string;
  @Prop({ default: [] })
  lists: [];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
