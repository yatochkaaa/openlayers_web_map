import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface PlaceCreationAttrs {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

@Table({ tableName: 'places' })
export class Place extends Model<Place, PlaceCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @Column({ type: DataType.INTEGER })
  latitude: number;

  @Column({ type: DataType.INTEGER })
  longitude: number;
}
