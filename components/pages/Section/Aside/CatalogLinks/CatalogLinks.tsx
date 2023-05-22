import { useSection } from "@/components/pages/Section/store"
import { useId } from 'react'
import Collapsible from "react-collapsible"
import classes from './CatalogLinks.module.scss'

const CatalogLinks = () => {
    const id = useId()
    const links = useSection(state => state.catalogLinks)


    return (
        <div className={classes.Wrap}>
            <div className={classes.List}>
                {links && links.length
                    ? links.map((el, i) =>
                        <div key={i} className={classes.Category}>
                            <Collapsible open={true}
                                classParentString={classes.Accordion}
                                openedClassName={classes.Open}
                                contentElementId={`collapsible-content-${id}`}
                                triggerElementProps={{
                                    id: `collapsible-trigger-${id}`
                                }}
                                trigger={
                                    <div className={classes.Trigger}>{el.title}</div>
                                }>
                                <div className={classes.Items}>
                                    {el.links && el.links
                                        ? el.links.map((link, index) =>
                                            <button className={classes.Button} key={index}>{link.title}</button>
                                        ) : null}
                                </div>
                            </Collapsible>
                        </div>
                    ) : null}
            </div>
        </div>
    )
}

export default CatalogLinks
