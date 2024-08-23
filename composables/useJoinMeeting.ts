export const useToggleMic = async (micOn: any, audioStream: any) => {
  if (!micOn?.value) {
    try {
      audioStream.value = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      micOn.value = true;
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  } else {
    if (audioStream.value) {
      audioStream.value.getTracks().forEach((track: any) => track.stop());
      audioStream.value = null;
      micOn.value = false;
    }
  }
};

export const useToggleCamera = async (cameraOn: any, videoStream: any, videoElement: any) => {
  if (!cameraOn.value) {
    try {
      videoStream.value = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoElement.value) {
        videoElement.value.srcObject = videoStream.value;
      }
      cameraOn.value = true;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  } else {
    if (videoStream.value) {
      videoStream.value.getTracks().forEach((track: any) => track.stop());
      videoStream.value = null;
      if (videoElement.value) {
        videoElement.value.srcObject = null;
      }
      cameraOn.value = false;
    }
  }
};
