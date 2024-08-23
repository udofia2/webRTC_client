import { mergeProps, useSSRContext, ref, computed, unref, defineComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __nuxt_component_2, a as __nuxt_component_0$2 } from "./Setting-a3ab8510.js";
import { u as useRouter, d as useHead } from "../server.mjs";
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
const _sfc_main$4 = {
  name: "MaterialSymbolsWifiRounded"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m0-11q1.875 0 3.563.6t3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10m0-6q3.125 0 5.888 1.025t4.962 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Wifi.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  name: "F7MicCircleFill"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    height: "1.4em",
    viewBox: "0 0 56 56"
  }, _attrs))}><path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-20.414c-2.414 0-4.078-1.851-4.078-4.336V17.5c0-2.461 1.664-4.336 4.078-4.336s4.078 1.875 4.078 4.336v9.656c0 2.485-1.664 4.336-4.078 4.336m-6.235 9.774c-.585 0-1.125-.516-1.125-1.078c0-.61.54-1.102 1.125-1.102h5.157v-2.883c-4.899-.469-8.157-4.125-8.157-9.07v-3.164c0-.586.493-1.055 1.032-1.055c.586 0 1.101.469 1.101 1.055v3.164c0 4.125 2.86 7.078 7.102 7.078c4.219 0 7.101-2.953 7.101-7.078v-3.164c0-.586.516-1.055 1.102-1.055c.563 0 1.031.469 1.031 1.055v3.164c0 4.922-3.281 8.578-8.156 9.07v2.883h5.18c.562 0 1.078.492 1.078 1.102c0 .562-.516 1.078-1.078 1.078Z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Mic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  name: "HumbleiconsCameraVideoOff"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 5l14 14M9 7h6a1 1 0 0 1 1 1v5.5a1 1 0 0 0 .4.8L20 17V7l-4 3m-1 7H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Cameraoff.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Join",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const micOn = ref(false);
    const cameraOn = ref(false);
    ref(null);
    ref(null);
    ref(null);
    useRouter();
    const nameInitial = computed(() => {
      return name.value.split(" ").map((part) => part.charAt(0)).join("");
    });
    const nameDisplay = computed(() => {
      const parts = name.value.split(" ");
      if (parts.length > 1) {
        return `${parts[0]} ${parts[1].charAt(0)}`;
      }
      return parts[0] || "Akanji J";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsWifi = __nuxt_component_0$1;
      const _component_IconsMic = __nuxt_component_1;
      const _component_IconsCameraon = __nuxt_component_2;
      const _component_IconsCameraoff = __nuxt_component_3;
      const _component_IconsSetting = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-sm p-4 bg-white mx-auto sm:p-6 md:p-8 mt-11 relative" }, _attrs))}><div class="flex flex-col items-center pt-4 h-screen"><div class="mb-4"><h2 class="font-semibold text-2xl">Join Meeting</h2><p class="text-xs mt-2">Meeting Id or Personal Link Name</p></div><div class="relative w-80 h-48 bg-[#6d8573] rounded-md flex flex-col items-center justify-center">`);
      if (!unref(cameraOn)) {
        _push(`<div class="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center"><div class="w-20 h-20 bg-[#295935] rounded-full flex items-center justify-center text-white font-bold text-3xl">${ssrInterpolate(unref(nameInitial) || "AJ")}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(cameraOn)) {
        _push(`<div class="absolute bottom-8 text-white text-[.7rem] font-semibold text-center">${ssrInterpolate(unref(name) || "Akanji Joseph")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-2 left-2 flex items-center bg-black text-white rounded-md px-2 py-1"><span class="text-xs font-semibold">${ssrInterpolate(unref(nameDisplay))}</span>`);
      _push(ssrRenderComponent(_component_IconsWifi, { class: "ml-3 text-[#1E7B35]" }, null, _parent));
      _push(`</div><video autoplay muted class="absolute top-0 left-0 w-full h-full object-cover rounded-md"></video></div><div class="absolute bottom-[21.5rem] left-8 flex items-center space-x-1"><div>`);
      _push(ssrRenderComponent(_component_IconsMic, {
        class: { "text-[#1E7B35]": unref(micOn), "text-gray-400": !unref(micOn) }
      }, null, _parent));
      _push(`</div><div>`);
      if (unref(cameraOn)) {
        _push(`<div class="relative flex items-center justify-center w-5 h-5 bg-[#1E7B35] rounded-full">`);
        _push(ssrRenderComponent(_component_IconsCameraon, { class: "text-[#1E7B35]" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="relative flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full">`);
        _push(ssrRenderComponent(_component_IconsCameraoff, { class: "text-[#1E7B35]" }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div><div class="absolute bottom-[21.5rem] right-8 flex items-center space-x-1"><div class="flex items-end justify-end ml-4"><div class="relative flex items-center justify-center w-5 h-5 bg-[#295935] rounded-full"><button class="text-[#4b6050] font-bold text-lg">`);
      _push(ssrRenderComponent(_component_IconsSetting, null, null, _parent));
      _push(`</button></div></div></div><div class="w-full max-w-md mt-8"><form class="space-y-4 mt-8"><div><label for="link" class="block hidden text-sm font-medium text-gray-700">Link</label><input id="link" type="url" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm" placeholder="konn3ct.com/join/konn3ct"></div><div><label for="passcode" class="block text-sm font-medium text-gray-700">Passcode</label><input id="passcode" type="text" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm" placeholder="12345"></div><div class="flex space-x-4"><div class="flex-1"><label for="name" class="block text-sm font-medium text-gray-700">Name</label><input${ssrRenderAttr("value", unref(name))} id="name" type="text" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm" placeholder="Akanji Joseph"></div><div class="flex-1"><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input id="email" type="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#295935] focus:border-[#295935] sm:text-sm" placeholder="joseph@mail.com"></div></div><button type="submit" class="w-full py-2 px-4 bg-[#295935] text-white font-semibold rounded-md shadow-sm hover:bg-[#1e5c29] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#295935]"> Konn3ct </button></form></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Meeting/Join.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "NewWavesEcosystem",
      meta: [
        {
          name: "Software development company",
          content: "Best in all kinds of softwares"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MeetingJoin = __nuxt_component_0;
      _push(ssrRenderComponent(_component_MeetingJoin, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-91ef346f.js.map
