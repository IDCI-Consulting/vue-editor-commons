<template>

  <div class="form-group">
    <label :for="name">
        {{ name }}
        <span class="required-star" v-if="displayRequiredStar">*</span>
    </label>
    <span v-if="option.options.help">{{ option.options.help }}</span>
    <input
       class="form-control"
       :required="option.options.required"
       :value="data"
       @input="updateOption($event.target.value)"
       type="number"
       :name="name" />
  </div>

</template>

<script>

import optionMixin from '../../mixins/option.vue';

export default {
  mixins: [optionMixin]
};

</script>
