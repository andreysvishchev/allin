import classes from './Pagination.module.scss'
import ArrowButton from "@/components/ui/ArrowButton/ArrowButton";
import cn from "classnames";

const Pagination = () => {

    const nextPage = () => {

    }

    const prevPage = () => {

    }

    return (
        <div className={classes.Wrap}>
            <ArrowButton color={'dark'} onClick={prevPage} type={'prev'}/>
            <div className={classes.List}>
                <div className={cn(classes.Page, classes.Current)}>1</div>
                <div className={classes.Page}>2</div>
                <div className={classes.Page}>3</div>
                <div className={classes.Page}>...</div>
                <div className={classes.Page}>15</div>
            </div>
            <ArrowButton color={'light'} onClick={nextPage} type={'next'}/>

        </div>
    );
};

export default Pagination;