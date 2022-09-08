import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InventorySystem } from '../../inventory-system/entities/inventory-system.entity';


@Entity()
export class Location {

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

	@ManyToMany(() => InventorySystem, (inventorySystem) => inventorySystem.locations)
	inventorySystems: InventorySystem[];
}
