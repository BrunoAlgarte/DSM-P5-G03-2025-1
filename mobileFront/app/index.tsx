import { useEffect } from "react";
import { useRouter, useRootNavigationState } from "expo-router";

export default function Index() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (navigationState?.key) {
      router.replace("/login");
    }
  }, [navigationState]);

  return null;
}