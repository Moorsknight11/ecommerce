import {Stack} from '@sanity/ui'
function MultipleFileInput({ props }) {
  const {
    elementProps: {
      id,
      onBlur,  
      onFocus,
      placeholder,
      readOnly,
      ref,
      // value
    },
    onChange,
    schemaType,
    validation,
    value = ''
  } = props

 const {elementProps} = props
  const handleChange = (event) => {

    const files = event.currentTarget.files;

    onChange()
  };

  return (

    <input


      type="file"
      accept="image/*" // Limit file selection to image files only
      onChange={handleChange}
      multiple  // Allow multiple file selection
    />

  );
}

export default MultipleFileInput;