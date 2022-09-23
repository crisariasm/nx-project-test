import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GatewayService } from './gateway.service';

@WebSocketGateway({
    cors: { origin: '*' },
})
export class Gateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    constructor(private gatewayService: GatewayService) { }

    afterInit(server: any) {
        console.log('Esto se ejecuta cuando inicia')
    }

    handleConnection(client: any, ...args: any[]) {
        console.log('Hola alguien se conecto al socket 👌👌👌');
    }

    handleDisconnect(client: any) {
        console.log('ALguien se fue! chao chao')
    }


    @SubscribeMessage('events')
    async handleJoinClient(cliente: Socket, payload: string) {
        // const mensaje = await this.gatewayService.processImage(payload);
        this.server.emit('events', 'evento iniciado');
    }
}