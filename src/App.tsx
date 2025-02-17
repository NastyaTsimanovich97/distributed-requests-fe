import { useState } from 'react';

import './App.css';
import { CreateUrl } from './components/CreateUrl/CreateUrl';
import { RequestRunner } from './components/RequestRunner/RequestRunner';
import { Table } from './components/Table/Table';
import { requestRunner } from './services/requestRunnerApi';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRunRequests = async () => {
    setIsLoading(true);

    try {
      const response = await requestRunner();

      await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <RequestRunner handleClick={handleRunRequests} />
      <CreateUrl />
      <Table isLoading={isLoading} />
    </>
  );
}

export default App;
