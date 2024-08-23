export const useAudioOutputDevices = async (
  audioOutputDevices: any,
  selectedAudioOutputDevice: any
) => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    if (audioOutputDevices?.value){
      audioOutputDevices.value = devices.filter(
        (device) => device.kind === "audiooutput"
      );
    }

    if (audioOutputDevices?.value.length > 0) {
      selectedAudioOutputDevice.value = audioOutputDevices.value[0].deviceId;
    }
  } catch (error) {
    console.error("Error enumerating devices:", error);
  }
};


export const useAudioDevices = async (audioDevices: any, selectedAudioDevice: any) => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    if(audioDevices?.value){
      audioDevices.value = devices.filter(
        (device) => device.kind === "audioinput"
      );
    }

    if (audioDevices.value.length > 0) {
      selectedAudioDevice.value = audioDevices.value[0].deviceId;
    }
  } catch (error) {
    console.error("Error enumerating devices:", error);
  }
};

export const useVideoDevices = async (videoDevices: any, selectedVideoDevice: any) => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();

    if (videoDevices?.value){
      videoDevices.value = devices.filter(
        (device) => device.kind === "videoinput"
      );
    }

    if (videoDevices.value.length > 0) {
      selectedVideoDevice.value = videoDevices.value[0].deviceId;
    }
  } catch (error) {
    console.error("Error enumerating devices:", error);
  }
};

export const useDeviceLabel = (
  device: any,
  videoDevices: any,
  audioOutputDevices: any,
  audioDevices: any
) => {
  if (device?.label) {
    return device.label;
  } else if (device?.kind === "videoinput" && videoDevices?.value) {
    return "Camera " + (videoDevices.value.indexOf(device) + 1);
  } else if (device?.kind === "audioinput" && audioOutputDevices?.value) {
    return "Microphone " + (audioDevices.value.indexOf(device) + 1);
  } else if (device?.kind === "audiooutput" && audioOutputDevices?.value) {
    return "Speaker " + (audioOutputDevices?.value?.indexOf(device) + 1);
  } else {
    return "Unnamed Device";
  }
};

// const getTrackLabel = (deviceId) => {
//   const device = audioOutputDevices.find(
//     (device) => device.deviceId === deviceId
//   );
//   if (device) {
//     return new Promise((resolve) => {
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {
//           const tracks = stream.getTracks();
//           const track = tracks.find(
//             (track) => track.getSettings().deviceId === deviceId
//           );
//           resolve(track.label);
//         })
//         .catch((error) => console.error("Error getting user media:", error));
//     });
//   } else {
//     return "Unnamed Device";
//   }
// };

export const useLoadAudioOutput = async () => {
  try {
    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
  } catch (error) {
    console.error("Error accessing audio output device:", error);
  }
};

