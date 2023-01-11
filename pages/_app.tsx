import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import NavBarComponent from '../Components/Nav/NavBarComponent'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<NavBarComponent />
			<Component {...pageProps} />
		</Provider>
	)
}
