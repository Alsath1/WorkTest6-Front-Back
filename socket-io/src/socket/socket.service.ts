import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketService implements OnGatewayConnection {
  // подписка на событие server-patch
  @SubscribeMessage('server-patch')
  handleEvent(@MessageBody() dto, @ConnectedSocket() client) {
    // отправка сообщения на клиент
    const res = { type: 'someType', dto };
    client.emit('client-path', res);
  }
  // обработка Connection
  handleConnection(client: OnGatewayConnection) {
    console.log('Connected');
  }
}
