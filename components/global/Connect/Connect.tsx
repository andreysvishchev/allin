import classes from './Connect.module.scss'
import Container from '@/components/global/Container/Container'
import CustomImage from '@/components/global/CustomImage/CustomImage'
import image from '@/images/global/conect-img.jpg'
import Checkbox from '@/components/ui/Checkbox/Checkbox'
import {Controller, useForm} from 'react-hook-form'
import Button from '@/components/ui/Button/Button'
import Input from "@/components/ui/Input/Input";
import Textarea from "@/components/ui/Textarea/Textarea";
import {FormDataType} from "@/components/global/Connect/types";


const Connect = () => {

    const {handleSubmit, control, reset,} = useForm<FormDataType>({
        defaultValues: {
            name: '',
            messenger: '',
            message: '',
            agreement: true
        }
    })

    const onSubmit = (data: FormDataType) => {
        console.log(data)
    }

    return (
        <section className={classes.Section}>
            <Container className={classes.Container}>
                <div className={classes.Inner}>
                    <div className={classes.Title}>Связаться с нами</div>
                    <div className={classes.Subtitle}>Заполните форму ниже и наши специалисты свяжутся с Вами и
                        проконсультирую по любым вопросам.
                    </div>
                    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.Row}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{required: true}}
                                render={({field: {onChange, value}}) =>
                                    <Input name={'name'}
                                           label={'Имя'}
                                           className={classes.Input}
                                           value={value}
                                           onChange={onChange}/>}/>
                            <Controller
                                name="messenger"
                                control={control}
                                rules={{required: true}}
                                render={({field: {onChange, value}}) =>
                                    <Input name={'messenger'}
                                           label={'Мессенджер'}
                                           className={classes.Input}
                                           value={value}
                                           onChange={onChange}/>}/>
                        </div>
                        <div className={classes.Textarea}>
                            <Controller
                                name="message"
                                control={control}
                                render={({field: {onChange, value}}) =>
                                    <Textarea name={'message'}
                                              placeholder={'Комментарий'}
                                              value={value}
                                              onChange={onChange}/>}/>
                        </div>
                        <div className={classes.Agreement}>
                            <Controller
                                name="agreement"
                                control={control}
                                rules={{required: true}}
                                render={({field: {onChange, value}}) =>
                                    <Checkbox type={'square'}
                                              checked={value}
                                              onChange={onChange}/>}/>
                            <div className={classes.Text}>
                                Нажимая на кнопку «Получить коммерческое предложение», я даю согласие на обработку
                                персональных данных и соглашаюсь c условиями политики конфиденциальности.
                            </div>
                        </div>
                        <Button type={'transparent'}>
                            <button type={'submit'}>
                                Отправить
                            </button>
                        </Button>
                    </form>
                </div>
                <div className={classes.Image}>
                    <CustomImage src={image} alt={''}/>
                </div>
            </Container>
        </section>
    )
}

export default Connect