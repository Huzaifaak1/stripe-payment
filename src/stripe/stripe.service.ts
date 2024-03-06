import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProductsService } from 'src/products/products.service';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;
  constructor(private productService: ProductsService, config: ConfigService) {
    this.stripe = new Stripe(
      process.env.STRIPE_SECRET_KEY,
      { apiVersion: '2023-10-16' },
    );
  }

  async createCharge() {
    const singleItem = await this.productService.findAll(); 
    try {
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: singleItem[0].name,
              },
              unit_amount: parseInt(singleItem[0].price) * 100,
            },
            quantity: 1,
          },
        ],
        success_url: 'https://google.com',
        cancel_url: 'https://facebook.com',
      });
      return session.url;
    } catch (e) {
      console.error(e.message);
    }
  }
}


// line_items: items.map(item=>{
//   return {
//     price_data:{
//       currency:'usd',
//       product_data:{
//         name : item.name
//       },
//       unit_amount :  parseInt(item.price) * 100
//     }