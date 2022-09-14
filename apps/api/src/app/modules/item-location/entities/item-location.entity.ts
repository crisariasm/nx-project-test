import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from '../../item/entities/item.entity';

@Entity()
export class ItemLocation {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	country: string;

	@Column()
	State: string;

	@Column()
	city: string;

	@Column()
	postalCode: number;

	@ManyToMany(() => Item, (inventorySystem) => inventorySystem.itemLocations)
	inventorySystems: Item[];
}
