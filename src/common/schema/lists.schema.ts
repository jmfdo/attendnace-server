import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Member {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;
}

@Schema()
export class Lists {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [Member], default: [] })
  members: Member[];
}

export type ListsDocument = Lists & Document;

export const ListsSchema = SchemaFactory.createForClass(Lists);
