// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { FormProvider, useForm } from "react-hook-form";
// import { Interview } from "@/types";
// import { CustomBreadCrumb } from "./custom-bread-crumb";
// import { useEffect, useState } from "react";
// import { toast } from "sonner";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Interview } from "@/types";

import { CustomBreadCrumb } from "./custom-bread-crumb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";

interface FormMockInterviewProps {
  initialData: Interview | null;
}

const formSchema = z.object({
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>


export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {

  const form = useForm<FormData>({
    resolver : zodResolver(formSchema),
    defaultValues : initialData || {}
  })

  const { isValid, isSubmitting } = form.formState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const title = initialData
    ? initialData.position
    : "Create a new mock interview";

  const breadCrumbPage = initialData ? initialData?.position : "Create";
  const actions = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? { title: "Updated..!", description: "Changes saved successfully..." }
    : { title: "Created..!", description: "New Mock Interview created..." };

    const onSubmit = aync (data: FormData) => {
      try {
        setLoading(true);
      } catch (error) {
        console.log(error);
        toast.error("Error..", {
          description: `Something went wrong. Please try again later`,
        });
      }finally{
        setLoading(false);
      }
    }

  useEffect(() => {
    if (initialData) {
      form.reset({
        position: initialData.position,
        description: initialData.description,
        experience: initialData.experience,
        techStack: initialData.techStack,
      });
    }
  }, [initialData, form]);

  return (
    <div className="w-full flex-col space-y-4">
      <CustomBreadCrumb
        breadCrumbPage={breadCrumbPage}
        breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
      />
    </div>
  );
};
