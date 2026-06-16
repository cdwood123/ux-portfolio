import { Lock } from 'lucide-react';
import '../styles/components/PaymentAmountDisplay.css';

type Direction = 'positive' | 'negative' | 'display';

interface PaymentAmountDisplayProps {
  amount?: string;
  currencySymbol?: string;
  direction?: Direction;
  showTrustIndicator?: boolean;
}

const colorMap: Record<Direction, string> = {
  display:  'var(--color-financial-display)',
  positive: 'var(--color-financial-positive)',
  negative: 'var(--color-financial-negative)',
};

const prefixMap: Record<Direction, string> = {
  positive: '+',
  negative: '−',
  display:  '',
};

export function PaymentAmountDisplay({
  amount = '1,250.00',
  currencySymbol = '$',
  direction = 'display',
  showTrustIndicator = true,
}: PaymentAmountDisplayProps) {
  const [dollars, cents] = amount.split('.');
  const amountColor = colorMap[direction];
  const prefix = prefixMap[direction];

  return (
    <div className="payment-amount-display">
      <div className="payment-amount-group">
        <span className="payment-currency">{currencySymbol}</span>
        <span className="payment-dollars" style={{ color: amountColor }}>
          {prefix}{dollars}
        </span>
        <span className="payment-cents" style={{ color: amountColor }}>
          .{cents}
        </span>
      </div>

      {showTrustIndicator && (
        <div className="payment-trust-indicator">
          <Lock size={14} color="var(--color-trust-secure-icon)" />
          <span className="payment-trust-label">Secure payment</span>
        </div>
      )}
    </div>
  );
}
