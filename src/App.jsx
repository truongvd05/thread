import { useDispatch } from 'react-redux'
import AppRoutes from './components/Approutes'
import { useEffect } from 'react';
import { fetchUser } from './feartures/User/userActions';
import { fetchFeed } from './feartures/feed/feedActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchFeed({
    type: "for_you",
    page: 1,
    per_page: 5
  }))
  }, [dispatch])
  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
