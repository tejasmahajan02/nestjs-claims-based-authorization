import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseMessage } from './common/decorators/response-message.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ResponseMessage('Service is healthy.')
  checkHealth(): string {
    return this.appService.checkHealth();
  }
}
