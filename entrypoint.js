import checkBoxComponent     from './components/options/checkbox.vue';
import choiceComponent       from './components/options/choice.vue';
import integerComponent      from './components/options/integer.vue';
import numberComponent       from './components/options/number.vue';
import textComponent         from './components/options/text.vue';
import textareaComponent     from './components/options/textarea.vue';
import modalComponent        from './components/modal.vue';
import httpMixin             from './mixins/http.vue';
import jsonOptionMixin       from './mixins/jsonOption.vue';
import optionMixin           from './mixins/option.vue';
import waitForItMixin        from './mixins/waitForIt.vue';
import actions               from './store/actions.js';
import getters               from './store/getters.js';
import mutations             from './store/mutations.js';
import JsonToTwigTransformer from './utils/JsonToTwigTransformer.js';
import {
  filterObject,
  sortObject,
  generateUniqueId,
  hashCode,
  createBootstrapModal,
  createAttributeMapObject
} from './utils/utils.js';

const utils = {
  filterObject,
  sortObject,
  generateUniqueId,
  hashCode,
  createBootstrapModal,
  createAttributeMapObject
}

export {
  checkBoxComponent,
  choiceComponent,
  integerComponent,
  numberComponent,
  textComponent,
  textareaComponent,
  modalComponent,
  httpMixin,
  jsonOptionMixin,
  optionMixin,
  waitForItMixin,
  actions,
  getters,
  mutations,
  JsonToTwigTransformer,
  utils
};
