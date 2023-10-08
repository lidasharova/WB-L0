import { handlerTooltipProvider } from '@/components/tooltips/handlerTooltipProvider.js';
import { handlerTooltipCondition } from '@/components/tooltips/handlerTooltipCondition.js';

export const handlerTooltips = () => {
  handlerTooltipProvider();
  handlerTooltipCondition();
};
