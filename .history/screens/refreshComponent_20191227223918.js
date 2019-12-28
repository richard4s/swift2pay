import React from 'react'

export default function App() {
 const [refreshing, setRefreshing] = React.useState(false);

 const onRefresh = React.useCallback(() => {
   setRefreshing(true);

   wait(2000).then(() => setRefreshing(false));
 }, [refreshing]);
}