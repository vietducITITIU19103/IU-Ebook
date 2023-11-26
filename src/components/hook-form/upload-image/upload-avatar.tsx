import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import UploadAvatarFile from "./setup-file/upload-avatar"

type TextEditerProps = {
    name: string,
}

export default function UploadAvatar({ name }: TextEditerProps) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <UploadAvatarFile
                    accept="image/*"
                    file={field.value}
                    onDrop={React.useCallback((acceptedFiles: File) => {
                        const file = acceptedFiles;
                        if (file) {
                            field.onChange(file);
                        }
                    }, [])}
                    error={error ? error?.message : false}
                    onRemove={()=>{field.onChange(undefined)}}
                    isUseButton={false}
                    isMobile={false}
                />
            )}
        />
    )
}
