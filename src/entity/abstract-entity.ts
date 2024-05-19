
import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity {

	@PrimaryGeneratedColumn()
	public id: number;

}
