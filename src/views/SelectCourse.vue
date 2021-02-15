<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <transition
        appear
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
      </transition>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;
      </span>
      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <transition
        appear
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-out duration-300"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Select the course that you want to play on today:
              </h3>
              <div class="mt-2">
                <SelectCourseRadioInput
                  :courses="courses"
                  @course="selectedCourse = $event"
                />
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <BaseButton mode="btn primary-orange" @clicked="selectCourse">
              Select Course
            </BaseButton>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SelectCourse',
  components: {
    SelectCourseRadioInput: () =>
      import('@/components/SelectCourseRadioInput.vue'),
    BaseButton: () => import('@/components/utilities/BaseButton.vue')
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_API_URL}/courses`)
      .then(response => {
        this.courses = response.data;
      })
      .catch(e => console.log(e));
  },
  data() {
    return {
      courses: [],
      selectedCourse: {}
    };
  },
  methods: {
    selectCourse() {
      const gameId = JSON.parse(localStorage.getItem('game-details')).id;
      axios
        .put(`${process.env.VUE_APP_API_URL}/game-informations/${gameId}`, {
          course: this.selectedCourse.id
        })
        .then(response => {
          localStorage.removeItem('game-details');
          localStorage.setItem(
            'game-details',
            JSON.stringify({
              id: response.data.id,
              gameID: response.data.gameID,
              slug: response.data.course.slug
            })
          );
          this.$router.push({ name: 'SelectPlayers' });
        })
        .catch(e => console.log(e));
    }
  }
};
</script>
