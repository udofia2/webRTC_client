<template>
  <div class="w-full max-w-sm p-4 bg-white mx-auto sm:p-6 md:p-8 mt-11 relative">
    <div class="flex flex-col items-center pt-4 h-screen">
      <div class="mb-4">
        <h2 class="font-semibold text-2xl">Join Meeting</h2>
        <p class="text-xs mt-2">Meeting Id or Personal Link Name</p>
      </div>
      <div class="relative w-80 h-48 bg-[#6d8573] rounded-md flex flex-col items-center justify-center">

        <div v-if="!cameraOn" class="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center">
          <div class="w-20 h-20 bg-[#295935] rounded-full flex items-center justify-center text-white font-bold text-3xl">{{nameInitial || "AJ"}}</div>
        </div>

        <div v-if="!cameraOn" class="absolute bottom-8 text-white text-[.7rem] font-semibold text-center">
          {{ name || "Akanji Joseph" }}
        </div>
        <div class="absolute bottom-2 left-2 flex items-center bg-black text-white rounded-md px-2 py-1">
          <span class="text-xs font-semibold">{{nameDisplay}}</span>
          <IconsWifi class="ml-3 text-[#1E7B35]"/>
        </div>
        <video
          ref="videoElement"
          autoplay
          muted
          class="absolute top-0 left-0 w-full h-full object-cover rounded-md"
        ></video>
      </div>

      <div class="absolute bottom-[21.5rem] left-8 flex items-center space-x-1">
        <div @click="toggleMic">
          <IconsMic :class="{ 'text-[#1E7B35]': micOn, 'text-gray-400': !micOn }"/>
        </div>
        <div @click="toggleCamera">
          <div v-if="cameraOn" class="relative flex items-center justify-center w-5 h-5 bg-[#1E7B35] rounded-full">
            <IconsCameraon class="text-[#1E7B35]"/>
          </div>
          <div v-else class="relative flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full">
            <IconsCameraoff class="text-[#1E7B35]"/>
          </div>
        </div>
      </div>

      <div class="absolute bottom-[21.5rem] right-8 flex items-center space-x-1">
        <div class="flex items-end justify-end ml-4">
            <div class="relative flex items-center justify-center w-5 h-5 bg-[#295935] rounded-full">
              <button @click="goToSettings" class="text-[#4b6050] font-bold text-lg">
                <IconsSetting />
              </button>
            </div>
        </div>
      </div>
      
      <div class="w-full max-w-md mt-8">
        <form class="space-y-4 mt-8">
          <div>
            <label for="link" class="block hidden text-sm font-medium text-gray-700">Link</label>
            <input id="link" type="url" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm" placeholder="konn3ct.com/join/konn3ct"/>
          </div>
          <div>
            <label for="passcode" class="block text-sm font-medium text-gray-700">Passcode</label>
            <input id="passcode" type="text" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm" placeholder="12345"/>
          </div>
          <div class="flex space-x-4">
            <div class="flex-1">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input v-model="name" id="name" type="text" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm" placeholder="Akanji Joseph"/>
            </div>
            <div class="flex-1">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm" placeholder="joseph@mail.com"/>
            </div>
          </div>
          <button type="submit" class="w-full py-2 px-4 bg-[#295935] text-white font-semibold rounded-md shadow-sm hover:bg-[#1e5c29] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#295935]">
            Konn3ct
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>

const name = ref('')
const micOn = ref(false);
const cameraOn = ref(false);
const audioStream = ref(null);
const videoStream = ref(null);
const videoElement = ref(null);

const router = useRouter()

async function toggleMic() {
  if (!micOn.value) {
    try {
      audioStream.value = await navigator.mediaDevices.getUserMedia({ audio: true });
      micOn.value = true;
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  } else {
    if (audioStream.value) {
      audioStream.value.getTracks().forEach(track => track.stop());
      audioStream.value = null;
      micOn.value = false;
    }
  }
}

async function toggleCamera() {
  if (!cameraOn.value) {
    try {
      videoStream.value = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoElement.value) {
        videoElement.value.srcObject = videoStream.value;
      }
      console.log('Video source assigned:', videoElement.value.srcObject);
      cameraOn.value = true;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  } else {
    if (videoStream.value) {
      videoStream.value.getTracks().forEach(track => track.stop());
      videoStream.value = null;
      if (videoElement.value) {
        videoElement.value.srcObject = null;
      }
      cameraOn.value = false;
    }
  }
}

const nameInitial = computed(() => {
  return name.value.split(' ').map(part => part.charAt(0)).join('');
});

const nameDisplay = computed(() => {
  const parts = name.value.split(' ');
  if (parts.length > 1) {
    return `${parts[0]} ${parts[1].charAt(0)}`;
  }
  return parts[0] || "Akanji J"; 
});

const goToSettings = () => {
  router.push('/settings');

}

</script>