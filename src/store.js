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
            state.inputValueConfirmPassword = '';
            state.inputValuePassword = '';
        },
    },
    actions: {
        actionPost: ({ commit }) => {
            const fetch = new Promise((resolve, reject) => {
                commit('fetchLoading', true);
                setTimeout(() => {
                    let status = Math.round(Math.random());
                    if (status == 1) {
                        status = true;
                        resolve(status);
                    } else {
                        status = false;
                        reject(status);
                    }
                }, 3000);
            });

            fetch
                .then((result) => {
                    commit('fetchSuccess', result);
                    commit('fetchLoading', false);
                })
                .catch((err) => {
                    commit('fetchError', !err);
                    commit('fetchLoading', false);
                });

            setTimeout(() => {
                commit('setShowModalAlert', false);
                commit('fetchError', false);
                commit('fetchSuccess', false);
                commit('resetInputValues');
            }, 4000);
        },
    },
});

export default store;
