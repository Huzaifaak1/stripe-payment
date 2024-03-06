import { Module } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';
import { StripeController } from './stripe/stripe.controller';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ProductsModule,PrismaModule, ConfigModule.forRoot({isGlobal:true})],
  controllers: [StripeController],
  providers: [StripeService],
})
export class AppModule {}
