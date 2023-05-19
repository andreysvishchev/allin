import IconSearch from '@/components/icons/IconSearch'
import classes from './Search.module.scss'
import {ChangeEvent, useRef, useState} from 'react'
import cn from 'classnames'
import {DefaultLinkType} from '@/components/types/global'
import Link from 'next/link'
import {CSSTransition} from 'react-transition-group'
import IconClose from '@/components/icons/IconClose'

const testLinks = [
    {href: '/', title: 'Масло CBD'},
    {href: '/', title: 'Шоколад с CBD'}
]

const Search = () => {
    const [value, setValue] = useState<string>('')
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false)
    const [list, setList] = useState<DefaultLinkType[]>([])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

        if (value !== '') {
            setVisible(true)
            setList(testLinks)
        } else {
            setVisible(false)
            setList([])
        }
    }

    const closeSearchHandler = () => {
        setOpen(false)
        setVisible(false)
        setList([])
    }

    const openSearchHandler = () => {
        setOpen(true)
    }

    return (
        <div onMouseLeave={closeSearchHandler}
             onMouseEnter={openSearchHandler}
             className={cn(classes.Wrap, {[classes.Open]: open})}>

            <button className={classes.Icon}>
                <IconSearch/>
            </button>

            <CSSTransition
                in={open}
                timeout={200}
                mountOnEnter={true}
                unmountOnExit={true}>
                {() =>
                    <div className={classes.Inner}>
                        <div className={classes.Controls}>
                            <label className={classes.Label}>
                                <input onChange={onChangeHandler}
                                       value={value}
                                       className={classes.Input}
                                       placeholder="Поиск..."
                                       type="text"/>
                                <button className={classes.Clear}>
                                    <IconClose/>
                                </button>
                            </label>

                            <CSSTransition
                                in={visible}
                                timeout={200}
                                mountOnEnter={true}
                                unmountOnExit={true}>
                                {() =>
                                    <div className={cn(classes.List)}>
                                        {list && list.length
                                            ? list.map((el, i) =>
                                                <Link key={i} href={el.href} className={classes.Link}>{el.title}</Link>)
                                            : null}
                                    </div>}
                            </CSSTransition>
                        </div>
                    </div>}
            </CSSTransition>
        </div>
    )
}

export default Search
