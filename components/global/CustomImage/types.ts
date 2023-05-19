import {ImageProps} from "next/image";

export type CustomImageType = ImageProps & {
    className?: string
}