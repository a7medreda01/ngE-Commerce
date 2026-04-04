import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-options.html',
  styleUrls: ['./payment-options.css'], // كان styleUrl خطأ
})
export class PaymentOptions {

  cardNumber: string = '';
  cardHolder: string = '';
  expiry: string = '';
  cvv: string = '';
  cardType: string = 'Card';
  cardIcon: string = '';
  isFlipped: boolean = false;

  savedCards: any[] = [];

  // تنسيق رقم الكارت كل 4 أرقام
  onCardNumber(event: any) {
    let value = event.target.value.replace(/\D/g, ''); // مسح أي حاجة مش رقم
    value = value.match(/.{1,4}/g)?.join(' ') || ''; // نضيف مسافة كل 4 أرقام
    this.cardNumber = value;

    // تحديد نوع الكارت
    const firstDigit = value.replace(/\s/g, '')[0];
    if (firstDigit === '4') {
      this.cardType = 'Visa';
      this.cardIcon='https://img.icons8.com/color/48/visa.png'
    } else if (firstDigit === '5') {
      this.cardType = 'MasterCard';
      this.cardIcon='https://img.icons8.com/color/48/mastercard-logo.png'
    } else {
      this.cardType = 'Card';
    }
  }

  // تنسيق Expiry MM/YY
  onExpiryInput(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    this.expiry = value;
  }

  addCard() {
    if (!this.cardNumber || !this.cardHolder || !this.expiry) return; // تأكد إن الفورم مليان

    this.savedCards.push({
      type: this.cardType,
      cardIcon: this.cardIcon,
      last4: this.cardNumber.replace(/\s/g, '').slice(-4)
    });

    // reset
    this.cardNumber = '';
    this.cardHolder = '';
    this.expiry = '';
    this.cvv = '';
    this.cardType = 'Card';
    this.cardIcon='';
  }

  deleteCard(index: number) {
    this.savedCards.splice(index, 1);
  }
//color of card
  getCardColor(type: string): string {
  switch(type) {
    case 'Visa':
      return 'linear-gradient(135deg, #0e376d, #4285f4)'; // أزرق فيزا
    case 'MasterCard':
      return 'linear-gradient(135deg, #ff5f6d, #ffc371)'; // برتقالي/أحمر ماستر
    default:
      return 'linear-gradient(135deg, #2f2d2e, #8c8c8c)'; // اللون الافتراضي
  }
}
}