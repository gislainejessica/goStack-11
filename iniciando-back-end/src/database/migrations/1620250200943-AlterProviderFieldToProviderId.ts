import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export default class AlterProviderFieldToProviderId1620250200943 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointaments', 'provider')

    await queryRunner.addColumn('appointaments', new TableColumn({
      name: 'provider_id',
      type: 'uuid',
      isNullable: true
    }))

    await queryRunner.createForeignKey('appointaments', new TableForeignKey({
      name: 'AppointmentProvider',
      columnNames: ['provider_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointaments', 'AppointmentProvider')
    await queryRunner.dropColumn('appointaments', 'provider_id')
    await queryRunner.addColumn('appointaments', new TableColumn({
      name: 'provider',
      type: 'varchar'
    }))
  }

}
