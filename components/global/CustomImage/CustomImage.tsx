import Image from 'next/image'
import {FC} from 'react'
import {CustomImageType} from "@/components/global/CustomImage/types";


const CustomImage: FC<CustomImageType> = ({className, ...rest}) => {
    return <Image className={className} quality={95} {...rest} />
}

export default CustomImage
