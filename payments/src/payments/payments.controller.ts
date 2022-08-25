import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaymentDto } from './payment.dto';
import { Payment } from './payment.entity';
import { PAYMENTS_REPOSITORY } from './payments.providers';

@Controller('payments')
export class PaymentsController {
  constructor(
    @Inject(PAYMENTS_REPOSITORY)
    private paymentsRepository: Repository<Payment>,
  ) {}

  @Post()
  async pay(@Body() dto: PaymentDto) {
    console.log(dto)
    const entity = new Payment();
    entity.amount = dto.amount;
    entity.orderId = dto.orderId;
    entity.timestamp = new Date();
    await this.paymentsRepository.save(entity);
  }

  @Get()
  async list(): Promise<PaymentDto[]> {
    return (await this.paymentsRepository.find()).map((payment) => {
      const dto = new PaymentDto();
      dto.orderId = payment.orderId;
      dto.amount = payment.amount;
      return dto;
    });
  }
}
