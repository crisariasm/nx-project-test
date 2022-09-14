import { Column, Entity, ManyToOne, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinTable, JoinColumn } from 'typeorm';
import { ItemLocation } from '../../item-location/entities/item-location.entity';
import { ItemType } from '../../item-type/entities/item-type.entity';


@Entity()
export class Item {

	@PrimaryGeneratedColumn()
	id : number;

	@Column({ nullable: true })
	code: string;

	@Column()
	name : string;

	@Column()
	categoryOfProduct : string;

	@Column()
	description : string;

	@Column()
	amount : number;

	@Column()
	price : number;

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
	itemLocations: ItemLocation[];

	@ManyToOne(() => ItemType, (type) => type.inventorySystems)
	@JoinColumn({ name: 'type_id' })
	itemType: ItemType;
}