import { Store } from 'vuex';
import { State } from './main';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
