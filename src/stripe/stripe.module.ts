import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  imports: [ProductsModule],
  controllers: [StripeController],
  providers: [StripeService],
  exports: [],
})
export class StripeModule {}
