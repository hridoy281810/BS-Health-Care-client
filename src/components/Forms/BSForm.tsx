import { FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";
type TFormResolver = {
    resolver?: any,
    defaultValues?:Record<string,any>
}
type TBSFormProps={
    children: React.ReactNode
    onSubmit:SubmitHandler<FieldValues>,
  

} & TFormResolver
const BSForm = ({children,onSubmit,resolver,defaultValues}:TBSFormProps) => {
   const formConfig:TFormResolver = {};
   if(resolver){
    formConfig["resolver"] = resolver
   }
   if(defaultValues){
    formConfig["defaultValues"] =   defaultValues
   }
    const methods = useForm(formConfig)
    const {handleSubmit,reset} = methods
    const submit:SubmitHandler<FieldValues> = (data) =>{
        onSubmit(data)
        reset()
    }
  return (
    <FormProvider {...methods}>
    <form onSubmit={handleSubmit(submit)}>
    {children}
    </form>
  </FormProvider>
  );
};

export default BSForm;