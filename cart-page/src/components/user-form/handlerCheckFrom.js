import { handlerLabelInput } from '@/components/user-form/handlerLabelInput.js';
import { checkBlank } from '@/components/user-form/checkBlank.js';
import { checkInputs } from '@/components/user-form/checkInputs.js';

export const handlerCheckFrom = () => {
  handlerLabelInput();
  checkBlank();
  checkInputs();
};
