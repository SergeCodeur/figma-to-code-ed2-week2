import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useRedirectToCheckout = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const redirectToCheckout = useCallback(() => {
    if (isMounted) {
      router.push("/checkout");
    }
  }, [isMounted, router]);

  return redirectToCheckout;
};

export default useRedirectToCheckout;
