import { Column, Entity, ManyToOne, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinTable, JoinColumn } from 'typeorm';
import { ItemLocation } from '../../location/entities/item-location.entity';
import { ItemType } from '../../type/entities/item-type.entity';

@Entity()
export class Item {

	@PrimaryGeneratedColumn()
	id : number;

	@Column()
	codigo: string;

	@Column()
	name : string;

	@Column()
	categoryOfProduct : string;

	@Column()
	description : string;

	@Column()
	cantidad : number;

	@Column()
	valor : number;

	@CreateDateColumn()
	date: Date;

	@UpdateDateColumn()
	updateAt : Date;

	@ManyToMany(() => ItemLocation, (location) => location.inventorySystems)
	@JoinTable({
		name: 'inventory_system_location',
		joinColumn: {
			name: 'location_id',
		},
		inverseJoinColumn: {
			name: 'location_id',
		}
	})
	locations: ItemLocation[];

	@ManyToOne(() => ItemType, (type) => type.inventorySystems)
	@JoinColumn({ name: 'type_id' })
	type: ItemType;
}