import { useEffect, useState } from 'react';
import {
  useCastState,
  useRemoteMediaClient,
  CastState,
} from 'react-native-google-cast';

export function useChromecast(enabled: boolean) {
  const [active, setActive] = useState(false);

  const castState = enabled ? useCastState() : CastState.NO_DEVICES_AVAILABLE;
  const client = enabled ? useRemoteMediaClient() : null;

  useEffect(() => {
    if (client) setActive(true);
    else setActive(false);
  }, [client]);

  return {
    enabled,
    castState,
    client,
    isCasting: Boolean(client),
  };
}
