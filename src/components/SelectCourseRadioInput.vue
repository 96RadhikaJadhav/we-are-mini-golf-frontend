<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <fieldset>
    <legend id="radiogroup-label" class="sr-only">
      Server size
    </legend>
    <ul class="space-y-4" role="radiogroup" aria-labelledby="radiogroup-label">
      <li
        v-for="course in courses"
        :key="course.id"
        :id="`radiogroup-option-${course.id}`"
        tabindex="0"
        role="radio"
        class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-indigo-500"
        :aria-checked="selected === course.id"
        @click="
          selected = course.id;
          $emit('course', course);
        "
      >
        <div
          class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between"
        >
          <div class="flex items-center">
            <div class="text-sm">
              <p class="font-medium text-gray-900">
                {{ course.name }}
              </p>
              <div class="text-gray-500">
                <!-- Add thumbnail -->
              </div>
            </div>
          </div>
        </div>
        <!-- On: "border-indigo-500", Off: "border-transparent" -->
        <div
          class="absolute inset-0 rounded-lg border-2 pointer-events-none"
          aria-hidden="true"
          :class="[
            selected === course.id ? 'border-78d03a' : 'border-transparent'
          ]"
        ></div>
      </li>
    </ul>
  </fieldset>
</template>

<script>
export default {
  name: 'SelectCourseRadioInput',
  props: {
    courses: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: undefined
    };
  }
};
</script>
