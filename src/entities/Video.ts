import { 
	Entity, 
	Column, 
	CreateDateColumn, 
	PrimaryColumn, 
	ManyToOne, 
	JoinColumn,
} from 'typeorm';
import { randomUUID as uuid } from 'crypto';
import { Category } from './Category';

@Entity('videos')
export class Video {

	@PrimaryColumn()
	id: string;
	
	@Column()
	name: string;
	
	@Column()
	description: string;

	@Column()
	duration: number;

	@Column()
	category_id: string;

	@ManyToOne(() => Category)
	@JoinColumn({ name: 'category_id' })
	category: Category;

	@CreateDateColumn()
	createdAt: Date;

	constructor() {
		if (!this.id) { 
			this.id = uuid()
		}
	}
}