import { Divider } from '@mui/material';
import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type BSRichTextInputProps = {
  label: string;
} & UseControllerProps;

const BSRichTextField: React.FC<BSRichTextInputProps> = ({ label, ...props }) => {
  const { field } = useController(props);

  return (
    <>
    <label>{label}</label>
      <ReactQuill  className="h-80 " theme="snow" value={field.value || ''} onChange={field.onChange} />
     <Divider></Divider>
    </>
  );
};

export default BSRichTextField;
