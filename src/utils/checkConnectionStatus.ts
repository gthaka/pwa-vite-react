const checkConnectionStatus = async (): Promise<string> => {
    if (navigator.onLine) {
      const online = await isReachable(getServerUrl());
        if (online) {
            // handle online status
            console.log('online');
            return 'online';
        } else {
            console.log('no connectivity');
            return 'error';
        }
    } else {
      // handle offline status
      console.log('offline');
      return Promise.resolve('offline');
    }
  };
  
  const isReachable = (url: string): Promise<boolean> =>
    fetch(url, { method: 'HEAD', mode: 'no-cors' })
      .then((resp) => resp && (resp.ok || resp.type === 'opaque'))
      .catch((err) => {
        console.warn('[conn test failure]:', err);
        return false;
      });
  
  const getServerUrl = (): string =>
    (document.getElementById('serverUrl') as HTMLInputElement)?.value ||
    window.location.origin;
  
export default checkConnectionStatus;