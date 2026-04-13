import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment/payment-service';

@Component({
  selector: 'app-payment-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-options.html',
  styleUrls: ['./payment-options.css'], // كان styleUrl خطأ
})
export class PaymentOptions  implements OnInit {

  constructor(private paymentService: PaymentService) {}

  cardNumber: string = '';
  cardHolder: string = '';
  expiry: string = '';
  cvv: string = '';
  cardType: string = 'Card';
  cardIcon: string = '';
  isFlipped: boolean = false;

  savedCards: any[] = [];

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.paymentService.getMethod().subscribe({
      next: (res) => {
        this.savedCards = res; // عدل حسب شكل الريسبونس
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // تنسيق رقم الكارت
  onCardNumber(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    value = value.match(/.{1,4}/g)?.join(' ') || '';
    this.cardNumber = value;

    const firstDigit = value.replace(/\s/g, '')[0];
    if (firstDigit === '4') {
      this.cardType = 'Visa';
      this.cardIcon = 'https://img.icons8.com/color/48/visa.png';
    } else if (firstDigit === '5') {
      this.cardType = 'MasterCard';
      this.cardIcon = 'https://img.icons8.com/color/48/mastercard-logo.png';
    } else {
      this.cardType = 'Card';
      this.cardIcon = '';
    }
  }

  // تنسيق التاريخ
  onExpiryInput(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    this.expiry = value;
  }

  addCard() {
  if (!this.cardNumber || !this.cardHolder || !this.expiry) return;

  const body = {
    cardType: this.cardType,
    cardName: this.cardHolder,
    cardNumber: this.cardNumber.replace(/\s/g, ''),
    expiryDate: this.expiry,
    userId: localStorage.getItem('userId')
  };

  this.paymentService.addMethod(body).subscribe({
    next: (res: any) => {
    this.loadCards();
    },

    error: (err) => {
      console.log(err);
    }
  });

  // reset
  this.cardNumber = '';
  this.cardHolder = '';
  this.expiry = '';
  this.cvv = '';
  this.cardType = 'Card';
  this.cardIcon = '';
}

  deleteCard(id: number) {
    this.paymentService.deleteMethod(id).subscribe({
      next: () => {
        this.loadCards();
          this.savedCards = this.savedCards.filter(c => c.id !== id);
      },
      error: (err) => {
        console.log(err);
              this.loadCards();
      }
    });
  }

  // لون الكارت
  getCardColor(type: string): string {
    switch (type) {
      case 'Visa':
        return 'linear-gradient(135deg, #0e376d, #4285f4)';
      case 'MasterCard':
        return 'linear-gradient(135deg, #ff5f6d, #ffc371)';
      default:
        return 'linear-gradient(135deg, #2f2d2e, #8c8c8c)';
    }
  }
  getCardIcon(type: string): string {
  switch(type) {
    case 'Visa':
      return 'https://img.icons8.com/color/48/visa.png';
    case 'MasterCard':
      return 'https://img.icons8.com/color/48/mastercard-logo.png';
    default:
      return '';
  }
}
}