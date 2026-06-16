import type { Meta, StoryObj } from '@storybook/react';
import { PaymentAmountDisplay } from '../components/PaymentAmountDisplay';

const meta = {
  title: 'Cashew / Payment / PaymentAmountDisplay',
  component: PaymentAmountDisplay,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Hero number component showing a payment amount at confirmation or review. Amount color is driven by the financial token set (color/financial/positive, /negative, /display). The trust indicator badge uses the color/trust/* token group and can be hidden for contexts where the secure signal is communicated elsewhere.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'radio',
      options: ['positive', 'negative', 'display'],
      description: 'Controls amount color and prefix symbol',
    },
    showTrustIndicator: {
      control: 'boolean',
      description: 'Show or hide the Secure payment badge',
    },
    amount: {
      control: 'text',
      description: 'Payment amount as a formatted string (e.g. "1,250.00")',
    },
    currencySymbol: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PaymentAmountDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: '1,250.00',
    direction: 'display',
    showTrustIndicator: true,
  },
};

export const PositiveAmount: Story = {
  name: 'Positive Amount',
  args: {
    amount: '350.00',
    direction: 'positive',
    showTrustIndicator: true,
  },
};

export const NegativeAmount: Story = {
  name: 'Negative Amount',
  args: {
    amount: '75.00',
    direction: 'negative',
    showTrustIndicator: true,
  },
};

export const NoTrustIndicator: Story = {
  name: 'No Trust Indicator',
  args: {
    amount: '1,250.00',
    direction: 'display',
    showTrustIndicator: false,
  },
};

export const LargeAmount: Story = {
  name: 'Large Amount',
  args: {
    amount: '12,500.00',
    direction: 'positive',
    showTrustIndicator: true,
  },
};

export const Playground: Story = {
  name: '⚙️ Playground',
  args: {
    amount: '1,250.00',
    direction: 'display',
    showTrustIndicator: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive sandbox. Use the Controls panel to explore all prop combinations. Note: direction controls both the color applied from the financial token set and the prefix symbol (+ or −) prepended to the amount.',
      },
    },
  },
};
