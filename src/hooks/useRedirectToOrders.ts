import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useRedirectToOrders = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const redirectToOrders = useCallback(() => {
    if (isMounted) {
      router.push("/orders");
    }
  }, [isMounted, router]);

  return redirectToOrders;
};

export default useRedirectToOrders;
