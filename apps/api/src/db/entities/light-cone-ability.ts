import { Entity, ManyToOne, Property, Ref } from '@mikro-orm/core';
import { ObjectType } from '@nestjs/graphql';
import { PrimaryKeyUUID } from '../decorators/primary-key-uuid.decorator';
import { LightCone } from './light-cone.entity';

@ObjectType()
@Entity()
export class LightConeAbility {
  @PrimaryKeyUUID()
  public id!: string;

  @Property()
  public name!: string;

  @Property()
  public descriptionHTML!: string;

  @ManyToOne(() => LightCone, { ref: true, onDelete: 'cascade' })
  lightCone!: Ref<LightCone>;
}
