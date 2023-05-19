import classes from './RangeSlider.module.scss'

import Slider from 'rc-slider'
import {FC, useState} from "react";
import {RangeSliderType} from "@/components/ui/CustomRangeSlider/types";


const CustomRangeSlider: FC<RangeSliderType> = ({onChange, maxValue, minValue, minPrice, maxPrice}) => {


    return (
        <div className={classes.Wrap}>
            <div className={classes.Prices}>
                <div className={classes.Price}>
                    От ₽<span>{minValue}</span>
                </div>
                <div className={classes.Price}>
                    До ₽<span>{maxValue}</span>
                </div>
            </div>

            <Slider
                onChange={onChange}
                style={{
                    width: '100%',
                    position: 'relative'
                }}
                railStyle={{
                    backgroundColor: '#FFF',
                    height: '2px',
                    position: 'absolute',
                    width: '100%',
                    top: 0,
                    left: 0
                }}
                trackStyle={{
                    backgroundColor: '#F4D606',
                    height: '2px',
                    position: 'absolute'
                }}
                handleStyle={{
                    backgroundColor: '#F4D606',
                    position: 'absolute',
                    width: '11px',
                    borderRadius: '50%',
                    height: '11px',
                    border: 'none',
                    opacity: 1,
                    marginTop: '-4px',
                    cursor: 'pointer'
                }}
                range
                min={minPrice}
                max={maxPrice}
                value={[minValue, maxValue]}
            />
        </div>
    );
};

export default CustomRangeSlider;