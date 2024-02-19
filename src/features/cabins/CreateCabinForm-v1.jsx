// import Input from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Textarea from "../../ui/Textarea";
// import { useForm } from "react-hook-form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createCabin } from "../../services/apiCabins";
// import toast from "react-hot-toast";
// import FormRow from "../../ui/FormRow";

// function CreateCabinForm() {
//   //// useForm is a hook from react-hook-form library
//   const { register, handleSubmit, reset, getValues, formState } = useForm();
//   const { errors } = formState;





//   function onSubmit(data) {
//     mutate({ ...data, image: data.image[0] });
//   }
//   function onError(errors) {
//     console.log(errors);
//   }

//   return (
//     <Form onSubmit={handleSubmit(onSubmit, onError)}>
//       <FormRow label="Cabin name" error={errors?.name?.message}>
//         <Input
//           disabled={isCreating}
//           type="text"
//           id="name"
//           {...register("name", { required: "This field is required" })}
//         />
//       </FormRow>

//       <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
//         <Input
//           disabled={isCreating}
//           type="number"
//           id="maxCapacity"
//           {...register("maxCapacity", {
//             required: "This filed is required",
//             min: { value: 1, message: "Capacity atleast 1" },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Regular price" error={errors?.regularPrice?.message}>
//         <Input
//           type="number"
//           id="regularPrice"
//           disabled={isCreating}
//           {...register("regularPrice", {
//             required: "This filed is required",
//             min: { value: 1, message: "Capacity atleast 1" },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Discount" error={errors?.discount?.message}>
//         <Input
//           type="number"
//           id="discount"
//           disabled={isCreating}
//           defaultValue={0}
//           {...register("discount", {
//             required: "This filed is required",
//             /// + in this case is a unary operator that converts its operand to Number type.
//             validate: (value) =>
//               +value <= +getValues().regularPrice ||
//               "Discount should be less than regular price",
//           })}
//         />
//       </FormRow>

//       <FormRow
//         label="Description for website"
//         error={errors?.description?.message}
//       >
//         <Textarea
//           type="number"
//           id="description"
//           disabled={isCreating}
//           defaultValue=""
//           {...register("description", { required: "This filed is required" })}
//         />
//       </FormRow>

//       <FormRow label="Cabin photo">
//         <FileInput
//           id="image"
//           accept="image/*"
//           type="file"
//           {...register("image", { required: "This filed is required" })}
//         />
//       </FormRow>

//       <FormRow>
//         {/* type is an HTML attribute! */}
//         <Button $variation="secondary" type="reset">
//           Cancel
//         </Button>
//         <Button disabled={isCreating}>Add cabin</Button>
//       </FormRow>
//     </Form>
//   );
// }

// export default CreateCabinForm;
