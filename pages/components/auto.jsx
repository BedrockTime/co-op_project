import { Auto_props } from "./auto_props"

export const Auto = () => {
    return(
        <div>
            <div className="background_up">
                <div className="our_auto">
                    <div className="our_auto_text">
                        <h1>наши</h1>
                        <h1 className="our_auto_text_h1">автомобили</h1>
                    </div>
                    <h5 className="our_auto_h5">Косвенная реклама порождена временем</h5>
                </div>
                <div className="auto"> 
                    <Auto_props img="https://img.freepik.com/free-vector/white-convertible-car-in-a-black-background-vector_53876-67370.jpg?t=st=1710517419~exp=1710518019~hmac=467741c1f706db4bca20080aa97c6ea337f9e2c13718a4aeb2ecb30c369186a7" name="Авто №1" disc="Описание автомобиля"/>
                    <Auto_props img="https://img.freepik.com/free-vector/white-hatchback-car-isolated-on-white-vector_53876-67409.jpg?size=626&ext=jpg&ga=GA1.1.970762476.1705174126&semt=ais" name="Авто №2" disc="Описание автомобиля"/>
                    <Auto_props img="https://img.freepik.com/free-vector/blue-sports-car-isolated-on-white-vector_53876-67354.jpg?size=626&ext=jpg&ga=GA1.1.970762476.1705174126&semt=ais" name="Авто №3" disc="Описание автомобиля"/>
                </div>
            </div>
            <div className="background_down">
                <h1>появились вопросы? звоните не откладывая</h1>
                <div className="background_down_phone">
                    <img src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/Fwty/KJCipZPSc" className="background_down_img"/>
                    <h1>8 (800) 555-35-35</h1>
                </div>
            </div>
        </div>
    )
}