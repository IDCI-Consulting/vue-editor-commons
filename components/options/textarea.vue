<template>

  <div class="form-group">
    <label :for="name">
      {{ name }}
      <span class="required-star" v-if="displayRequiredStar">*</span>
    </label>
    <span v-if="option.options.help">{{ option.options.help }}</span>
    <textarea class="form-control"
              :required="option.options.required"
              :value="data"
              @input="onOptionValueChanged($event.target.value)"
              :name="name">
    </textarea>
  </div>

</template>

<script>

import jsonOptionMixin from '../../mixins/jsonOption.vue';

export default {
  mixins: [jsonOptionMixin]
};

</script>
