declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

// shims-vue.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}

