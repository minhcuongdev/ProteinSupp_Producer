import MainApp from './src';
import useCachedResources from 'src/hooks/useCachedResources';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if(!isLoadingComplete) {
    return null
  } else {
    return (
        <MainApp/>
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

