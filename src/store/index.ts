import Vue from "vue";
import Vuex, { ActionTree, MutationTree } from "vuex";

Vue.use(Vuex);

interface VuexState {
  showLoginModal: boolean;
}

const state: VuexState = {
  showLoginModal: false,
};

const mutations: MutationTree<VuexState> = {
  TOGGLE_LOGIN_MODAL: (state) => {
    state.showLoginModal = !state.showLoginModal;
  },
};

const actions: ActionTree<VuexState, VuexState> = {
  toggleLoginModal: ({ commit }) => {
    commit("TOGGLE_LOGIN_MODAL");
  },
};

export default new Vuex.Store<VuexState>({
  state,
  mutations,
  actions,
  modules: {},
});
