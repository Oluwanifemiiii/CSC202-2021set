import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [StudentsModule, UsersModule]
})
export class StudentRegistrationModule {}
