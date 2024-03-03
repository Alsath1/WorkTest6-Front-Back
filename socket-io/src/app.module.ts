import { Module } from '@nestjs/common';
import { SocketService } from './socket/socket.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SocketService],
})
export class AppModule {}
