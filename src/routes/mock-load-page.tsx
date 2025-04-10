import { Interview } from "@/types";
import { useState } from "react";

export const MockLoadPage = () => {

    const { interviewId } = useParams<{ interviewId: string }>();
    const [interview, setInterview] = useState<Interview | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);

    
  return <div>MockLoadPage</div>;
}
