import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import UploadSingleFile from './setup-file/upload-single-file';

type TextEditerProps = {
    name: string,
}

export default function UploadSingleImage({ name }: TextEditerProps) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <UploadSingleFile
                    accept="image/*"
                    file={field.value}
                    onDrop={React.useCallback((acceptedFiles: any) => {
                        const file = acceptedFiles[0];
                        if (file) {
                            field.onChange({
                                ...file,
                                preview: URL.createObjectURL(file)
                            });
                        }
                    }, [])}
                    error={error ? error?.message : false}
                    onRemove={()=>{field.onChange("");}}
                />
            )}
        />
    )
}
