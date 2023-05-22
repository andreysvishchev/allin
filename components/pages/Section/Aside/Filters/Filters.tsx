import IconCheckbox from "@/components/icons/IconCheckbox"
import { useSection } from "@/components/pages/Section/store"
import Button from "@/components/ui/Button/Button"
import CustomRangeSlider from "@/components/ui/CustomRangeSlider/CustomRangeSlider"
import cn from "classnames"
import classes from './Filters.module.scss'


const Filters = () => {
    const filters = useSection(state => state.filters)
    const changeRangePrice = useSection(state => state.changeRangePrice)
    const changeParams = useSection(state => state.changeParams)

    return (
        <div className={classes.Wrap}>
            <div className={classes.Caption}>Цена</div>
            {filters?.price &&
                <CustomRangeSlider maxValue={filters.price.maxValue}
                    minValue={filters.price.minValue}
                    minPrice={filters.price.minPrice}
                    maxPrice={filters.price.maxPrice}
                    onChange={changeRangePrice} />}
            {filters?.params.contents &&
                <div className={classes.Item}>
                    <div className={classes.Caption}>{filters.params.contents.title}</div>
                    {filters.params.contents.values.map((el, i) =>
                        <div onClick={() => changeParams('contents', el.value)}
                            key={i} className={cn(classes.Checkbox, { [classes.Active]: el.active })}>
                            <span className={classes.Icon}>
                                <IconCheckbox />
                            </span>
                            <span className={classes.Name}>{el.title}</span>
                        </div>
                    )}
                </div>
            }
            {filters?.params.concentration &&
                <div className={classes.Item}>
                    <div className={classes.Caption}>{filters.params.concentration.title}</div>
                    {filters.params.concentration.values.map((el, i) =>
                        <div onClick={() => changeParams('concentration', el.value)}
                            key={i} className={cn(classes.Checkbox, { [classes.Active]: el.active })}>
                            <span className={classes.Icon}>
                                <IconCheckbox />
                            </span>
                            <span className={classes.Name}>{el.title}</span>
                        </div>
                    )}
                </div>
            }
            {filters?.params.size &&
                <div className={classes.Item}>
                    <div className={classes.Caption}>{filters.params.size.title}</div>
                    {filters.params.size.values.map((el, i) =>
                        <div onClick={() => changeParams('size', el.value)}
                            key={i} className={cn(classes.Checkbox, { [classes.Active]: el.active })}>
                            <span className={classes.Icon}>
                                <IconCheckbox />
                            </span>
                            <span className={classes.Name}>{el.title}</span>
                        </div>
                    )}
                </div>
            }
            <Button className={classes.Send}>
                <button>
                    Показать
                </button>
            </Button>
            <Button type={'dark'}>
                <button>
                    Сбросить
                </button>
            </Button>
        </div>
    )
}

export default Filters
