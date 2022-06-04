import MainApp from './src';
import useCachedResources from 'src/hooks/useCachedResources';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import { Snackbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { setOffSnackBar } from 'src/redux/slices/snackBarSlice';
import React from 'react';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const dispatch = useDispatch()
  const open = useSelector(state => state.snackBar.open)
  const title = useSelector(state => state.snackBar.title)
  const onDismissSnackBar = () => dispatch(setOffSnackBar());

  if(!isLoadingComplete) {
    return null
  } else {
    return (
      <>
        <MainApp/>
        <Snackbar
        visible={open}
        onDismiss={onDismissSnackBar}
      >
        {title}
      </Snackbar>
      </>
    );
  }
}

const AppWrapper = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper

