import Lugin from './screens/Login'
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
      <Lugin />
    </PaperProvider>
  );
}