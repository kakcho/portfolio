const Contacts = () => {
    return (<main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Я живу</h2>
                    <p>Оренбург/Россия</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+79228285130">+7 (922) 828-51-30</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Почта</h2>
                    <p><a href="mailto:nagaev_maks@inbox.ru">nagaev_maks@inbox.ru</a></p>
                </li>
            </ul>

    </div>
</main>
);
}
 
export default Contacts;