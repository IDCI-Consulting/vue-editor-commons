<template>

  <div class="form-group">
    <label for="name">
      {{ name }}
      <span class="required-star" v-if="displayRequiredStar">*</span>
    </label>
    <span v-if="option.options.help">{{ option.options.help }}</span>
    <input
       :required="option.options.required"
       type="checkbox"
       :name="name"
       :checked="data"
       @click="updateOption($event.target.checked)" />
  </div>

</template>

<script>

  import optionMixin from '../../mixins/option.vue';

  export default {
    mixins: [optionMixin]
  };

</script>
