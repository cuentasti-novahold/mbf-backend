import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipment, EquipmentSchema } from './equipment.schema';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { UsersModule } from 'src/users/users.module';
import { UserSchema } from 'src/users/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Equipment.name, schema: EquipmentSchema },
      { name: 'User', schema: UserSchema }, // <-- esto es lo que faltaba antes y causaba el error

    ]), UsersModule
  ],
  controllers: [EquipmentController],
  providers: [EquipmentService],
})
export class EquipmentModule { }
