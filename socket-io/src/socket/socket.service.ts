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
  handleEvent(@MessageBody() dto, @ConnectedSocket() client: any) {
    console.log(dto);

    const res = { type: 'someType', dto };
    client.emit('client-path', res);
  }

  handleConnection(client: OnGatewayConnection) {
    console.log(client);
    console.log('Connected');
  }
}
