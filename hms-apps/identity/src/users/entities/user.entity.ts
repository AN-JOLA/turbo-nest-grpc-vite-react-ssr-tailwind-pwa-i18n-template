import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    primaryEmailAddress: string;

    @Column()
    backupEmailAddress: string;

    @Column()
    phone: string;

    @Column()
    isPrimaryEmailAddressVerified: boolean;

    @Column()
    isBackupEmailAddressVerified: boolean;

    @Column()
    passwordHash: string;
}
