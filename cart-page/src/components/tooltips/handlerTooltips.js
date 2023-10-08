import { handlerTooltipProvider } from '@/components/tooltips/handlerTooltipProvider.js';
import { handlerTooltipCondition } from '@/components/tooltips/handlerTooltipCondition.js';
import { handlerTooltipDiscount } from '@/components/tooltips/handlerTooltipDiscount.js';

export const handlerTooltips = () => {
  handlerTooltipProvider();
  handlerTooltipCondition();
  handlerTooltipDiscount();
};
