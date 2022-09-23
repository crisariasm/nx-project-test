import { Process, Processor } from '@nestjs/bull';
import { Server } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';
import { Gateway } from '../gateway';
 
@Processor('image')
export class ImageProcessor {

  constructor(private serverGateway: Gateway) { }
  
  @Process('webSocketTest') 
  async handleWebSocketTest() {
    console.log('entra al queue');
    await new Promise(r => setTimeout(r, 8000));
    this.serverGateway.server.emit('events', 'se termino el queue');
    console.log('se termina el queue');
  }
}