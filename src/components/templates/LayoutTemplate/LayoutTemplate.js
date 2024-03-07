import {SafeAreaView} from 'react-native';

const LayoutTemplate = ({children}) => {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
};

export default LayoutTemplate;
