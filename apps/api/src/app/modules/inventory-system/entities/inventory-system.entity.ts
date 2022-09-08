import { Column, Entity, ManyToOne, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinTable, JoinColumn } from 'typeorm';
import { Location } from '../../location/entities/location.entity';
import { Type } from '../../type/entities/type.entity';

@Entity({ name: 'inventory_system' })
export class InventorySystem {

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

	@ManyToMany(() => Location, (location) => location.inventorySystems)
	@JoinTable({
		name: 'inventory_system_location',
		joinColumn: {
			name: 'location_id',
		},
		inverseJoinColumn: {
			name: 'location_id',
		}
	})
	locations: Location[];

	@ManyToOne(() => Type, (type) => type.inventorySystems)
	@JoinColumn({ name: 'type_id' })
	type: Type;
}