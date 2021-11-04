import { CatsService } from './cats/cats.service';
import { Body, Controller, Get, Param, Req } from '@nestjs/common'
import { Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly catsService:CatsService) {}

  @Get('')
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string, name: string }
  ): string {
    console.log(param);
    this.catsService.test();
    return this.appService.getHello();
  }
}
