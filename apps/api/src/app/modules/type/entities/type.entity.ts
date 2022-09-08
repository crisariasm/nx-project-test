import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InventorySystem } from '../../inventory-system/entities/inventory-system.entity';


@Entity()
export class Type {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	initial: boolean;

	@Column()
	final: boolean;

	@Column()
	annual: boolean;

	@Column()
	journal: boolean;

	@Column()
	rawMaterial: boolean;

	@Column()
	product: boolean;

	@Column()
	stock: boolean;

	@OneToMany(() => InventorySystem, (inventorySystem) => inventorySystem.type)
	inventorySystems: InventorySystem[];
}