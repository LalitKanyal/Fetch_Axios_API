import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { AxiosGetRequest, AxiosPatchRequest, AxiosPostRequest, AxiosPutRequest } from './src/AxiosApiRequests';

const App = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async() => {
  
    //  await AxiosGetRequest()
  //  .then(res => {
  //   console.log(res.data);
  //  })
  //  .catch(error => {
  //   console.log(error);
  //  });

  //  await AxiosPostRequest({title:'heheh', body: 'dhhdf', id: 1})
  //  .then(res => {
  //   console.log(res.status);
  //   console.log(res);
  //  }).catch(error => {
  //   console.log(error);
  //  });
  
  //  await AxiosPutRequest(1, {title:'ok', body: 'acha'})
  //  .then(res => {
  //   console.log(res.status);
  //   console.log(res);
  //  })
  //  .catch(error => {
  //   console.log(error);
  //  });
 
   await AxiosPatchRequest(1, {title:'okay'})
   .then(res => {
    console.log(res.status);
    console.log(res.data);
   })
   .catch(error => {
    console.log(error);
   });


  };

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App