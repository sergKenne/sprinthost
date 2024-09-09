import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isValidPassword: false,
            isValidConfirmPassword: false,
            isMatchPassword: true,
            errorTextPassword: '',
            errorTextConfirmPassword: '',
            inputValuePassword: '',
            inputValueConfirmPassword: '',
            loading: false,
            success: false,
            error: false,
            isShowModalAlert: false,
            isShowModal: true,
            // modalName:""
        };
    },
    mutations: {
        handleChangePassword: (state, data) => {
            state.inputValuePassword = data.value;
            state.isValidPassword = data.isValid;
        },
        handleChangeConfirmPassword: (state, data) => {
            state.inputValueConfirmPassword = data.value;
            state.isValidConfirmPassword = data.isValid;
        },
        matchPassword: (state, value) => {
            state.isMatchPassword = value;
        },
        setErrorTextPassword: (state, value) => {
            state.errorTextPassword = value;
        },
        setErrorTextConfirmPassword: (state, value) => {
            state.errorTextConfirmPassword = value;
        },
        fetchSuccess: (state, result) => {
            state.success = result;
        },
        fetchLoading: (state, result) => {
            state.loading = result;
        },
        fetchError: (state, result) => {
            state.error = result;
        },
        setShowModalAlert: (state, payload) => {
            state.isShowModalAlert = payload;
        },
        closeModal: (state, payload) => {
            state.isShowModal = payload;
      },
      resetInputValues: (state) => {
        state.inputValueConfirmPassword = ""
        state.inputValuePassword = ""
      },
      // setModalName: (state,name) => {
      //   state.modalName = name
      // }
    },
    actions: {
        actionSuccess: ({ commit }, payload) => {
            commit('fetchSuccess', payload);
        },
        actionLoading: ({ commit }, payload) => {
            commit('fetchLoading', payload);
        },
        actionError: ({ commit }, payload) => {
            commit('fetchError', payload);
        },
    },
});


export default store