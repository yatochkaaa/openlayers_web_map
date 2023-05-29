import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface PlaceCreationAttrs {
  name: string;
  description: string;
  latitude: string;
  longitude: string;
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

  @Column({ type: DataType.STRING })
  latitude: string;

  @Column({ type: DataType.STRING })
  longitude: string;
}
