import { reactive, toRefs } from 'vue';

export default function useAuth () {
  
  const user = reactive({
    status: false,
  });
  
  function createUserWithEmailAndPassword(email, password) {
    if (email && password) {
      user.status = true;
    }
    return;
  }
  
  function signInWithEmailAndPassword(email, password) {
    user.status = email === 'user@user.com' && password === '123';
    const status = user.status ? 'sucsess' : 'error';
    console.log(status);
  }
  
  function signOut() {
    console.log('useAuth -> signOut -> change status');
    user.status = false;
    const status = user.status ? 'error logout' : 'logout';
    console.log(status);
  }
  
  return {
    ...toRefs(user),
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  }
}