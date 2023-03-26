import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { FetchGetRequest, FetchPatchRequest, FetchPostRequest, FetchPutRequest } from './src/FetchApiRequests'

const App_Fetch_API = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async() => {
    // const res = await FetchGetRequest();
    // const res = await FetchPostRequest();

    // send data from user side to api
    // const data = {
    //   title: 'hehdfdfehe',
    //   body: 'singdh',
    //   userId: 1,
    // }

    const data = {
      title: 'hola send only that data that need to be updated in Patch request',
    }

    // const res = await FetchPostRequest(data);

    // const res = await FetchPutRequest(1, data);

    const res = await FetchPatchRequest(1, data);

    console.log('data', res);
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App_Fetch_API