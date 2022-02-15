import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { randomUUID as uuid } from 'crypto';

@Entity('categories')
export class Category {

	@PrimaryColumn()
	id: string;
	
	@Column()
	name: string;
	
	@Column()
	description: string;

	@CreateDateColumn()
	createdAt: Date;

	constructor() {
		if (!this.id) this.id = uuid()
	}
}