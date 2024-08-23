import { a as __nuxt_component_0, _ as __nuxt_component_2 } from "./Setting-a3ab8510.js";
import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { u as useRouter } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const useDeviceLabel = (device, videoDevices, audioOutputDevices, audioDevices) => {
  var _a;
  if (device == null ? void 0 : device.label) {
    return device.label;
  } else if ((device == null ? void 0 : device.kind) === "videoinput" && (videoDevices == null ? void 0 : videoDevices.value)) {
    return "Camera " + (videoDevices.value.indexOf(device) + 1);
  } else if ((device == null ? void 0 : device.kind) === "audioinput" && (audioOutputDevices == null ? void 0 : audioOutputDevices.value)) {
    return "Microphone " + (audioDevices.value.indexOf(device) + 1);
  } else if ((device == null ? void 0 : device.kind) === "audiooutput" && (audioOutputDevices == null ? void 0 : audioOutputDevices.value)) {
    return "Speaker " + (((_a = audioOutputDevices == null ? void 0 : audioOutputDevices.value) == null ? void 0 : _a.indexOf(device)) + 1);
  } else {
    return "Unnamed Device";
  }
};
const _sfc_main$3 = {
  name: "MaterialSymbolsLightCloseRounded"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Close.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  name: "ClarityMicrophoneLine"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36"
  }, _attrs))}><path fill="currentColor" d="M18 24c3.9 0 7-3.1 7-7V9c0-3.9-3.1-7-7-7s-7 3.1-7 7v8c0 3.9 3.1 7 7 7M13 9c0-2.8 2.2-5 5-5s5 2.2 5 5v8c0 2.8-2.2 5-5 5s-5-2.2-5-5z" class="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M30 17h-2c0 5.5-4.5 10-10 10S8 22.5 8 17H6c0 6.3 4.8 11.4 11 11.9V32h-3c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1h-3v-3.1c6.2-.5 11-5.6 11-11.9" class="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Mic_regular.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "MaterialSymbolsVolumeDown"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M5 15V9h4l5-5v16l-5-5zm11 1V7.95q1.125.525 1.813 1.625T18.5 12t-.687 2.4T16 16"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Speaker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const videoDevices = ref([]);
    const selectedVideoDevice = ref("");
    const selectedVideoQuality = ref("");
    const audioDevices = ref([]);
    const selectedAudioDevice = ref("");
    const audioOutputDevices = ref([]);
    const selectedAudioOutputDevice = ref("");
    ref(null);
    const videoQualities = [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsSetting = __nuxt_component_0;
      const _component_IconsClose = __nuxt_component_1;
      const _component_IconsCameraon = __nuxt_component_2;
      const _component_IconsMic_regular = __nuxt_component_3;
      const _component_IconsSpeaker = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-4xl p-4 bg-white mx-auto sm:p-6 md:p-8 mt-20 relative rounded-md text-white" }, _attrs))}><div class="settings-page flex bg-[#295935] rounded-md"><aside class="sidebar text-white w-48 p-4"><h2 class="text-lg font-semibold mb-6">Settings</h2><ul class="space-y-4"><li class="flex justify-center items-center space-x-2 bg-[#295935e2] p-1 rounded-md">`);
      _push(ssrRenderComponent(_component_IconsSetting, null, null, _parent));
      _push(`<a href="#" class="text-white hover:text-gray-200 text-sm">Device Settings</a></li></ul></aside><div class="w-0.5 bg-[#ffffff31]"></div><main class="main-content flex-1 p-8"><h1 class="text-xl font-semibold pl-6">Device Settings</h1><button class="absolute top-16 right-24 p-2 text-white hover:bg-[#1e6d3d] rounded-full">`);
      _push(ssrRenderComponent(_component_IconsClose, null, null, _parent));
      _push(`</button><hr class="h-px bg-gray-400 border-0 dark:bg-gray-700 m-6"><div class="px-6"><form class="space-y-4"><div><label for="video-device" class="block text-sm font-medium">Video</label><div class="relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">`);
      _push(ssrRenderComponent(_component_IconsCameraon, null, null, _parent));
      _push(`</div><select id="video-device" class="ps-10 mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm bg-[#295935]"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(selectedVideoDevice)) ? ssrLooseContain(unref(selectedVideoDevice), "") : ssrLooseEqual(unref(selectedVideoDevice), "")) ? " selected" : ""}>Select a video device</option><!--[-->`);
      ssrRenderList(unref(videoDevices), (device) => {
        _push(`<option${ssrRenderAttr("value", device.deviceId)}>${ssrInterpolate(("useDeviceLabel" in _ctx ? _ctx.useDeviceLabel : unref(useDeviceLabel))(device, unref(videoDevices), unref(audioOutputDevices), unref(audioDevices)))}</option>`);
      });
      _push(`<!--]--></select></div></div><div><label for="video-quality" class="block text-sm font-medium">Video Quality</label><select id="video-quality" class="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm bg-[#295935]"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(selectedVideoQuality)) ? ssrLooseContain(unref(selectedVideoQuality), "") : ssrLooseEqual(unref(selectedVideoQuality), "")) ? " selected" : ""}>Select a video quality</option><!--[-->`);
      ssrRenderList(videoQualities, (quality) => {
        _push(`<option${ssrRenderAttr("value", quality.value)}>${ssrInterpolate(quality.label)}</option>`);
      });
      _push(`<!--]--></select></div><div><label for="audio-device" class="block text-sm font-medium">Microphone</label><div class="relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">`);
      _push(ssrRenderComponent(_component_IconsMic_regular, null, null, _parent));
      _push(`</div><select id="audio-device" class="mt-1 ps-10 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm bg-[#295935]"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(selectedAudioDevice)) ? ssrLooseContain(unref(selectedAudioDevice), "") : ssrLooseEqual(unref(selectedAudioDevice), "")) ? " selected" : ""}>Select an audio device</option><!--[-->`);
      ssrRenderList(unref(audioDevices), (device) => {
        _push(`<option${ssrRenderAttr("value", device.deviceId)}>${ssrInterpolate(("useDeviceLabel" in _ctx ? _ctx.useDeviceLabel : unref(useDeviceLabel))(device, unref(videoDevices), unref(audioOutputDevices), unref(audioDevices)))}</option>`);
      });
      _push(`<!--]--></select></div></div><div><label for="audio-output-device" class="block text-sm font-medium">Speaker</label><div class="flex items-center space-x-2 mt-1"><div class="relative flex-1"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">`);
      _push(ssrRenderComponent(_component_IconsSpeaker, null, null, _parent));
      _push(`</div><select id="audio-output-device" class="ps-10 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm bg-[#295935]"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(selectedAudioOutputDevice)) ? ssrLooseContain(unref(selectedAudioOutputDevice), "") : ssrLooseEqual(unref(selectedAudioOutputDevice), "")) ? " selected" : ""}>Select an audio output device</option><!--[-->`);
      ssrRenderList(unref(audioOutputDevices), (device) => {
        _push(`<option${ssrRenderAttr("value", device.deviceId)}>${ssrInterpolate(("useDeviceLabel" in _ctx ? _ctx.useDeviceLabel : unref(useDeviceLabel))(device, unref(videoDevices), unref(audioOutputDevices), unref(audioDevices)))}</option>`);
      });
      _push(`<!--]--></select></div><div class="relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">`);
      _push(ssrRenderComponent(_component_IconsSpeaker, null, null, _parent));
      _push(`</div><button class="px-4 ps-8 py-2 bg-[#295935] border border-gray-400 text-white rounded-md hover:bg-[#1e6d3d] focus:outline-none focus:ring-1 focus:ring-[#295935] sm:text-sm"> Test </button></div></div></div></form></div></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=settings-79243d1a.js.map
