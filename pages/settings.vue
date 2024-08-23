<template>
  <div class="w-full max-w-4xl p-4 bg-white mx-auto sm:p-6 md:p-8 mt-20 relative rounded-md text-white">
    <div class="settings-page flex bg-[#295935] rounded-md">
      <aside class="sidebar text-white w-48 p-4">
        <h2 class="text-lg font-semibold mb-6">Settings</h2>
        <ul class="space-y-4">
          <li class="flex justify-center items-center space-x-2 bg-[#295935e2] p-1 rounded-md">
            <IconsSetting />
            <a href="#" class="text-white hover:text-gray-200 text-sm">Device Settings</a>
          </li>
        </ul>
      </aside>
      <div class="w-0.5 bg-[#ffffff31]"></div>
      <main class="main-content flex-1 p-8">
        <h1 class="text-xl font-semibold pl-6">Device Settings</h1>
        <button @click="closeSettings" class="absolute top-16 right-24 p-2 text-white hover:bg-[#1e6d3d] rounded-full">
            <IconsClose />
          </button>
        <hr class="h-px bg-gray-400 border-0 dark:bg-gray-700  m-6">
        <div class="px-6">
          <form class="space-y-4">
            <div>
              <label for="video-device" class="block text-sm font-medium">Video</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IconsCameraon />
                </div>
                <select id="video-device" v-model="selectedVideoDevice" class="ps-10 mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm bg-[#295935]">
                  <option value="" disabled>Select a video device</option>
                  <option v-for="device in videoDevices" :key="device.deviceId" :value="device.deviceId">
                    {{ useDeviceLabel(device,videoDevices, audioOutputDevices, audioDevices ) }}
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label for="video-quality" class="block text-sm font-medium">Video Quality</label>
              <select id="video-quality" v-model="selectedVideoQuality" class="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm bg-[#295935]">
                <option value="" disabled>Select a video quality</option>
                <option v-for="quality in videoQualities" :key="quality.value" :value="quality.value">
                  {{ quality.label }}
                </option>
              </select>
            </div>
            <div>
              <label for="audio-device" class="block text-sm font-medium">Microphone</label>
              <div class="relative">
                   <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IconsMic_regular />
                </div>
              <select id="audio-device" v-model="selectedAudioDevice" class="mt-1 ps-10 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm bg-[#295935]">
                <option value="" disabled>Select an audio device</option>
                <option v-for="device in audioDevices" :key="device.deviceId" :value="device.deviceId">
                  {{ useDeviceLabel(device,videoDevices, audioOutputDevices, audioDevices ) }}
                </option>
              </select>

              </div>
            </div>
            <div>
              <label for="audio-output-device" class="block text-sm font-medium">Speaker</label>
              <div class="flex items-center space-x-2 mt-1">
                <div class="relative flex-1">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <IconsSpeaker />
                  </div>
                  <select id="audio-output-device" v-model="selectedAudioOutputDevice" class="ps-10 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm bg-[#295935]">
                    <option value="" disabled>Select an audio output device</option>
                    <option v-for="device in audioOutputDevices" :key="device.deviceId" :value="device.deviceId">
                      {{useDeviceLabel(device,videoDevices, audioOutputDevices, audioDevices ) }}
                    </option>
                  </select>
                </div>
                    <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <IconsSpeaker />
                  </div>
                <button @click="testAudioOutput" class="px-4 ps-8 py-2 bg-[#295935] border border-gray-400 text-white rounded-md hover:bg-[#1e6d3d] focus:outline-none focus:ring-1 focus:ring-[#295935] sm:text-sm">
                  Test
                </button>
                </div>
              </div>
            </div>

          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useAudioOutputDevices } from '~/composables/useMediaSettings';


const router = useRouter();

const videoDevices = ref([]);
const selectedVideoDevice = ref('');
const selectedVideoQuality = ref('');
const audioDevices = ref([]);
const selectedAudioDevice = ref('');
const audioOutputDevices = ref([]);
const selectedAudioOutputDevice = ref('');
const audioRef = ref(null);

const videoQualities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' }
];


const testAudioOutput = async (event) => {
  event.preventDefault();
  try {
    const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioRef.value = new Audio('./button-198922.mp3');
    audioRef.value.play();
  } catch (error) {
    console.error('Error accessing audio output device:', error);
  }
};

const closeSettings = () => {
  if (audioRef.value) {
    audioRef.value.pause();
    audioRef.value = null;
  }
  navigateTo('/')
};

onMounted(async () => {
  useLoadAudioOutput()
  await useAudioOutputDevices(audioOutputDevices, selectedAudioOutputDevice)
  await useAudioDevices(audioDevices, selectedAudioDevice)
  await useVideoDevices(videoDevices, selectedVideoDevice)
});

</script>

