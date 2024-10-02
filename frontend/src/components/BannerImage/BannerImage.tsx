import { BannerImageProps } from "../../types/BannerImageProps";
import { Overflow } from "../Overflow/Overflow";
import "./BannerImage.css";

export function BannerImage({ bannerClass, image }: BannerImageProps) {
    return (
        <>
            <figure className={`bannerImage ${bannerClass}`}>
                <img src={image} loading="lazy"/>
                <Overflow title="Lorem Ipsum" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, debitis."/>
            </figure>
        </>
    )
}