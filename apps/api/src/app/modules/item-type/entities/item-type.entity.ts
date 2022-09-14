import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from '../../item/entities/item.entity';

@Entity()
export class ItemType {

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

	@OneToMany(() => Item, (inventorySystem) => inventorySystem.itemType)
	inventorySystems: Item[];
}