import { d as useHead } from "../server.mjs";
import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
import "flowbite";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Toothtraffic9ja: Best platform to find dentist around you.",
      meta: [
        {
          name: "Dentist",
          content: "Find a professional dentist in your area."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HerosLanding = resolveComponent("HerosLanding");
      _push(ssrRenderComponent(_component_HerosLanding, _attrs, null, _parent));
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
//# sourceMappingURL=index-7037f881.js.map
